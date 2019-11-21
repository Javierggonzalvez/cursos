#!/usr/bin/python3
# -*- coding: utf-8 -*-
import sys
if "-v" in sys.argv:
	print("Version 0.1")
	sys.exit(0)
sys.stderr.write("ERROR\n")
print "Continuar con la apliacación"
