export DEBUG=True
export ENVIRONMENT_NAME=devel

ENVNAME=".venv"

if [ -d $ENVNAME ]; then

    . $ENVNAME/bin/activate

else

    python3 -m venv $ENVNAME
    . $ENVNAME/bin/activate
    pip install -r requirements.txt

fi
