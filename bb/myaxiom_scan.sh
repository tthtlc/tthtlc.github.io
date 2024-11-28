item="$1"
set -x
axiom-scan $item -m nmapx -T4 --top-ports 50 -oX ${item}_nmap --threads 60 --cache
axiom-scan $item -m httpx -o ${item}_http --cache
axiom-scan ${item}_http -m ffuf -wL quickhits.txt -o $item_ffuf.csv --cache --threads 3
axiom-scan ${item}_http -m hakrawler -plain --threads 3 -o $item_hakcrawl --cache
axiom-scan ${item}_http -m dnsx -resp -o ${item}_dns.out --cache
