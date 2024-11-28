cat c2.url |grep curl | sed "s/^curl '//"| sed "s/' \\$//g" > c2.out

