import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class usando_unittest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(
            executable_path="/opt/google/chrome/chromedriver")

    def test_cambiarVentana(self):
        driver = self.driver
        # abre ventana con google
        driver.get("https://google.es")
        time.sleep(3)
        # abre otra pestaña
        driver.execute_script("window.open('');")
        time.sleep(3)
        # en lanueva pestaña stackoverflow
        driver.switch_to.window(driver.window_handles[1])
        driver.get("https://stackoverflow.com")
        time.sleep(3)
        # volvemos a pestaña 1
        driver.switch_to.window(driver.window_handles[0])
        time.sleep(3)


if __name__ == '__main__':
    unittest.main()
