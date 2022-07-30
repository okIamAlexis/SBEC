import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formOne: FormGroup;
  formTwo: FormGroup;
  step: any = 2;

  constructor(private fb: FormBuilder) {
    
    this.formOne = this.fb.group({

      curp: ['', Validators.required],
      email: ['', Validators.required],
      noCliente: ['', Validators.required],
    }
    // },{validator: this.checkPassword} 
    );

    this.formTwo = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
      passwordCheck: [''],
      ask: ['', Validators.required],
      answer: ['', Validators.required]
    }, {validators: this.checkPassword}
    );

   }

  ngOnInit(): void {

    


  }


  checkPassword(group: FormGroup): any{
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordCheck'].value;
    
    return pass === confirmPass ? null : { notSame: true};
   }

  nextPaso(): void{
    this.step == 2;
  }

}
