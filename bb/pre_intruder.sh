
cat urls.txt | while read url; do
    curl -x http://127.0.0.1:8080 "$url"
done
