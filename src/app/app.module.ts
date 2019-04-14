import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video-component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

// service
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    VideoComponent,
    
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
  ],
  providers: [
    HeroService,
    MessageService,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}