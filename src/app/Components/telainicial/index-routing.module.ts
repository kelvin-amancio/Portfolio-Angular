import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelainicialComponent } from './telainicial.component';

const routes: Routes = [
  {
    path:'',
    component:TelainicialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
