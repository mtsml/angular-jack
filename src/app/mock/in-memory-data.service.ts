import { Injectable } from '@angular/core';
import { InMemoryDbService, ParsedRequestUrl, RequestInfoUtilities } from 'angular-in-memory-web-api/index';
import { Channel } from '../channel/Channel';
import { ChannelList, ChannelInfo } from '../channel/channel.service';
import { Video } from '../video/Video';
import { VideoInfo } from '../video/video.service';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    channels: Channel[] = [
        {channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア'},
        {channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室'}
    ];

    videos: Video[] = [
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた', thumbnails_url: '' },
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？', thumbnails_url: '' },
        { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？', thumbnails_url: '' }
    ];

    createDb() {
        const apis = { channel: this.getChannelList() };
        this.channels.forEach(channel => {
            apis[`channel_${channel.channel_id}`] = this.getChannelInfo(channel.channel_id);
        });
        this.videos.forEach(video => {
            apis[`video_${video.video_id}`] = this.getVideoInfo(video.video_id);
        });
        return apis;
    }

    getChannelList(): ChannelList {
        return { channel_list: this.channels };
    }

    getChannelInfo(channel_id: string): ChannelInfo {
        const channel_nm = this.channels.find(channel => channel.channel_id === channel_id).channel_nm;
        const video_list = this.videos.filter(video => video.channel_id === channel_id);
        return { channel_nm, video_list };
    }

    getVideoInfo(video_id: string): VideoInfo {
        const video_nm = this.videos.find(video => video.video_id === video_id).video_nm;
        return { video_nm };
    }

    parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
        // Mockなので厳密な比較は行わない
        const replaced_url = url.replace('channel/', 'channel_').replace('video/', 'video_');
        return utils.parseRequestUrl(replaced_url);
    }
}