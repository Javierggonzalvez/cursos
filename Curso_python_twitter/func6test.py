#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""Crear una función que devuelva números.
Instrucciones:

Definir una función llamada "obtenerRespuesta"
Esta función solicita al usuario un texto. El usuario verá el pantalla "Introduce tu respuesta:\n"
La función devuelve lo que el usuario introduce
Llamar a la función "obtenerRespuesta" y guardar el resultado en la variable "respuesta"
Visualizar el valor de la variable "respuesta"""
# Definir función
def obtenerRespuesta():
	texto = input("Introduce tu respuesta: \n")
	return texto
# Llamar a función
respuesta = obtenerRespuesta()
# Visualizar variables
print(respuesta)