import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from '../editprofile/editprofile';

@NgModule({
  declarations: [
    EditProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePage),
  ],
})
export class EditProfilePageModule {}
