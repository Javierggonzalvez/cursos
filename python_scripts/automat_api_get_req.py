import requests


req = requests.get("https://jsonplaceholder.typicode.com/comments?postId=2")
print(req.status_code)
print(req.content.decode('utf-8'))
# print(req.text)

resultado = req.json()
print(resultado)

print('-------------')
print(resultado[0])

print('-------------')
print(resultado[0]['name'])

print('-------------')
print(resultado[1]['name'])
