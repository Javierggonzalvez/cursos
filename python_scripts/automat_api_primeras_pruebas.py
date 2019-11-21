import unittest
import requests


class ApiTest(unittest.TestCase):

    def test_put_correcto_posts(self):
        # put reemplaza los datos por completo
        req = requests.put("https://jsonplaceholder.typicode.com/posts/5",
                           {'id': 1,
                            'title': 'Prueba put',
                            'body': 'Lorem ipsum...',
                            'userId': 1
                            })
        print(req.status_code)  # 200 OK
        self.assertEqual(req.status_code, 200)

    def test_patch_correcto_posts(self):
        # put reemplaza los datos por atributo
        req = requests.patch("https://jsonplaceholder.typicode.com/posts/5",
                             {'title': 'Hola Mundo'})
        print(req.status_code)  # 200 OK
        self.assertEqual(req.status_code, 200)


if __name__ == '__main__':
    unittest.main()
