import { PersonasComponent } from './personas/personas.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
{
  path:'tarjetas',
  component: TarjetasComponent
},
{
  path:'personas',
  component: PersonasComponent
},
{
  path: '**',
  redirectTo: 'tarjetas'
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
