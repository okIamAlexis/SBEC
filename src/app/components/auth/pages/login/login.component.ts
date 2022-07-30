import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { UserClient } from 'src/app/models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEjecutivo: string = 'Ejecutivo';
  userCliente: string = 'Cliente';
  userAdmin: string = 'Admin';

  password: string = '123';


  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService) { 
    this.loginForm = this.fb.group({

      user: ['', Validators.required],
      pass: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }

  links(group: FormGroup): void {
    if(this.userEjecutivo == group.controls['user'].value){
      this.router.navigate(['/dashboardMg/dashboardMg']);
      this.userEjecutivo = this.loginService.userEjecutivo;
    }
    if(this.userAdmin == group.controls['user'].value){
      this.router.navigate(['/dashboardAdm/dashboardAdm']);
      this.userAdmin = this.loginService.userAdministrador;
    }
    if(this.userCliente == group.controls['user'].value){
      this.router.navigate(['/dashboardClient/dashboardClient']);
      this.userCliente = this.loginService.userCliente;
    }
  }

  login():void {
    const data: UserClient = {
      usario: this.loginForm.value.user,
      contrasenia: this.loginForm.value.pass
    }
    console.log(data);
    this.loginService.signin(data).subscribe(res => {
      console.log(res);
    })

  }

}
