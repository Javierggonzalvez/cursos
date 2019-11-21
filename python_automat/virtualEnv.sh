ENTORNO_NAME="env"

if [ -d $ENTORNO_NAME ]; then
    . $ENTORNO_NAME/bin/activate

else
    virtualenv $ENTORNO_NAME --python=python3
    . $ENTORNO_NAME/bin/activate
    
fi
