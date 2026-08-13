import os

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


def get_newest_repos() -> list[dict[str, list[str]]]:
    url = user("repos")

    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

    repos = [
        {
            repo['full_name']: [
                repo['created_at'],
                repo['html_url'],
                repo['topics'],
                repo['pushed_at'],
                repo['description'],
                repo['url'],
                repo['homepage'],
            ]
        } for repo in req.json()]

    repos.sort(key=lambda repo: list(repo.values())[0][3], reverse=True)

    return repos


def user(path: str):
    req = requests.get('https://api.github.com/user', headers={
        "Authorization": f"Bearer {get_token()}"
    })

    match path:
        case "repos":
            return req.json().get("repos_url")
        case "user":
            return [req.json().get("avatar_url"), req.json().get("name"), req.json().get("location")]

    return None
