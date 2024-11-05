
use php, and etc.

php -S localhos:7877

[Mon Nov  4 01:23:06 2024] 127.0.0.1:46250 [200]: GET /generate_hypotrochoid.php?R=200&r=50&d=100&color=00ff00
[Mon Nov  4 01:23:06 2024] 127.0.0.1:46250 Closing

[Mon Nov  4 01:24:05 2024] 127.0.0.1:32946 Accepted
[Mon Nov  4 01:24:05 2024] 127.0.0.1:32946 [200]: GET /generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff
[Mon Nov  4 01:24:05 2024] 127.0.0.1:32946 Closing
[Mon Nov  4 01:24:05 2024] 127.0.0.1:32956 Accepted
[Mon Nov  4 01:24:05 2024] 127.0.0.1:32956 [200]: GET /generate_hypotrochoid.php?R=200&r=50&d=100&color=00ff00
[Mon Nov  4 01:24:05 2024] 127.0.0.1:32956 Closing
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56488 Accepted
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56488 [200]: GET /generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56488 Closing
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56494 Accepted
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56494 [200]: GET /generate_hypotrochoid.php?R=200&r=50&d=100&color=00ff00
[Mon Nov  4 01:24:35 2024] 127.0.0.1:56494 Closing



t
tthtlc:/home/tthtlc/tthtlc.github.io>cat myrun_savepng.sh 
DOMAIN="localhost:8988"
curl -o /tmp/hypotrochoid.png 'http://localhost:8988/generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff'

# Blue curve (default)
URL="http://$DOMAIN/generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff"

# Red curve
URL="http://$DOMAIN/generate_hypotrochoid.php?R=240&r=40&d=150&color=ff0000"

URL="http://$DOMAIN/generate_hypotrochoid.php?R=200&r=50&d=100&color=00ff00"
# Different parameters

curl -o /tmp/hypotrochoid.png $URL
tthtlc:/home/tthtlc/tthtlc.github.io>


