#!/usr/bin/python3
# -*- coding: utf-8 -*-
creditos = ("Javier GG", "Netyk", "2018")
infotweet = {}
listatweet = []
print("Bienvenidos a la aplicacion. ")
user = raw_input("Cual es tu usuario ? ")
i = 1
otro = "s"
def pedirtweet():
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
while otro == "s":
	print("Tweet numero ",i)
	i += 1
	infotweet = pedirtweet()
	listatweet.append(infotweet)
	otro = raw_input("Desea introducir un nuevo tweet s/n? ")
flistartweets(listatweet)
print("esto siempre saldra")
