#!/usr/bin/python3
# -*- coding: utf-8 -*-
from twitter.tweets.pedir import pedirtweet
fichero = open("twitter.txt","a")
fecha = "2018-02-18"
usuario = raw_input("Cual es tu usuario: ")
infotweet = pedirtweet(usuario)
print(infotweet)
fichero.write(":".join([usuario,infotweet["Mensaje"],fecha,str(infotweet["Likes"]),str(infotweet["Retweets"])])+ "\n")
fichero.close()