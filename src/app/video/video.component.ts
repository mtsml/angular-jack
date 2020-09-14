import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VideoService } from './video.service';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    video_id = ''
    video_nm = ''

    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService
    ) {}

    ngOnInit(): void {
        this.getVideoInfo()
    }

    getVideoInfo() {
        this.video_id = this.route.snapshot.paramMap.get('video_id')
        this.videoService.getVideoInfo(this.video_id)
            .subscribe(response => this.video_nm = response.video_nm)
    }
}