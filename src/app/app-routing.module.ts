import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'facilities',pathMatch:'full'},
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path:'facilities',
    loadChildren: () => import('./facilities/facilities.module').then(m => m.FacilitiesPageModule)
  },
  {
    path:'bookings',
    loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
