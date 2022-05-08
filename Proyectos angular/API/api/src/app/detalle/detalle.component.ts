import { ServiciopersonasService } from './../personas/services/serviciopersonas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
public datos:Array<any>=[]
  constructor(private servicioservice:ServiciopersonasService) {
    this.servicioservice.getApi().subscribe((resp:any)=>{
      console.log(resp)
      this.datos=resp
    })
   }
  ngOnInit(): void {

  }

}
