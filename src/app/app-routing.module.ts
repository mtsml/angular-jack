import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ChannelComponent } from './channel/channel.component';

const routes: Routes = [
    { path: '', component: HeroesComponent },
    { path: ':channel_id', component: ChannelComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }