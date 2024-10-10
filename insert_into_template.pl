#!/usr/bin/perl
unless ($#ARGV==2) { die "$0 <orig_file> <file_to_be_inserted> <pattern> \n"; }
$existing_file = $ARGV[0];
$file_to_be_inserted = $ARGV[1];
$pattern = $ARGV[2];

open(INPUT, "<$existing_file") or die "Can't open $existing_file: $!";
while(<INPUT>){
    if (/$pattern/) {
        open(INSERTED, "<$file_to_be_inserted") or die "Can't open $file_to_be_inserted: $!";
        while(<INSERTED>){
            print;
        }
        close(INSERTED);
    } else {
        print;
    }
}
close(INPUT);

