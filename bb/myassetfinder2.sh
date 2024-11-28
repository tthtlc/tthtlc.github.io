domain=$1
assetfinder -subs-only $domain > $domain.asset
httpx -l $domain.asset -o $domain.url
