import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: ':channel_id', component: ChannelComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }