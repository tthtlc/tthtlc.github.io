mkdir /tmp/tmp$$
for name in $*
do
	cp $name /tmp/tmp$$
	mychange '<script>' '<script> \
document.addEventListener(\"contextmenu\", function(event) { event.preventDefault(); });' $name
done
