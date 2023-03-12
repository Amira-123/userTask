import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'',
  //   loadChildren: ()=> import('./dashboard/dashboard.module')
  //   .then(m=>m.DashboardModule),
  //  pathMatch:'full'
  // },
  // {
  //   path:'auth',
  //   loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
  //   pathMatch:'full'
  // }
  {path:'',
    loadChildren: ()=> import('./dashboard/dashboard.module')
    .then(m=>m.DashboardModule),
   pathMatch:'full'
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
