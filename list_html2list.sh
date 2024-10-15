#ls -1tr *.html | sed -e "s/^/'/" -e "s/$/', /"
git ls-files | grep "\.html" | grep -v old | grep -v index | grep -v test | grep -v trivia | grep -v backup | grep -v mobile | sed -e "s/^/'/" -e "s/$/', /" | tee /tmp/out$$

mv README.md /tmp/README.md$$

cat /tmp/out$$ | sed 's/^\(.*\)$/+ [\1](\1)/' > README.md
cat README.md.tmpl | sed 's/^- \(.*\)$/- [\1](\1)/' | sed 's/^  - \(.*\)$/  - [\1](\1)/' >> README.md

mv index.html /tmp/index.html$$
mv index_spa.html /tmp/index_spa.html$$
mv index_search.html /tmp/index_search.html$$

./list_recenthtml.sh > /tmp/latest$$

./insert_into_template.pl index.tml /tmp/out$$ INDEX.TMPL > /tmp/out$$.1
./insert_into_template.pl /tmp/out$$.1 /tmp/latest$$ LATEST.TMPL > index.html
./insert_into_template.pl index_spa.tml /tmp/out$$ INDEX.TMPL > index_spa.html
./insert_into_template.pl index_search.tml /tmp/out$$ INDEX.TMPL > index_search.html

echo "check content of /tmp/out$$"
read data

vi /tmp/out$$

#grep -v index.html | grep -v trivia | sed -e "s/^/'/" -e "s/$/', /"
