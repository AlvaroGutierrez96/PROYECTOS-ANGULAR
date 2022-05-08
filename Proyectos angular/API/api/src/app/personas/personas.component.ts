
import { Component, OnInit } from '@angular/core';
import { ServiciopersonasService } from './services/serviciopersonas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public datos:Array<any>=[]
  constructor(private serviciopersonasService:ServiciopersonasService){
    this.serviciopersonasService.getApi().subscribe((resp:any)=>{
      console.log(resp)
      this.datos=(resp)
    })
  }

  ngOnInit(): void {


  }

}
