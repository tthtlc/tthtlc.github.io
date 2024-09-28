set -x
for name in $*
do

	cat $name | sed "s/<.head>/\
<!-- Google tag (gtag.js) --> \
<script async src=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=G-GEX61LPT08\"><\/script> \
<script> \
  window.dataLayer = window.dataLayer || []; \
  function gtag(){dataLayer.push(arguments);} \
  gtag(\'js\', new Date()); \
  gtag(\'config\', \'G-GEX61LPT08\'); \
<\/script> \
<\/head>/" > $name$$
	mv $name$$ $name
done
