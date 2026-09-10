import os
from pathlib import Path
from typing import Any

from dotenv import load_dotenv
import requests

load_dotenv(Path(__file__).with_name('.env'))

GITHUB_API_URL = 'https://api.github.com'
GITHUB_USERNAME = os.getenv('GITHUB_USERNAME', 'Sciencewolf')
SHOWCASE_TOPIC = 'showcase'


def github_headers() -> dict[str, str]:
    headers = {
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
    }
    token = os.getenv('GITHUB_TOKEN', '').strip()

    if token:
        headers['Authorization'] = f'Bearer {token}'

    return headers


def get_newest_repos() -> list[dict[str, Any]]:
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
        timeout=10,
    )
    req.raise_for_status()
    response = req.json()

    if not isinstance(response, list):
        raise ValueError('GitHub returned an unexpected repositories response.')

    repos = [
        {
            'full_name': repo['full_name'],
            'html_url': repo['html_url'],
            'description': repo['description'],
            'homepage': repo['homepage'],
            'topics': repo['topics'],
            'pushed_at': repo['pushed_at'],
            'created_at': repo['created_at'],
        }
        for repo in response
        if not repo.get('fork')
    ]

    featured = [repo for repo in repos if SHOWCASE_TOPIC in repo['topics']]

    return featured if featured else repos


def get_profile() -> dict[str, Any]:
    req = requests.get(
        f'{GITHUB_API_URL}/users/{GITHUB_USERNAME}',
        headers=github_headers(),
        timeout=10,
    )
    req.raise_for_status()
    response = req.json()

    return {
        'avatar_url': response.get('avatar_url'),
        'name': response.get('name') or response.get('login'),
        'location': response.get('location'),
    }
