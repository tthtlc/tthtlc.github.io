set -x
while 
read website
do
	assetfinder $website > $website.asf.out
	###cat $website.asf.out | gau |  dalfox pipe
	sleep 1
done
