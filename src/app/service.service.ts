import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {userInterface} from 'userData';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  service=new Subject<any>();
  constructor(private httpService:HttpClient) { }

  postUserDetails(data:any){
    return this.httpService.post('http://localhost:3000/user',data);
  }

  getUserDetails():Observable<userInterface[]>{
    return this.httpService.get<userInterface[]>('http://localhost:3000/user');
  }
}
