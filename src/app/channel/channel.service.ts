import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Channel } from './Channel';
import { Video } from '../video/Video';
import { environment } from '../../environments/environment';


export type ChannelList = {
    channel_list: Channel[]
}

export type ChannelInfo = {
    channel_nm: string
    video_list: Video[]
}

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