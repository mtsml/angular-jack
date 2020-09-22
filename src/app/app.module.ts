import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InMemoryDataService } from './mock/in-memory-data.service'

import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ChannelComponent } from './channel/channel.component';
import { VideoComponent } from './video/video.component';


@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        ChannelComponent,
        VideoComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        MDBBootstrapModule.forRoot(),
        environment.production 
            ? [] 
            : HttpClientInMemoryWebApiModule.forRoot(
                InMemoryDataService, { dataEncapsulation: false }
            )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }