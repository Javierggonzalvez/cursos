import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import cv2
import time


class usando_unittest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(
            executable_path="/opt/google/chrome/chromedriver")

    def test_opencv(self):
        driver = self.driver
        driver.get("http://www.google.com")
        driver.save_screenshot('img1.png')
        driver.save_screenshot('img2.png')
        time.sleep(3)

    def test_compararImagen(self):
        img1 = cv2.imread('img1.png')
        img2 = cv2.imread('img2.png')

        diferencia = cv2.absdiff(img1, img2)

        imagen_gris = cv2.cvtColor(diferencia, cv2.COLOR_BGR2GRAY)
        contours,_ = cv2.findContours(imagen_gris, cv2.RETR_EXTERNAL,
                                      cv2.CHAIN_APPROX_SIMPLE)

        for i in contours:
            if cv2.contourArea(i) >= 20:
                posicion_x, posicion_y, ancho, alto = cv2.boundingRect(i)
                cv2.rectangle(img1, (posicion_x, posicion_y), (
                    posicion_x + ancho, posicion_y, alto), (0, 0, 255), 2)
        while(1):
            cv2.imshow('imagen1', img1)
            cv2.imshow('imagen2', img2)
            cv2.imshow("diferences", diferencia)
            tecla = cv2.waitKey(5) & 0xFF

            if tecla == 27:
                break

        cv2.destroyAllWindows()


if __name__ == '__main__':
    unittest.main()
