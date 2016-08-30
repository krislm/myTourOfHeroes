import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
    imports:      [ BrowserModule,
                    HttpModule,
                    InMemoryWebApiModule.forRoot(InMemoryDataService),
                    FormsModule,
                    routing ], //application-wide service
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent ],
    providers: [HeroService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
