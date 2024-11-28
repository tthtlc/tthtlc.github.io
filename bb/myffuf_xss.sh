
wordlist="/home/tthtlc/pentest/SecLists/Fuzzing/XSS-Fuzzing"
while
	read url
do
	echo $url
	ffuf -w $wordlist -u $url -mc all -fs 42 -c -v
	###ffuf -w wordlist.txt -u https://example.org/FUZZ -mc all -fs 42 -c -v

done
