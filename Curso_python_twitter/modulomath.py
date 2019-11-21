#!/usr/bin/python3
# -*- coding: utf-8 -*-

"""Visualizar un número decimal
Inicializar una variable llamada "pi4" con el valor de "math.pi" pero limitándolo a 4 decimales: 3.1416

Visualizar la variable "pi4" """

import math

# Inicializar la variable "pi4" utilizando el valor de math.pi 
pi4 = math.pi
# Limitar a sólo 4 decimales
x = round(pi4,4)
# Visualizar la variable "pi4"
print(x)