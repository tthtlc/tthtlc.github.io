
## input is from waybackurls
wbu=$1
cat $wbu| gf xss | sed 's/=.*/=/' | sed 's/URL: //' | tee /tmp/testxss.txt
dalfox file /tmp/testxss.txt --delay 500 -b https://xss.networkdeveloper.xyz pipe
