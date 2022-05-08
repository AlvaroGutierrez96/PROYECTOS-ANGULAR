import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
private _historial:string[] =
  JSON.parse(localStorage.getItem('historial')!) || [];
public resultados:any[]=[];

get historial(){
  return [...this._historial]
}

constructor(private http: HttpClient) {

}

buscarGifs(query:string){

query=query.trim().toLocaleLowerCase();

  if(query.length && !this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this.historial.splice(0,10);

    localStorage.setItem('historial', JSON.stringify(this.historial))
  }

this.http.get (`https://api.giphy.com/v1/gifs/search?api_key=dhBueAbmXs5dzVM2GBEDnkXN7GlpNY2Z&q=${query}&limit=10`)
.subscribe((resp:any) =>{
 this.resultados =resp.data;
})


};


}
