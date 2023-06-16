import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() getChildVal:any=[];

ngOnInit(): void {
  console.log(this.getChildVal);
}

}
