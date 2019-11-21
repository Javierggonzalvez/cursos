#!/usr/bin/python3
# -*- coding: utf-8 -*-
#MODULO para uso de twitter

def pedirtweet(user):
	tweet = None
	likes = 0
	retweets = 0
	tweets = raw_input("Que esta pasando? ")
	likes =int(raw_input("Cuantos likes? "))
	retweets = int(raw_input("Cuantos retweets "))
	infotweet ={"Autor":user, "Mensaje":tweet, "Likes":likes, "Retweets":retweets}
	return infotweet

def flistartweets(listatweet):
	for tweet in listatweet:
		print(str(tweet))
		likes = tweet['Likes']
		retweets = tweet['Retweets']
		if likes > 2:
			print("+d 2 likes")
		elif likes == 1:
		    print("un linke")
		elif likes == 2:
		    print("2likes")
		else:
		    print("cap like")
		if (retweets > 0) : print("este tweet tiene retweets")