#!/usr/bin/python3
# -*- coding: utf-8 -*-
#MODULO para uso de twitter
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
