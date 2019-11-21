from subprocess import Popen, PIPE

""" Analiza Ip activas en la red:
    from 192.168.110.1 to 192.168.110.254
"""
for ip in range(1, 254):
    ipAddress = '192.168.110.' + str(ip)
    subprocess = Popen(['/bin/ping', '-c 1', ipAddress], stdout=PIPE,
                       stdin=PIPE, stderr=PIPE)
    stdout, stderr = subprocess.communicate(input=None)

    if b"bytes from " in stdout:
        print("IP %s" % (ipAddress))
