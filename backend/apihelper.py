import os
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
import requests

load_dotenv(Path(__file__).with_name('.env'))

GITHUB_API_URL = 'https://api.github.com'


class GitHubConfigurationError(RuntimeError):
    pass


def get_token() -> str:
    token = os.getenv('GITHUB_TOKEN', '').strip()

    if not token:
        raise GitHubConfigurationError('GITHUB_TOKEN is not configured.')

    return token


def github_headers() -> dict[str, str]:
    headers = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    }
    token = get_token()

    if token:
        headers['Authorization'] = f'Bearer {token}'

    return headers


def get_repo(url: str) -> Any:
    req = requests.get(url, headers=github_headers(), timeout=10)
    req.raise_for_status()

    return req.json()


def get_newest_repos() -> list[dict[str, list[dict[str, Any]]]]:
    url = f'{GITHUB_API_URL}/user/repos'
    req = requests.get(
        url,
        headers=github_headers(),
        params={
            'affiliation': 'owner',
            'visibility': 'public',
            'per_page': 100,
            'sort': 'pushed',
            'direction': 'desc',
        },
        timeout=10,
    )
    req.raise_for_status()
    response = req.json()

    if not isinstance(response, list):
        raise ValueError('GitHub returned an unexpected repositories response.')

    repos = [
        {
            repo['full_name']: [
                {"created_at": repo['created_at']},
                {"html_url": repo['html_url']},
                {"topics": repo['topics']},
                {"pushed_at": repo['pushed_at']},
                {"description": repo['description']},
                {"url": repo['url']},
                {"homepage": repo['homepage']},
            ]
        } for repo in response]

    repos.sort(key=lambda repo: list(repo.values())[0][3]['pushed_at'], reverse=True)

    return repos


def user(path: str = 'user'):
    req = requests.get(
        f'{GITHUB_API_URL}/user',
        headers=github_headers(),
        timeout=10,
    )
    req.raise_for_status()
    response = req.json()

    match path:
        case 'repos':
            return response.get('repos_url')
        case 'user':
            return [
                response.get('avatar_url'),
                response.get('name') or response.get('login'),
                response.get('location'),
            ]

    return None
