#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""Codificar diccionario en JSON
Crear una diccionario con relación número=>texto.
Codificarlo y visualizarlo por pantalla en formato JSON."""


# Importar módulo

import json
# Definir Variable
diccionario = {'1':'uno', '2':'dos', '3':'tres', '4':'cuatro', '5':'cinco'}
# Visualizar "diccionario" codificado en formato JSON
print(json.dumps(diccionario))

