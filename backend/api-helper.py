import os
from unittest import case

from dotenv import load_dotenv
import requests

load_dotenv()


def get_token() -> str:
    return os.getenv('GITHUB_TOKEN', '')


def get_repo(url: str) -> list[str]:
    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    return req.json()


def get_repos() -> list[dict[str, str]]:
    url = user("repos")

    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    return [{repo['name']: repo['url']} for repo in req.json()]


def get_topics(url: str) -> list | str | None:
    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    return req.json()['topics']


def get_homepage(url: str) -> str | None:
    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    return req.json()['homepage']


def get_description(url: str) -> str | None:
    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    return req.json()['description']


def user(path: str):
    req = requests.get('https://api.github.com/user', headers={
        "Authorization": f"Bearer {get_token()}"
    })

    match path:
        case "repos":
            return req.json().get("repos_url")
        case "user":
            return req.json()

    return None


if __name__ == "__main__":
    print(get_homepage(list(get_repos()[0].values())[0]))

    print(user("user"))