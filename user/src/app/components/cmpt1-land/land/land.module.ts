import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandRoutingModule } from './land-routing.module';
import { PhotosListComponent } from '../photos-list.component'
import { NavigationComponent } from '../../cmpt2-navigation/navigation.component';


@NgModule({
  declarations: [
    NavigationComponent,
    PhotosListComponent
  ],
  imports: [
    CommonModule,
    LandRoutingModule
  ]
})
export class LandModule { }
