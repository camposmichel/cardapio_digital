import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatusPage } from './status';
import { ProgressBarComponent } from './../../components/progress-bar/progress-bar';

@NgModule({
  declarations: [
    StatusPage,
    ProgressBarComponent,
  ],
  imports: [
    IonicPageModule.forChild(StatusPage),
  ],
})
export class StatusPageModule {}
