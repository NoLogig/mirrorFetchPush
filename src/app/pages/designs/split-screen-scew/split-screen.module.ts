import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatSliderModule } from '@angular/material';

import { SplitScreenScewComponent } from './split-screen-scew.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule, MatSliderModule
  ],
  exports: [ SplitScreenScewComponent ],
  declarations: [ SplitScreenScewComponent ]
})
export class SplitScreenModule {}
