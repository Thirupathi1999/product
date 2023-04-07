import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  data = new BehaviorSubject(null);
  currentData= this.data.asObservable();
  sendProducts(pr:any){
    alert(pr.price);
    this.data.next(pr)
  }
}
