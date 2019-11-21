import urllib2

""" ejecutar en interprete"""
response = urllib2.urlopen("http://www.google.com")
dir(response)