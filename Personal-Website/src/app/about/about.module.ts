import { NgModule } from '@angular/core';
import { AboutComponent } from 'src/app/about/about.component';
import { RouterModule } from '@angular/router';
import { AboutRoutes } from './about.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AboutRoutes)
  ],
  providers: []
})
export class AboutModule { }
