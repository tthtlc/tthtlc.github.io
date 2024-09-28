mystring="document.addEventListener("contextmenu", function(event) { event.preventDefault(); });"

for name in $*
do
	echo $mystring > /tmp/tmp$$
	cat $name >> /tmp/tmp$$
	mv /tmp/tmp$$ $name
done
