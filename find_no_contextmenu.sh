
###-e "<script>.*<.script>" 
grep "document.addEventListener..contextmenu" *.html *.js | sed 's/:.*//g' | sort > /tmp/tmp123$$.1
ls -1 *.html *.js | sort > /tmp/tmp123$$.2
list=`diff /tmp/tmp123$$.2 /tmp/tmp123$$.1 | grep "^< " | sed 's/^< //'`

#echo $list

grep -v script.*js.*script $list |grep -v google | sed 's/:.*//' |sort |uniq > /tmp/tmp123$$.3

set -x 
grep contextmenu `cat /tmp/tmp123$$.3`

echo $?

###list=`diff /tmp/tmp123$$.2 /tmp/tmp123$$.3 | grep "^< " | sed 's/^< //'`

#echo $list

