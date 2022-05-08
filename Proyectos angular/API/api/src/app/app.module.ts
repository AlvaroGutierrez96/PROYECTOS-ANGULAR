import { MoviebannerComponent } from './nav/pages/moviebanner/moviebanner.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PersonasComponent } from './personas/personas.component';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
    MoviebannerComponent,
    HeaderComponent,
    NavbarComponent,
    PersonasComponent,
    DetalleComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
