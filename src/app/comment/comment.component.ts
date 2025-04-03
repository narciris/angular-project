import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  imports: [],
  template: `
    <p>
      comments!
    </p>
    <img 
    src="https://preview.redd.it/o4idh7hhj2id1.jpeg?auto=webp&s=20f06e3f0686a19ff0f6aeac6dec116cf9d646e4" 
    alt="meme imagen">
    <p>meme del año
    </p>
  `,
  styles: `
  img{
    width: 40%;
    height:auto;
  }
  `
})
export class CommentComponent {

}
