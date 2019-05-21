import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  comments;

  ngOnInit() {
    this.comments = this.db
        .collection('posts')
        .doc('demo-post')
        .collection('comments')
        .snapshotChanges();

  }


  constructor(private db: AngularFirestore) { }
}
