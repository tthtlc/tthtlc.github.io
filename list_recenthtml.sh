git log -p |grep "^diff "|sed 's/.* b\///'| grep "\.html" | head -10 | xargs -I {} printf "        <a href=\"%s\">Latest Creation</a><br>\n" "{}"

#### sed 's/:<a href="rotating_polygons_opposite_30canvas.html">Experiment Version</a> <br>

