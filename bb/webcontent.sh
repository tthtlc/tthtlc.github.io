url="$1"
list="./Discovery/File-System \
./Discovery/File-System/OBEX_common.txt \
./Discovery/File-System/OBEX_rare.txt \
./Discovery/Web-Content/UnixDotfiles.fuzz.txt \
./Discovery/Web-Content/raft-large-files.txt \
./Discovery/Web-Content/raft-small-files-lowercase.txt \
./Discovery/Web-Content/raft-small-files.txt \
./Discovery/Web-Content/rssfeed-files.txt \
./Discovery/Web-Content/LinuxFileList.txt \
./Discovery/Web-Content/raft-large-files-lowercase.txt \
./Discovery/Web-Content/CMS/cms-configuration-files.txt \
./Discovery/Web-Content/versioning_metafiles.txt \
./Discovery/Web-Content/Domino-Hunter/Domino-Files.txt \
./Discovery/Web-Content/raft-medium-files.txt \
./Discovery/Web-Content/Common-PHP-Filenames.txt \
./Discovery/Web-Content/Randomfiles.fuzz.txt \
./Discovery/Web-Content/raft-medium-files-lowercase.txt"

for item in $list
do
	wordlist="$HOME/pentest/SecLists/$item"
	gobuster dir -u "$url" -w $wordlist
done
