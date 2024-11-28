
while true
	read inputurl
do 
	echo $inputurl
	xsser --all -u $inputurl
	sleep 3
done
