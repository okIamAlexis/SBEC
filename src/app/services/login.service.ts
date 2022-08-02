import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserClient } from '../models/usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = 'http://localhost:35231/user';

  userEjecutivo: string =  '';
  userAdministrador: string = '';
  userCliente: string = '';

  constructor(private http: HttpClient) { }

  signin(user:UserClient): Observable<any>{
    return this.http.post(`${this.URL}/user/singin`, user);
  }


  info(): void{

  }



}

