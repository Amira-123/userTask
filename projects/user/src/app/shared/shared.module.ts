import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeComponent } from './components/theme/theme.component';



@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend:true
    })
  ],
  exports:[
    ThemeComponent,
    TranslateModule
  ]
})
export class SharedModule { }
