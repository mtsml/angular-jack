import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
    channel_list = [
        {channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア'},
        {channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室'}
    ]

    channel_id = ''
    channel_nm = ''

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.getChannelId()
    }

    getChannelId() {
        this.channel_id = this.route.snapshot.paramMap.get('channel_id');
        this.channel_list.map(channel => {
            if (channel.channel_id = this.channel_id) {
                this.channel_nm = channel.channel_nm
            }
        })
    }
}
