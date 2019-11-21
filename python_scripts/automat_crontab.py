import datetime

now = datetime.datetime.now()
new_file = open("/home/javi/Cursos/python_scripts/crontab.txt", 'w')
new_file.write("Hora: " + str(now))
new_file.cose()


# Crontab
"""
Arg 1: Minuto ( 0-59)
Arg 2: Hora (0-23)
Arg 3: Día of month (1-31)
Arg 4: Mes (1-12)
Arg 5: Día de la semana (0-6) Domingo = 0
Arg 6: ¿Que se va a ejecutar? el comando
"""
# todos los dias de todos los meses a las 13:48h ejecute el script
# 48 13 * * * python3 /home/javi/Cursos/python_scripts/automat_crontab.py