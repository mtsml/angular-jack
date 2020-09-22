import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { VideoService } from './video.service';


@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
    video_id = ''
    video_nm = ''
    safe_video_url = null

    constructor(
        private route: ActivatedRoute,
        private videoService: VideoService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.getVideoInfo()
    }

    getVideoInfo() {
        this.video_id = this.route.snapshot.paramMap.get('video_id')
        this.videoService.getVideoInfo(this.video_id)
            .subscribe(response => this.video_nm = response.video_nm)
        const video_url = `https://www.youtube.com/embed/${this.video_id}`
        this.safe_video_url = this.sanitizer.bypassSecurityTrustResourceUrl(video_url)
    }
}