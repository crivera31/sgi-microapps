import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterProductComponent } from './register-product/register-product.component';

const routes: Routes = [
  {
    path:'registrar',
    component: RegisterProductComponent
  },
  {
    path: 'editar',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
