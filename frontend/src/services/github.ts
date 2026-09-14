export interface GitHubProfile {
  avatarUrl: string
  name: string
  location: string | null
}

export interface GitHubRepository {
  fullName: string
  name: string
  description: string | null
  htmlUrl: string
  homepage: string | null
  topics: string[]
  pushedAt: string
}

type UnknownRecord = Record<string, unknown>

const defaultApiBaseUrl = 'https://api-personal.martonaron.dev'
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl).replace(/\/$/, '')

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${apiBaseUrl}${path}`, {
    headers: { Accept: 'application/json' },
    signal,
  })

  if (!response.ok) {
    throw new Error(`The GitHub API request failed (${response.status}).`)
  }

  return response.json() as Promise<T>
}

function asRecord(value: unknown): UnknownRecord {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as UnknownRecord)
    : {}
}

function asString(value: unknown): string | null {
  return typeof value === 'string' && value.length > 0 ? value : null
}

export async function fetchGitHubProfile(signal?: AbortSignal): Promise<GitHubProfile> {
  const response = await request<unknown>('/api/v1/profile', signal)
  const profile = asRecord(response).github_user
  const record = asRecord(profile)

  const avatarUrl = asString(record.avatar_url)
  const name = asString(record.name)

  if (!avatarUrl || !name) {
    throw new Error('The profile response is missing required data.')
  }

  return {
    avatarUrl,
    name,
    location: asString(record.location),
  }
}

export async function fetchGitHubRepositories(
  limit = 6,
  signal?: AbortSignal,
): Promise<GitHubRepository[]> {
  const response = await request<unknown>(`/api/v1/repos?limit=${limit}`, signal)
  const rawRepositories = asRecord(response).repos

  if (!Array.isArray(rawRepositories)) {
    throw new Error('The repositories response has an unexpected format.')
  }

  return rawRepositories.flatMap((rawRepository) => {
    const fields = asRecord(rawRepository)
    const fullName = asString(fields.full_name)
    const htmlUrl = asString(fields.html_url)
    const pushedAt = asString(fields.pushed_at)
    const topics: unknown = fields.topics

    if (!fullName || !htmlUrl || !pushedAt) return []

    return [
      {
        fullName,
        name: fullName.split('/').at(-1) ?? fullName,
        description: asString(fields.description),
        htmlUrl,
        homepage: asString(fields.homepage),
        topics: Array.isArray(topics)
          ? topics.filter((topic: unknown): topic is string => typeof topic === 'string')
          : [],
        pushedAt,
      },
    ]
  })
}
