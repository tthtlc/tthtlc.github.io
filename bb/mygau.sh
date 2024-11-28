
#cat domains.txt | gau --threads 5
#gau --o example-urls.txt example.com
#gau --blacklist png,jpg,gif example.com
list=`cat $1`

for item in $list
do
	##gau $item > $item.gau
	gau $item |httpx --status-code|grep " 200" > $item.gau
done
