
grep gtag.js *.html | sed 's/:.*//g' | sort > /tmp/tmp123$$.1
ls -1 *.html | sort > /tmp/tmp123$$.2
list=`diff /tmp/tmp123$$.2 /tmp/tmp123$$.1 | grep "^< " | sed 's/^< //'`

echo $list
