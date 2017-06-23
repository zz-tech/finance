#!/usr/bin/python

import requests
import json
import datetime
import time

host = "10.19.35.21"
port = 8086
path = "query"
now = int(time.time())
end = now - now%86400
start = end - 86400
query = "q=select count(value) from resthub WHERE time >= %ss and time < %ss&db=db_resthub" % (start, end)
url = "http://%s:%s/%s?%s" % (host, port, path, query)

def date_format(time):
    return datetime.datetime.fromtimestamp(time).strftime("%Y, %m, %d")

r = requests.get(url)

data = json.loads(r.text)

try:
    count = data["results"][0]["series"][0]["values"][0][1]
except KeyError:
    count = 0

count = count*1.0/10**6

#
# [utc(2017, 6, 22), 6.192633],
#
print "[utc(%s), %s]," % (date_format(start), count)
