import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';


@Component({
  selector: 'app-moviebanner',
  templateUrl: './moviebanner.component.html',
  styleUrls: ['./moviebanner.component.css']
})
export class MoviebannerComponent implements OnInit {
  public datos:Array<any>=[]
  constructor(private servicioService: ServicioService) {
    this.servicioService.getApi().subscribe((resp:any) =>{
      console.log(resp)
      this.datos=resp})
   }

  ngOnInit(): void {
  }

}
