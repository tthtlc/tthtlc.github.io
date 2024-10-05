#ls -1tr *.html | sed -e "s/^/'/" -e "s/$/', /"
git ls-files | grep "\.html" | grep -v old | grep -v index.html | grep -v test | grep -v trivia | grep -v backup | grep -v mobile | grep -v heart_animation.html | sed -e "s/^/'/" -e "s/$/', /" 

git ls-files | grep "\.html" | grep -v old | grep -v index.html | grep -v test | grep -v trivia | grep -v backup | grep -v mobile | grep -v heart_animation.html > /tmp/out$$

cat /tmp/out$$ | sed 's/^/+ /' > /tmp/README.md

#grep -v index.html | grep -v trivia | sed -e "s/^/'/" -e "s/$/', /"
