
SCRIPT_DIR=$( cd -- "$(dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

nogf_execfile="$SCRIPT_DIR/mynogf.sh"
for filename in $*
do
	echo "cat $filename | bash $nogf_execfile"
	cat $filename | bash $nogf_execfile
done
