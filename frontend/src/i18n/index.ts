import { en } from './en'

/** All site copy. */
export const m = en

/** Replaces `{name}` style placeholders in a message. */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
