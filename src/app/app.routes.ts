import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ProjectViewComponent} from './project-view/project-view.component';
import {AboutComponent} from './about/about.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ProjectViewComponent,
        children: [
          {
            path: 'about',
            component: AboutComponent
          },
          {
            path: 'article',
            component: ArticleComponent
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'about',
        pathMatch: 'full'
      }
    ], {preloadingStrategy: PreloadAllModules, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutes {

}
