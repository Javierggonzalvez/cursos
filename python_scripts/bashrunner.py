import sys
from argparse import ArgumentParser


def parseArguments():
    parser = ArgumentParser()
    parser.add_argument("--saludar", "-s", dest="salud", type=str,
                        default="Persona sin nombre", help="Imprime un saludo")
    return parser.parse_args()


args = parseArguments()

if args.salud:
    print("Hola %s" % (args.salud))
