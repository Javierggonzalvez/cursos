import requests
import unittest


class ApiTest(unittest.TestCase):
    req = requests.get("https://jsonplaceholder.typicode.com/comments?postId=2")
    resultado = req.json()
    print(resultado)

    def test_varificar_mail_posts(self):
        self.assertEqual("Presley.Mueller@myrl.com", self.resultado[0]['email'])

    def test_verificar_id(self):
        self.assertEqual(6, self.resultado[0]['id'])


if __name__ == '__main__':
    unittest.main()
