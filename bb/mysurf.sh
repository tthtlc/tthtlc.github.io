sitefile=$1
# find all ssrf candidates (including external IP addresses via HTTP probing)
surf -l $sitefile
# find all ssrf candidates (including external IP addresses via HTTP probing) with timeout and concurrency settings
surf -l $sitefile -t 10 -c 200
# find all ssrf candidates (including external IP addresses via HTTP probing), and just print all hosts
surf -l $sitefile -d
# find all hosts that point to an internal/private IP address (no HTTP probing)
surf -l $sitefile -x
