import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:3000';

  userEjecutivo: string =  '';
  userAdministrador: string = '';
  userCliente: string = '';

  constructor(private http: HttpClient) { }

  signin(user:any){
    return this.http.post(`${this.URL}/user/singin`, user);
  }


  info(): void{

  }



}

