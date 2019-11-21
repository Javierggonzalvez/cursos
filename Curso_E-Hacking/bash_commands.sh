#hago wget de la pagina cisco.com, la descargo y ahora extraigo los dominios makeado!!!

#teclado español
 setxkbmap es


grep "href=" index.html | cut -d"/" -f3 | grep "\." | cut -d'"' -f1 | sort -u > dominios.txt

#para cada linea d dominios, lo mete en comando host(/nos saka la ip)

for dom in $(cat dominios.txt ); do host $dom; done

#en bonito

for dom in $(cat dominios.txt ); do host $dom; done

#mas bonito solo ips

for dom in $(cat dominios.txt ); do host $dom | grep "has address" | cut -d " " -f4; done > ips.txt

#leemos y ordenamos sin repetir

cat ips.txt | sort -u
