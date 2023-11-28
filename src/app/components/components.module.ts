import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { LoadingPageComponent } from './loading/loading-page/loading-page.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CurriculumDefaultComponent } from './curriculums/curriculum-default/curriculum-default.component';
import { RatingModule } from 'primeng/rating';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { CurriculumRedDefaultComponent } from './curriculums/curriculum-red-default/curriculum-red-default.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingPageComponent,
    CurriculumDefaultComponent,
    CurriculumRedDefaultComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule,
    ProgressSpinnerModule,
    RatingModule,
    DividerModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    LoadingPageComponent,
    CurriculumDefaultComponent,
    CurriculumRedDefaultComponent,
  ]
})
export class ComponentsModule { }
