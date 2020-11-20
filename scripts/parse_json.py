#!/usr/bin/env python3.9

import json
import datetime
import time
import sys
import getopt

def main(argv):
    # parse input arguments
    inputfile = ''
    outputfile = ''
    try:
        opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
    except getopt.GetoptError:
        print ('test.py -i <inputfile> -o <outputfile>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print ('test.py -i <inputfile> -o <outputfile>')
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg
    
    with open(inputfile) as json_file:
        # import data from input .json file
        print(json_file)
        data = json.load(json_file)
        i = 0
        
        # set initial timestamp to be 00:00
        startTime = data[0]['timestamp']
        starttime_formatted = datetime.datetime.fromtimestamp(startTime / 1000000)
        
        # add time_text, time_in_seconds, video_offset_time_msec fields to each chat entry
        while i < len(data):
            
            # set chat message timestamp
            timestamp = data[i]['timestamp']
            # convert timestamp to datetime format - /1000000 as epoch timestamp is in mili/micro seconds
            timestamp_formatted = datetime.datetime.fromtimestamp(timestamp / 1000000)
            # calculate the difference between initial and current chat timestamp
            difference_in_sec = int((timestamp_formatted - starttime_formatted).total_seconds())
            # calculate the milisecond difference between initial and current chat timestamp
            video_offset = int((timestamp_formatted - starttime_formatted).total_seconds() * 1000)
            
            # if time is less than 1hr use mm:ss, else use hh:mm:ss for time_text
            if difference_in_sec < 3600:
                tt_formatted = time.strftime('%M:%S', time.gmtime(difference_in_sec))
            else:
                tt_formatted = time.strftime('%H:%M:%S', time.gmtime(difference_in_sec))
            
            # add entries to json
            data[i]['time_text'] = tt_formatted
            data[i]['time_in_seconds'] = difference_in_sec
            data[i]['video_offset_time_msec'] = video_offset
            i+=1

        # write data to output .json file
        with open(outputfile, 'w') as outfile:
                json.dump(data, outfile)

if __name__ == "__main__":
    main(sys.argv[1:])