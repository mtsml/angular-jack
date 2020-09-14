import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChannelService } from './channel.service';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
    channel_id = ''
    channel_nm = ''
    video_list = []

    constructor(
        private route: ActivatedRoute,
        private channelService: ChannelService
    ) {}

    ngOnInit(): void {
        this.getChannelInfo()
    }

    getChannelInfo() {
        this.channel_id = this.route.snapshot.paramMap.get('channel_id');        
        this.channelService.getChannelInfo(this.channel_id)
            .subscribe(response => {
                this.channel_nm = response.channel_nm
                this.video_list = response.video_list
            })
    }
}