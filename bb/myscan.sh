
domain=$1
masscan -p1-65535 $domain --rate=1000
shodan  host amazon.co.uk
rustscan -a amazon.co.uk -b 5000
zmap  -p 80 amazon.co.uk
