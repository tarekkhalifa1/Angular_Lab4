import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() myEvent = new EventEmitter();

  userId = 1;
  successMsg = "";

  myRegFormValidation = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    age: new FormControl(0,[Validators.min(20), Validators.max(40)]),
    email: new FormControl("",[Validators.required, Validators.email])
  });

  get NameValid(){
    return this.myRegFormValidation.controls.name.valid;

  }

  get AgeValid(){
    return this.myRegFormValidation.controls.age.valid;
  }

  get EmailValid(){
    return this.myRegFormValidation.controls.email.valid;
  }


  SendData(name:string, age:number, email:string){
    if(this.NameValid && this.AgeValid && this.EmailValid){
      this.myEvent.emit({id: this.userId, name: name, age: age, email: email }); // send user data
      this.userId++;
      this.successMsg = "User added successfully";
      this.reloadPage();
    }
  }

  reloadPage(){
    setTimeout(() => {
      location.reload();
    }, 1500);
  }

}

