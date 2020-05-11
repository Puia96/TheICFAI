import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  model: any = {};
  @Output() cancelRead = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  read() {
    console.log(this.model);
  }

  cancel() {
    this.cancelRead.emit(false);
    console.log('cancelled');
  }

}
