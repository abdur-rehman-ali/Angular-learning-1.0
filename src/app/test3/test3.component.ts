import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  public hasError = true;
  public message = {
    color : 'blue',
    fontStyle : 'italic',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
