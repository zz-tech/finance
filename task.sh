#/bin/bash

PWD=$(cd "$(dirname "$0")"; pwd)
DATA="data.js"
PATH=$PWD:$PATH

cd $PWD
content=`query.py`

sed -i '$d' $DATA
echo "  "$content >> $DATA
echo "];" >> $DATA

cd -
