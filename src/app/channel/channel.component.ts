import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
    channels = [
        {channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア'},
        {channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室'}
    ]

    videos = [
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた' },
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？' },
        { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？' }
    ]

    channel_id = ''
    channel_nm = ''
    video_list = []

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getChannelInfo()
        this.getVideoList()
    }

    getChannelInfo() {
        this.channel_id = this.route.snapshot.paramMap.get('channel_id');
        this.channel_nm = this.channels.find(channel => channel.channel_id === this.channel_id).channel_nm;
    }

    getVideoList() {
        this.video_list = this.videos.filter(video => video.channel_id === this.channel_id)
    }
}