import { ServicioService } from './../services/servicio.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  public datos:Array<any>=[]
  constructor( private servicioService: ServicioService) {
    this.servicioService.getApi().subscribe((resp:any) =>{
      console.log(resp)
      this.datos=resp})
    }

  ngOnInit(): void {


  }

}
