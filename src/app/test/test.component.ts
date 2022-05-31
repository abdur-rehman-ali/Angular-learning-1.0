import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]', 
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  public name="ali joiya";
  public siteUrl = window.location.href;
  public interpolation  = "User to bind data from class to template";
  
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
