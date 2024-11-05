import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!:string | null
  private user!: string

  constructor() { }

  public login(){
    this.token = '123ABC'
    this.user = 'test@gmail.com'
    localStorage.setItem('token', this.token)
    return this.token
  }

  public logout(){
    this.token = ''
    this.user = ''
    localStorage.removeItem('token')
  }

  public getUser(){
    return this.user
  }

  public getToken(){
    const token = localStorage.getItem('token')
    this.token = token ?? null
    return this.token
  }

}
