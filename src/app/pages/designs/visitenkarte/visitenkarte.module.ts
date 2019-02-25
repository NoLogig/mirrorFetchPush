import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { VisitenkarteComponent } from './visitenkarte.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule, CommonModule,
    MatCardModule, MatDividerModule, MatButtonModule, MatIconModule
  ],
  exports: [VisitenkarteComponent],
  declarations: [
    VisitenkarteComponent
  ]
})
export class VisitenkarteModule { }
