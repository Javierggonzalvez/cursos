import requests

req = requests.post("https://jsonplaceholder.typicode.com/posts",
                    {'title': 'Mi prueba',
                     'body': 'lorem ipsum....',
                     'userId': 1,
                     })

print(req.status_code)  # 201 OK
