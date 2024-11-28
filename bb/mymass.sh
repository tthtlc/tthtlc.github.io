domain=$1
masscan -p1-65535 $domain --range 10.0.0.0/8 --rate=1000


#6.amazon.com
#FAIL: target IP address list empty
# [hint] try something like "--range 10.0.0.0/8"
# [hint] try something like "--range 192.168.0.100-192.168.0.200"
#tthtlc:/home/tthtlc/site/amazon>^C/mymass.sh "207-171-180-146.amazon.com"
#tthtlc:/home/tthtlc/site/amazon>vi ../mymass.sh 






