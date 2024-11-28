
wordlist="/home/tthtlc/pentest/SecLists/Fuzzing/XSS-Fuzzing"
wordlist1="/home/tthtlc/pentest/SecLists"

list="./Miscellaneous/web/keyhacks-api.md \
./Discovery/Web-Content/api/objects-uppercase.txt \
./Discovery/Web-Content/api/ispsystem_billmanager_api.txt \
./Discovery/Web-Content/api/objects.txt \
./Discovery/Web-Content/api/api-endpoints.txt \
./Discovery/Web-Content/api/api-seen-in-wild.txt \
./Discovery/Web-Content/api/api-endpoints-res.txt \
./Discovery/Web-Content/api/actions-lowercase.txt \
./Discovery/Web-Content/api/objects-lowercase.txt \
./Discovery/Web-Content/api/actions-uppercase.txt \
./Discovery/Web-Content/api/salesforce-aura-objects.txt \
./Discovery/Web-Content/api/actions.txt \
./Discovery/Web-Content/common-api-endpoints-mazen160.txt \
./Discovery/Web-Content/hashicorp-consul-api.txt \
./Fuzzing/User-Agents/software-name/microsoft-cryptoapi.txt \
./Fuzzing/User-Agents/software-name/amazon-api-gateway.txt"

url="$1"

for wordlist2 in $list
do
	wordlist="${wordlist1}/$wordlist2"
	ls -al $wordlist
	ffuf -rate 1 -w $wordlist -u $url -mc all -fs 42 -c -v
done
