set -x
for name in $*
do
	jsname=`grep '<script ' $name | sed 's/.*src="//' | sed 's/".*//g'`
	jsout=`cat $jsname`
	mychange '<script ' "<script> \
${jsout} \
</script>" $name
done
