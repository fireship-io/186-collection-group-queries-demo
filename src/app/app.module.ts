import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { UserCommentsComponent } from './user-comments/user-comments.component';

const config = {
  apiKey: 'AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA',
  authDomain: 'fireship-lessons.firebaseapp.com',
  databaseURL: 'https://fireship-lessons.firebaseio.com',
  projectId: 'fireship-lessons',
  storageBucket: 'fireship-lessons.appspot.com',
  messagingSenderId: '758773997881',
  appId: '1:758773997881:web:8991643725992873'
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    UserCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
