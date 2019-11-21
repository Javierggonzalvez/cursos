import requests


# put reemplaza los datos por completo
req = requests.put("https://jsonplaceholder.typicode.com/posts/5",
                   {'id': 1,
                    'title': 'Prueba put',
                    'body': 'Lorem ipsum...',
                    'userId': 1
                    })
print(req.status_code)  # 200 OK

# put reemplaza los datos por atributo
req = requests.patch("https://jsonplaceholder.typicode.com/posts/5",
                     {'title': 'Hola Mundo'})

print(req.status_code)  # 200 OK
