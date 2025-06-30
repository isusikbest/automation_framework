import requests


BASE_URL = 'https://jsonplaceholder.typicode.com'

payload  = {
    "title": "test_title",
    "body": "test_body",
    "userId": 1
}

updated_payload = {
    "title": "test_title_2",
    "body": "test_body_2",
    "userId": 2
}

patched_payload = {
    "body": "test_body_3"
}

def test_get_all_posts():
    response = requests.get(f"{BASE_URL}/posts")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_single_post():
    response = requests.get(f"{BASE_URL}/posts/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1

def test_get_post_comments():
    response = requests.get(f"{BASE_URL}/posts/1/comments")
    assert response.status_code == 200
    assert all(comment["postId"] == 1 for comment in response.json())

def test_get_comments_by_postId():
    response = requests.get(f"{BASE_URL}/posts/1/comments", params={"postId": 1})
    assert response.status_code == 200
    assert all(comment["postId"] == 1 for comment in response.json())

def test_create_post():
    response = requests.post(f"{BASE_URL}/posts", json=payload)
    assert response.status_code == 201
    assert response.json()["title"] == "test_title"
    
def test_update_post():
    response = requests.put(f"{BASE_URL}/posts/1", json=updated_payload)
    assert response.status_code == 200
    assert response.json()["title"] == "test_title_2"

def test_patch_post():
    response = requests.put(f"{BASE_URL}/posts/1", json=patched_payload)
    assert response.status_code == 200
    assert response.json()["body"] == "test_body_3"

def test_delete_post():
    response = requests.delete(f"{BASE_URL}/posts/1")
    assert response.status_code == 200