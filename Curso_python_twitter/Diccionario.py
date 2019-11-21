#!/usr/bin/python3
# Definir Variables

"""Instrucciones:
Crear una lista con números del 1 al 5. Nombre de la variable: lista
Crear una tupla con palabras del "uno" al "cinco". Nombre de la variable: tupla
Crear una diccionario con relación número=>texto. Por ejemplo: 1=>"uno". Nombre de la variable: diccionario
Visualizar las claves del diccionario
Visualizar los valores del diccionario"""


lista = [1,2,3,4,5]
tupla = ("uno","dos","tres","cuatro","cinco")

diccionario={1:"uno",2:"dos",3:"tres",4:"cuatro",5:"cinco"}

# Visualizar claves
print(diccionario.keys())

# Visualizar valores
print(diccionario.values())
