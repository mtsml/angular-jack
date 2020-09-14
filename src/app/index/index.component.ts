import { Component, OnInit } from '@angular/core';

import { Channel } from '../channel/Channel';
import { ChannelService } from '../channel/channel.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    title = 'おすすめYoutuber'
    channel_list: Channel[];

    constructor(
        private channelService: ChannelService
    ) { }

    ngOnInit(): void {
        this.getChannelList();
    }

    getChannelList() {
        this.channelService.getChannelList()
            .subscribe(response => this.channel_list = response.channel_list)
    }
}