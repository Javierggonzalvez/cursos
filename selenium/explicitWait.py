import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class usando_unittest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(
            executable_path="/opt/google/chrome/chromedriver")

    def test_explicitWait(self):
        driver = self.driver
        driver.get("http://www.google.com")
        try:
            # carga en elemento la pagina google, intentandolo 10 veces hasta que el elemento con nombre q este presente
            element = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.NAME, "q"))
            )
        finally:
            driver.quit()


if __name__ == "__main__":
    unittest.main()
