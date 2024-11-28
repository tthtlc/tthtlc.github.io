
url="http://www.net-security.org/vulnerability.php?id=$RANDOM"
counter=0
max_count=10000

while 
	[ $counter -lt $max_count ]
do
	curl $url
	counter=`expr $counter + 1`
done	
