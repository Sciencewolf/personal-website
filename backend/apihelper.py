import os
import time
from collections.abc import Callable
from pathlib import Path
from threading import Lock
from typing import Any

import requests
from dotenv import load_dotenv

load_dotenv(Path(__file__).with_name('.env'))

GITHUB_API_URL = 'https://api.github.com'
GITHUB_USERNAME = os.getenv('GITHUB_USERNAME', 'Sciencewolf')
SHOWCASE_TOPIC = 'showcase'
REQUEST_TIMEOUT = 10


CACHE_TTL_SECONDS = int(os.getenv('CACHE_TTL_SECONDS', '300'))

_cache: dict[str, tuple[float, Any]] = {}
_cache_lock = Lock()


def _cached(key: str, producer: Callable[[], Any]) -> Any:
    now = time.monotonic()

    with _cache_lock:
        entry = _cache.get(key)
        if entry and now - entry[0] < CACHE_TTL_SECONDS:
            return entry[1]

    value = producer()

    with _cache_lock:
        _cache[key] = (time.monotonic(), value)

    return value


def clear_cache() -> None:
    with _cache_lock:
        _cache.clear()


def github_headers() -> dict[str, str]:
    headers = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    }
    token = os.getenv('GITHUB_TOKEN', '').strip()

    if token:
        headers['Authorization'] = f'Bearer {token}'

    return headers


def _normalise_topics(value: Any) -> list[str]:
    if not isinstance(value, list):
        return []

    return [topic for topic in value if isinstance(topic, str)]


def _fetch_newest_repos() -> list[dict[str, Any]]:
    url = f'{GITHUB_API_URL}/users/{GITHUB_USERNAME}/repos'
    req = requests.get(
        url,
        headers=github_headers(),
        params={
            'type': 'owner',
            'per_page': 100,
            'sort': 'pushed',
            'direction': 'desc',
        },
        timeout=REQUEST_TIMEOUT,
    )
    req.raise_for_status()
    response = req.json()

    if not isinstance(response, list):
        raise ValueError('GitHub returned an unexpected repositories response.')

    repos = [
        {
            'full_name': repo.get('full_name'),
            'html_url': repo.get('html_url'),
            'description': repo.get('description'),
            'homepage': repo.get('homepage'),
            'topics': _normalise_topics(repo.get('topics')),
            'pushed_at': repo.get('pushed_at'),
            'created_at': repo.get('created_at'),
        }
        for repo in response
        if isinstance(repo, dict) and not repo.get('fork') and not repo.get('archived')
    ]

    repos = [repo for repo in repos if repo['full_name'] and repo['html_url']]
    featured = [repo for repo in repos if SHOWCASE_TOPIC in repo['topics']]

    return featured if featured else repos


def _fetch_profile() -> dict[str, Any]:
    req = requests.get(
        f'{GITHUB_API_URL}/users/{GITHUB_USERNAME}',
        headers=github_headers(),
        timeout=REQUEST_TIMEOUT,
    )
    req.raise_for_status()
    response = req.json()

    if not isinstance(response, dict):
        raise ValueError('GitHub returned an unexpected profile response.')

    return {
        'avatar_url': response.get('avatar_url'),
        'name': response.get('name') or response.get('login'),
        'location': response.get('location'),
    }


def get_newest_repos(limit: int | None = None) -> list[dict[str, Any]]:
    repos = _cached('repos', _fetch_newest_repos)

    return repos[:limit] if limit else repos


def get_profile() -> dict[str, Any]:
    return _cached('profile', _fetch_profile)
