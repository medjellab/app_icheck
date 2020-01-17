import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { MaterialModule } from '../core/material/material.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';
// import * as fromServices from './services';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    IonicModule,
    AuthPageRoutingModule,
    StoreModule.forFeature('users', reducers)
  ],
  declarations: [fromContainers.AuthPage, fromComponents.LoginComponent]
})
export class AuthPageModule {}
