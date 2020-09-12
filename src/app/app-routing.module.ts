import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChannelComponent } from './channel/channel.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'channel/:channel_id', component: ChannelComponent },
    { path: 'video/:video_id', component: VideoComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }