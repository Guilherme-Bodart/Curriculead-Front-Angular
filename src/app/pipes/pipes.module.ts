import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumTextPipe } from './enum-text.pipe';

@NgModule({
  declarations: [EnumTextPipe],
  imports: [
    CommonModule
  ],
  exports: [EnumTextPipe]
})

export class PipesModule { }
