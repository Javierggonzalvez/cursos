import scapy

""" ejecutar en terminal """
packet = Ether()/IP(dst="google.com")/ICMP()/"ABCD"

ls(packet)

sendp(packet, loop=1, inter=1)
