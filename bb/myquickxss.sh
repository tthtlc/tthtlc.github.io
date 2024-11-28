
SCRIPT_DIR=$( cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

list=`cat $1`
for hostname in $list
do
	cd /home/tthtlc/pentest/QuickXSS

	./QuickXSS.sh -d $hostname | tee $hostname.quickxss$$
done
