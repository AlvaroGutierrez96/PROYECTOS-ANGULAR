import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciopersonasService {

  _url ="https://ghibliapi.herokuapp.com/people"
  constructor(
    private http:HttpClient
  ) {
    console.log('Servicio')
  }
  getApi(){
    let header= new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url,{
      headers:header
    })
  }
}
