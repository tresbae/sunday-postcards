import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostCreateComponent } from './blog/post-create/post-create.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'create', component: PostCreateComponent},
  { path: 'about', component: AboutComponent},
  { path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
