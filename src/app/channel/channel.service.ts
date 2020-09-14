import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from './Channel';
import { Video } from '../video/Video';
import { environment } from '../../environments/environment.prod';


type ChannelList = {
    channel_list: Channel[]
}

type ChannelInfo = {
    channel_nm: string
    video_list: Video[]
}

const videos: Video[] = [
    { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた', thumbnails_url: '' },
    { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？', thumbnails_url: '' },
    { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？', thumbnails_url: '' }
]

const channel_list: Channel[] = [
    {channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア'},
    {channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室'}
]

@Injectable({
    providedIn: 'root'
})
export class ChannelService {
    private url =  environment.apiurl

    constructor(
        private http: HttpClient
    ) { }

    getChannelList(): Observable<ChannelList> {
        return this.http.get<ChannelList>(`${this.url}/channel`)
    }

    getChannelInfo(channel_id: string): Observable<ChannelInfo> {
        return this.http.get<ChannelInfo>(`${this.url}/channel/${channel_id}`)
    }
}