import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  @Input() post: any = null;
  @Input() showAnswersDetails: Boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
