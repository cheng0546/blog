import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {ProjectViewComponent} from './project-view/project-view.component';
import {AppRoutes} from './app.routes';
import {AboutComponent} from './about/about.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectViewComponent,
    AboutComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
