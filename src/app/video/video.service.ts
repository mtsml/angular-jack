import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './Video';
import { environment } from '../../environments/environment.prod';


type VideoInfo = {
    video_nm: string
}

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    private url =  environment.apiurl

    constructor(
        private http: HttpClient
    ) { }

    getVideoInfo(video_id: string): Observable<VideoInfo> {
        return this.http.get<VideoInfo>(`${this.url}/video/${video_id}`)
    }
}