filename=$1
filelist=`cat $filename | sed 's/\*\.//' | sort |uniq`

for domain in $filelist
do
echo $domain
whois $domain; 

###confirm that the 'Registrant Organization' value corresponds to 'Klarna *'
dig $domain; 

###ensure that DNS records do not point to a third party

done
