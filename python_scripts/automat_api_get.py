import requests

req = requests.get("https://jsonplaceholder.typicode.com/posts/1")

print(req.status_code)  # 200 OK
print(req.content)
