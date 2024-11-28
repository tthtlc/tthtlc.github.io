
domain=$1
###https://t.me/c/2293104967/933
echo $domain | nuclei -t personal/wp-setup-config.yaml

subfinder -d $domain -all |httpx-toolkit | nuclei -t personal/wp-setup-config.yaml

###nuclei -u http://testphp.vulnweb.com/ -t technologies/ngix-version.yaml

## ./http/cves/2023/CVE-2023-24488.yaml

##nuclei -stats -u $1 -t http/cves/2023/CVE-2023-24488.yaml
nuclei -stats -l $1 -t http/cves/2023/CVE-2023-24488.yaml

   nuclei -u https://subdomain.target.com -t vulnerabilities/subdomain-takeover/
   nuclei -list ip_range.txt -t network/
   nuclei -target 192.168.1.1:22,80,443 -t default-logins/
   nuclei -u https://target.com -t misconfiguration/cors/
   nuclei -u https://target.com -t misconfiguration/http-methods/
   nuclei -u https://target.com -t misconfiguration/directory-listing/
   nuclei -u https://target.com -t vulnerabilities/xss/
   nuclei -u https://target.com -t vulnerabilities/sql-injection/
   nuclei -u https://target.com -t vulnerabilities/file-inclusion/
    nuclei -u https://target.com -t vulnerabilities/open-redirect/
    nuclei -u https://api.target.com -t exposures/api-keys/
    nuclei -u https://api.target.com -t misconfiguration/unauthorized-access/
    nuclei -u https://api.target.com -t vulnerabilities/api-authentication-bypass/
    nuclei -u https://target.com -t exposures/sensitive-data/
    nuclei -u https://target.com -t exposures/backup-files/
    nuclei -u https://target.com -t default-logins/
    nuclei -u https://target.com -t misconfiguration/ssl/
    nuclei -list ips.txt -t exposures/database/
    nuclei -u https://target.com -t exposures/container/
    nuclei -u https://wordpress.target.com -t vulnerabilities/wordpress/
    nuclei -u https://cms.target.com -t vulnerabilities/joomla-drupal/
    nuclei -u https://target.com -t vulnerabilities/laravel-django-flask/
    nuclei -u https://target.com -t custom_templates/my-template.yaml
    nuclei -u https://target.com -t custom_templates/zero-day-exploit.yaml
    nuclei -u https://target.com -t exposures/git-folder/
    nuclei -u https://target.com -t exposures/hidden-files/
    nuclei -u https://target.com -t exposures/info-disclosure/
    nuclei -u https://target.com -t vulnerabilities/privilege-escalation/
    nuclei -u https://ci-cd.target.com -t exposures/ci-pipeline/
    nuclei -u https://bucket.s3.amazonaws.com -t exposures/s3-bucket/
nuclei -u https://target.com -tags ssl,misconfiguration -silent -output results.txt
