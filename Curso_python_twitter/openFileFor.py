#!/usr/bin/python3
# -*- coding: utf-8 -*-

with open("pollo.txt","r") as fichero:
	for linea in fichero:
		[usuario,mensaje,fecha,likes,retweets] = linea.split(":")
		print("*" * 80)
		print("Autor: {}\nMensaje:{}\nLikes: {} Retweets {}\n".format(\
			usuario,mensaje,fecha,likes,retweets))
