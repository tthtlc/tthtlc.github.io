DOMAIN="localhost:8988"
curl -o /tmp/hypotrochoid.png 'http://localhost:8988/generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff'

# Blue curve (default)
URL="http://$DOMAIN/generate_hypotrochoid.php?R=240&r=40&d=150&color=0000ff"

# Red curve
URL="http://$DOMAIN/generate_hypotrochoid.php?R=240&r=40&d=150&color=ff0000"

URL="http://$DOMAIN/generate_hypotrochoid.php?R=200&r=50&d=100&color=00ff00"
# Different parameters

curl -o /tmp/hypotrochoid.png $URL
