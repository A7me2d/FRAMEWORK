import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  inputValue:string = ''
isInputFocus = false;

onInputFocus(){
  this.isInputFocus = true
}
onInputBlur(){
  this.isInputFocus = false
}

}
