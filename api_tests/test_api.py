import requests
import pytest

def check_status_code(response, expected_code):
    assert response.status_code == expected_code

def check_content_type(response):
    content_type = response.headers.get("Content-Type", "")
    assert "application/json" in content_type

def check_response_not_empty(response):
    data = response.json()
    assert len(data) > 0, "response is empty"



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



def test_get_all_posts(base_url):
    response = requests.get(f"{base_url}/posts")
    check_status_code(response, 200)
    check_content_type(response)
    check_response_not_empty(response)
    assert isinstance(response.json(), list)

@pytest.mark.parametrize("post_id", [1,2,3])
def test_get_single_post(base_url, post_id):
    response = requests.get(f"{base_url}/posts/{post_id}")
    check_status_code(response, 200)
    check_content_type(response)
    assert response.json()["id"] == post_id


def test_get_post_comments(base_url):
    response = requests.get(f"{base_url}/posts/1/comments")
    check_status_code(response, 200)
    check_content_type(response)
    check_response_not_empty(response)
    assert all(comment["postId"] == 1 for comment in response.json())

@pytest.mark.parametrize("post_id", [1,2,3])
def test_get_comments_by_postId(base_url,post_id):
    response = requests.get(f"{base_url}/posts/{post_id}/comments")
    check_status_code(response, 200)
    check_content_type(response)
    check_response_not_empty(response)
    assert all(comment["postId"] == post_id for comment in response.json())

def test_create_post(base_url):
    response = requests.post(f"{base_url}/posts", json=payload)
    check_status_code(response, 201)
    check_content_type(response)
    assert response.json()["title"] == "test_title"
    
def test_update_post(base_url):
    response = requests.put(f"{base_url}/posts/1", json=updated_payload)
    check_status_code(response, 200)
    check_content_type(response)
    assert response.json()["title"] == "test_title_2"

def test_patch_post(base_url):
    response = requests.put(f"{base_url}/posts/1", json=patched_payload)
    check_status_code(response, 200)
    check_content_type(response)
    assert response.json()["body"] == "test_body_3"

def test_delete_post(base_url):
    response = requests.delete(f"{base_url}/posts/1")
    check_status_code(response, 200)
    check_content_type(response)
    