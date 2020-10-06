import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LienheComponent } from './lienhe.component';

const routes: Routes = [
  { path: '',component: LienheComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LienheModule { }
