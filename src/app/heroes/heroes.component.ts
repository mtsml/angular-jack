import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    title = 'おすすめYoutuber'
    channel_list = [
        {channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア'},
        {channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室'}
    ]
    ngOnInit(): void {
    }
}
