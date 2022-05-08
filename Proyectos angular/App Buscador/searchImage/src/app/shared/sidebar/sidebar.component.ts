import { GifsService } from './../../gifs/services/gifs.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  get historial(){
    return this.gifservice.historial
  }
constructor(private gifservice:GifsService){

}
}
