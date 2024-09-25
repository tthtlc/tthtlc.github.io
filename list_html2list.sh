#ls -1tr *.html | sed -e "s/^/'/" -e "s/$/', /"
git ls-files | grep "\.html" | grep -v old | grep -v index.html | grep -v trivia | grep -v mobile.html | grep -v heart_animation.html | sed -e "s/^/'/" -e "s/$/', /"
#grep -v index.html | grep -v trivia | sed -e "s/^/'/" -e "s/$/', /"
