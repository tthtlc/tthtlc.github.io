#ls -1tr *.html | sed -e "s/^/'/" -e "s/$/', /"
git ls-files | grep "\.html" | grep -v old | grep -v index | grep -v test | grep -v trivia | grep -v backup | grep -v mobile | grep -v heart_animation.html | sed -e "s/^/'/" -e "s/$/', /" | tee /tmp/out$$

mv README.md /tmp/README.md$$

cat /tmp/out$$ | sed 's/^/+ /' > README.md

mv index.html /tmp/index.html$$
mv index_spa.html /tmp/index_spa.html$$

./insert_into_template.pl index.tml /tmp/out$$ PETER.TMPL > index.html
./insert_into_template.pl index_spa.tml /tmp/out$$ PETER.TMPL > index_spa.html

echo "check content of /tmp/out$$"

vi /tmp/out$$

#grep -v index.html | grep -v trivia | sed -e "s/^/'/" -e "s/$/', /"
