import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Decorator';
   getVal:any=[];
  constructor(){
    
  }
  profileForm = new FormGroup({
    Name:new FormControl(''),
    Age:new FormControl(''),
    Contact:new FormControl(''),
  })
  onSubmit(){
    this.getVal=[this.profileForm.value];
  }
  
}
