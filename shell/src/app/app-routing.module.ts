import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('mfLogin/AuthModule').then( m => m.AuthModule)
  },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // {
  //   path: 'dashboard',
  //   component: HomeComponent
  // }
  // loadChildren: () => import('mfProductoComercial/ProductoComercialModule').then(m => m.ViewsModule)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
