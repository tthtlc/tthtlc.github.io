#ls -1tr *.html | sed -e "s/^/'/" -e "s/$/', /"
git ls-files | grep "\.html" | grep -v old | grep -v index.html | grep -v trivia | grep -v mobile.html | grep -v heart_animation.html | sed -e "s/^/'/" -e "s/$/', /" 

git ls-files | grep "\.html" | grep -v old | grep -v index.html | grep -v trivia | grep -v mobile.html | grep -v heart_animation.html | tee /tmp/out$$

cat /tmp/out$$ | sed 's/^/+ /' > /tmp/README.md

echo "Please replace README.md from /tmp/"

#grep -v index.html | grep -v trivia | sed -e "s/^/'/" -e "s/$/', /"
