import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { newUser, checkClient } from '../../../../models/newUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formOne: FormGroup;
  formTwo: FormGroup;
  step: any = 1;

  constructor(private fb: FormBuilder,
              private modelService: NgbModal,
              private nuevoUsuario: newUser) {
    
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

   enviar(){
    // this.modelService.open(modal);
    this.step = 2;
   }
   enviar2(modal: any){
    this.modelService.open(modal);
    // this.step = 2;
   }

  ngOnInit(): void {

  }


  checkPassword(group: FormGroup): any{
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['passwordCheck'].value;
    
    return pass === confirmPass ? null : { notSame: true};
   }

  pasoUno(): void{
    const data: checkClient = {
      curp: this.formOne.value.curp,
      idCuenta: this.formOne.value.noCliente
    }
    console.log(data); 


  }

  pasoDos(): void{
    const data: newUser = {
      
    }
  }


}
