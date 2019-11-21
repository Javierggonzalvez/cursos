#!/usr/bin/python3
# -*- coding: utf-8 -*-
total = 0   #variable global
print(total)
def cuadrado(numero):
	global total
	total = numero*numero #variable local
	print(total)
	valor=numero*numero
	return valor
print(total)
resultado = cuadrado(4)
print(total)
print(resultado)