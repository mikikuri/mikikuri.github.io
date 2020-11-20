#!/usr/bin/env python3
# coding: utf-8

import re
import json
import requests
import argparse
from retrying import retry

headers = {
    'Accept-Language': 'en-US,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
}

@retry(stop_max_attempt_number=3)
def get(url: str) -> str:
    try:
        r = requests.get(url, headers=headers)
        return r.text
    except requests.RequestException:
        pass
        
# Extract video id from HTML of channel page.
def get_live_video_info_from_html(html: str) -> dict:
    regex = r'"channelFeaturedContentRenderer":{"items":\[{"videoRenderer":{"videoId":"(.{11})'
    return re.search(regex, html).group(1)

def check_channel_live_streaming(channel_id: str) -> bool:
    try:
        html = get(f'https://www.youtube.com/channel/{channel_id}/featured')
        if '"label":"LIVE"' in html:
            # video_info = get_live_video_info_by_channel_id(channel_id)
            video_info = get_live_video_info_from_html(html)
            return video_info
        else:
            return False
    except Exception:
        raise

# usage: ./check_youtube.py youtube_channel_id
if __name__ == '__main__':
    
    parser = argparse.ArgumentParser(
        description='A tool to check if a channel currently has a live stream.',
        formatter_class=argparse.RawTextHelpFormatter)
    parser.add_argument('cid', help='YouTube Channel ID')
    args = parser.parse_args()
    
    channel_id = args.cid

    info = check_channel_live_streaming(channel_id)

    if info:
        print ("https://www.youtube.com/watch?v=%s" % (info))
    else:
        # print(f'No live streams for channel {channel_id} available now', file=sys.stderr)
        print ("Not_Live")
    exit(1)