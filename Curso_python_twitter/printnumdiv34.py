#!/usr/bin/python3
# -*- coding: utf-8 -*-
"""
Visualizar números que sean divisibles entre 3 y entre 4.
Instrucciones:
	Inicializar una lista vacía llamada numeros
	Recorrer la lista de números entre 1 y 100
	Añadir a la lista números sólo si el número es divisible entre 3 y entre 4

Resultado esperado: [12, 24, 36, 48, 60, 72, 84, 96]"""
# Inicializar lista
numeros=[]
# Recorrer números del 1 al 100
for x in range(1,101):
    # Condición
    if (x%3==0 and x%4 == 0):
    # Añadir elemento a la lista solo divisibles entre 3 y 4
    	numeros.append(x)
# Visualizar lista
print(numeros)

