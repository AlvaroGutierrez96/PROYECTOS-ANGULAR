import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  _url ="https://ghibliapi.herokuapp.com/films"
  constructor(
    private http:HttpClient
  ) {
    console.log('Servicio')
  }
  getApi(){
let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url,{
      headers:header
    })
    }
 /*    getApiDetail(id){
      let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url+ id,{
      headers:header
    }) */
    }


