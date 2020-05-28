import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  @Input() post: any = null;
  @Input() showAnswersDetails: Boolean = false;
  @Output() like: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onLike(id: string) {
    this.like.emit(id);
  }
}
