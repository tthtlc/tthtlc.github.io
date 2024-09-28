for name in $*
do
	mychange '<script>' '<script> \
document.addEventListener(\"contextmenu\", function(event) { event.preventDefault(); });' $name
done
