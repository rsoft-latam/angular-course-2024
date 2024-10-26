import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!:string
  private user!: string

  constructor() { }

  public login(){
    this.token = '123ABC'
    this.user = 'test@gmail.com'
    return this.token
  }

  public logout(){
    this.token = ''
    this.user = ''
  }

  public getUser(){
    return this.user
  }

}
