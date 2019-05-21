import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'user-comments', component: UserCommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
