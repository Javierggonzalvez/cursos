#!/usr/bin/python3
# -*- coding: utf-8 -*-
from twitter.tweets.listar import flistartweets
from twitter.tweets.pedir import pedirtweet
import os
import sys
import json # Grabar, leer ficheros con la infor.
creditos = ("Javier GG", "Netyk", "2018")
infotweet = {}
listatweet = []

if "-v" in sys.argv:			#si en los argumentos es ta -v daremos la version
	print("Twitter NetyK 0.1")
	sys.exit(0)

if not os.path.exists("data/"): #directorio para guardar nuestros json, sn existe lo crea
	os.mkdir("data/")

print("Bienvenidos a la Twiteer NetyK  0.1. ")
login = input("Cual es tu usuario ? ")
usuarios = {}

if os.path.exists("data/users.json"):		#comprobamos si existe users.json sn lo creamos, sn leemos de el 
	fusuarios = open("data/users.json","r")
	usuarios = json.load(fusuarios)
	fusuarios.close()

if login not in usuarios.keys():	#si el user es nuevo lo crearemos
	print("Tu usuario no existe, vamos a crearlo")
	nombre = input("Cual es tu nombre? ")
	usuarios[login] = {"id": len(usuarios)+1,"nombre": nombre}
	fusuarios = open("data/users.json","w")
	json.dump(usuarios,fusuarios) #guardamos en fusuarios
	fusuarios.close()

opcion = "1"
while opcion != "5":						#menu seleccion
	if opcion not in ["1","2","3","4"]:
		print("ERROR: Opcion incorrecta")
	print("""Menu:
		1)Mostrar mi timeline.
		2)Escribir un nuevo tweet
		3)Seguir a un usuario
		4)Mostrar mis tweets
		5)Exit""")
	opcion = input("escoje una opción: ")

	if opcion == "2":							#option 2
		tweets = []
		if os.path.exists("data/tweets.json"):
			ftweets = open("data/tweets.json","r")
			tweets = json.load(ftweets)
			ftweets.close()

		infotweet = pedirtweet(login)
		tweets.append(infotweet)
		ftweets = open("data/tweets.json","w")
		json.dump(tweets,ftweets)
		ftweets.close()

	elif opcion == "3":
		idusuarios = []
		fusuarios = open("data/users.json","r")
		usuarios = json.load(fusuarios)
		fusuarios.close()
		print("Lista usuarios :")
		for usuario in usuarios:
			if usuario != login:
				print("Id: {} Login: {} Nombre: {}".format(usuarios[usuario]["id"],usuario,usuarios[usuario]["nombre"]))
				idusuarios.append(usuarios[usuario]["id"])

		follow = int(input("Indica el id del user a seguir: "))
		if follow in usuarios:
			seguir = {}
			if os.path.exists("data/follow.json"):
				fseguir = open("data/follow.json","r")
				seguir = json.load(fseguir)
				fseguir.close()
			if login not in seguir:
				seguir[login] = []
			seguir[login].append(follow)
			fseguir = open("data/follow.json","w")
			seguir = json.dump(seguir,fseguir)
			fseguir.close()


	elif opcion == "4":							#option 4
		if os.path.exists("data/tweets.json"):
			ftweets = open("data/tweets.json","r")
			tweets = json.load(ftweets)
			ftweets.close()
			print("Lista de tus Tweets: ")
			for tweet in tweets:
				if tweet["Autor"] == login:
					print(tweet)
				else:
					print("No hay tweets")	

