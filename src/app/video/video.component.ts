import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    videos = [
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた' },
        { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？' },
        { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？' }
    ]

    video_id = ''
    video_nm = ''

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getVideoInfo()
    }

    getVideoInfo() {
        this.video_id = this.route.snapshot.paramMap.get('video_id')
        this.video_nm = this.videos.find(video => video.video_id === this.video_id).video_nm
    }
}