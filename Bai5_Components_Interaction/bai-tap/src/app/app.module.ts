import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RatingComponent} from './rating/rating.component';
import {HackernewsComponent} from './hackernews/hackernews.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {CountdownTimerAliasComponent} from './countdown-timer-alias/countdown-timer-alias.component';
import {CountdownTimerEventComponent} from './countdown-timer-event/countdown-timer-event.component';
import {CountdownTimerEventAliasComponent} from './countdown-timer-event-alias/countdown-timer-event-alias.component';
import {CountdownGetSetComponent} from './countdown-get-set/countdown-get-set.component';
import {CountdownTimerOnchangesComponent} from './countdown-timer-onchanges/countdown-timer-onchanges.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    HackernewsComponent,
    CountdownTimerComponent,
    CountdownTimerAliasComponent,
    CountdownTimerEventComponent,
    CountdownTimerEventAliasComponent,
    CountdownGetSetComponent,
    CountdownTimerOnchangesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
