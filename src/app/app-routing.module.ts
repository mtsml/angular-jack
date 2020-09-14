import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ChannelComponent } from './channel/channel.component';
import { VideoComponent } from './video/video.component';
import { ChannelService } from './channel/channel.service';


const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'channel/:channel_id', component: ChannelComponent },
    { path: 'video/:video_id', component: VideoComponent }
]

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
        ChannelService
    ]
})
export class AppRoutingModule { }