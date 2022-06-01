import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test10',
  templateUrl: './test10.component.html',
  styleUrls: ['./test10.component.css']
})
export class Test10Component implements OnInit {

  @Input('parentData') public data="";

  @Output() public childEvent = new EventEmitter();
  public fetch_data = 'Data from child to parent';
  
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit(this.fetch_data);
    
  }

}
