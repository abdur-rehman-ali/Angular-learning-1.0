import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public successClass = 'is-success';
  public dangerClass = 'is-danger';
  public upperCase = 'uppercase';
  public hasError = false;

  public messageClass = {
    'is-success' : !this.hasError,
    'is-danger' : this.hasError,
    'uppercase' : !this.hasError,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
