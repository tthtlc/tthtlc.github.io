
script=$1 
filename=$2

domainlist=`cat $filename`

for  domain in $domainlist
do
	$script $domain
done
