
###-e "<script>.*<.script>" 
grep "document.addEventListener..contextmenu" *.html | sed 's/:.*//g' | sort > /tmp/tmp123$$.1
ls -1 *.html | sort > /tmp/tmp123$$.2
list=`diff /tmp/tmp123$$.2 /tmp/tmp123$$.1 | grep "^< " | sed 's/^< //'`

#echo $list

grep -v script.*js.*script $list |grep -v google | sed 's/:.*//' |sort |uniq > /tmp/tmp123$$.3

cat /tmp/tmp123$$.3

grep "script src.*script" `cat /tmp/tmp123$$.3`  > /tmp/tmp123$$.4

diff /tmp/tmp123$$.3 /tmp/tmp123$$.4 | grep '/^< /' 

exit
##grep contextmenu `cat /tmp/tmp123$$.3`  > /tmp/tmp123$$.4

grep "script src.*script" `cat /tmp/tmp123$$.4` > /tmp/tmp123$$.5


###list=`diff /tmp/tmp123$$.2 /tmp/tmp123$$.3 | grep "^< " | sed 's/^< //'`

#echo $list

