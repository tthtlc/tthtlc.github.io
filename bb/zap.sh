docker pull ghcr.io/zaproxy/zaproxy:stable
docker pull zaproxy/zap-stable

docker run --privileged -v ${PWD}:/zap/wrk/:rw owasp/zap2docker-live zap-api-scan.py -f openapi -t url -x repot.xml -I

zap-api-scan.py -t https://cashier.deriv.com/graphql -f graphql

