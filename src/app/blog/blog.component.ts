import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
}

export interface Post {
  title: string;
  draft: boolean;
  body: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  tiles: Tile[] = [
      {cols: 1, rows: 1, color: 'blue'},
      {cols: 1, rows: 1, color: 'pink'},
      {cols: 1, rows: 1, color: 'green'},
      {cols: 1, rows: 1, color: 'red'},
    ];
  posts: Post[];

  constructor(){
    this.posts = [
      {
        title: 'Test 1',
        draft: false,
        body: 'Test 1',
      },
      {
        title: 'Test 2',
        draft: false,
        body: '',
      }
    ];
  }
}
