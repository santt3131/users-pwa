import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>('https://randomuser.me/api/?page=1&results=15&seed=abc&inc=id,name,picture,gender,email&noinfo').pipe(
      map((users)=> Object.values(users).filter((user)=>user))
    );
  }

  getUserById(id):Observable<User>{
    return this.http.get<User>('https://randomuser.me/api/?page=1&results=15&seed=abc&inc=id,name,picture,gender,email&noinfo').pipe(
      map((users)=> Object.values(users)[0].filter((user)=>user.id.value==id))
    );
  }

}
