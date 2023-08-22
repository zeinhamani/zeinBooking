import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacilityDetailPageRoutingModule } from './facility-detail-routing.module';

import { FacilityDetailPage } from './facility-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacilityDetailPageRoutingModule
  ],
  declarations: [FacilityDetailPage]
})
export class FacilityDetailPageModule {}
