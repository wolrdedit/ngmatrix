import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgmatrixComponent } from './ngmatrix.component';

@NgModule({
  imports: [CommonModule, NgmatrixComponent],
  exports: [NgmatrixComponent],
})
export class NgmatrixModule {}
