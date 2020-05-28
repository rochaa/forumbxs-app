import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent implements OnInit {
  @Input() formNewPost: FormGroup;

  constructor() { }

  ngOnInit(): void { }

}
