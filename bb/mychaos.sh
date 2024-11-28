domain=$1
export chaos_token="13ef8f8f-7754-42ab-bf08-fe104fd23a73"
chaos -key $chaos_token -d $domain > $domain.chaos.out

#axiom-scan huutokaupat.txt1 -m ffuf -w /tmp/ooo
#axiom-scan $domain.chaos.out -m dnsx -w $domain.chaos.out.dnsx
