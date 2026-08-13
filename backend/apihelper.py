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


def get_newest_repos() -> list[dict[str, list[dict[str, str | list[str]]]]]:
    url = user("repos")

    req = requests.get(url, headers={
        "Authorization": f"Bearer {get_token()}"
    })

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
        } for repo in req.json()]

    repos.sort(key=lambda repo: list(repo.values())[0][3]['pushed_at'], reverse=True)

    return repos


def user(path: str='user'):
    req = requests.get('https://api.github.com/user', headers={
        "Authorization": f"Bearer {get_token()}"
    })

    match path:
        case "repos":
            return req.json().get("repos_url")
        case "user":
            return [req.json().get("avatar_url"), req.json().get("name"), req.json().get("location")]

    return None
