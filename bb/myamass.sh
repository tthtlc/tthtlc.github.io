
amass enum -brute -o $1.out -d $1 -v
amass  enum -passive -d $1 -src >> $1.out
amass intel -d $1 -whois >> $1.out

