import dns
import dns.resolver
""" Ejecutar en interprete """
# registros para servidores correo
ansMx = dns.resolver.query('google.com', 'A')
ansMx = dns.resolver.query('google.com', 'MX')

# registros para servidores de nombres
ansNS = dns.resolver.query('google.com', 'NS')

# registros para direcciones IPV4
ansA = dns.resolver.query('google.com', 'A')


# registros para direcciones IPV6
ansAAAA = dns.resolver.query('google.com', 'AAAA')

# registros para direcciones SOA
ansSOA = dns.resolver.query('google.com', 'SOA')

# registros textuales
ansTXT = dns.resolver.query('google.com', 'TXT')

for ans in ansMx:
    print("servidores correo")
    print(ans)

for ans in ansNS:
    print("servidores nombre")
    print(ans)

for ans in ansA:
    print("servidores IPV4")
    print(ans)

for ans in ansAAAA:
    print("servidores IPV6")
    print(ans)

for ans in ansSOA:
    print("servidores SOA")
    print(ans)

for ans in ansTXT:
    print("servidores TXT")
    print(ans)

""" 2 parte, EJecutar en interprete """

import dns.name

n = dns.name.from_text('www.google.com')
n1 = dns.name.from_text('google.com')

print(n.is_subdomain(n))

print(n1.is_subdomain(n))

print(n.labels)
print(n1.labels)

""" 3 parte. Ejecutar en interprete """
import dns.reversename

n = dns.reversename.from_address('127.0.0.1')
print(n)
print(dns.reversename.to_address(n))

""" 4 prte . ejecutar en interprete"""
import dns.query
import dns.zone

for ans in ansA:
    print(ans)

z = dns.zone.from_xfr(dns.query.xfr('172.217.17.14', 'thehacerway.com')
