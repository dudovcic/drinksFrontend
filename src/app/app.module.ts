import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventComponent } from './components/event/event.component';

import { EventsService } from './components/event-list/events.service';
import { EventMapComponent } from './components/event-map/event-map.component';
import { CommentComponent } from './components/comment/comment.component';
import { HumanTimePipe } from './components/comment/human-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    EventMapComponent,
    CommentComponent,
    HumanTimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxJxjIW0U_f-Fm9aVBHDVa5aJ6UPI7Ypo'
    }),
    AgmJsMarkerClustererModule,
    FormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
