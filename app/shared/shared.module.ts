import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { LensDirective } from './directives/lens/lens.directive';
import { FilterAuthorPipe } from './pipes/filter-author/filter-author.pipe';




@NgModule({
  declarations: [
    FilterPipe,
    PaginationPipe,
    LensDirective,
    FilterAuthorPipe,
   
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    PaginationPipe,
    LensDirective,
    FilterAuthorPipe
  ]
})
export class SharedModule { }
