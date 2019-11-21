#!/usr/bin/python3
# -*- coding: utf-8 -*-
#MODULO para uso de twitter

def pedirtweet(usuario):
	tweet = None
	likes = 0
	retweets = 0
	tweet = input("Que esta pasando? ")
	likes =int(input("Cuantos likes? "))
	retweets = int(input("Cuantos retweets "))
	infotweet ={"Autor":usuario, "Mensaje":tweet, "Likes":likes, "Retweets":retweets}
	return infotweet