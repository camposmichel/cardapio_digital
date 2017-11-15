import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOptionsPage } from "./list-options";

@NgModule({
    declarations: [
        ListOptionsPage,
    ],
    imports: [
        IonicPageModule.forChild(ListOptionsPage),
    ],
})
export class ListOptionsPageModule { }
