import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getData(){
    return[
      "ram","shyam","ganesh","suresh","umesh","umesh","ram","umesh","umesh","umesh","umesh","ram","shyam","ganesh","suresh","umesh","umesh","ram","umesh","umesh","umesh","umesh"
      
    ];
  }
}
