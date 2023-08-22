import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacilitiesPage } from './facilities.page';

const routes: Routes = [
  {
    path: '',
    component: FacilitiesPage
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitiesPageRoutingModule {}
