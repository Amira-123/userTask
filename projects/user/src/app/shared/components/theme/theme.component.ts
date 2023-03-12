import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  storedTheme:any='';
  lang:string='en'
  @Output() selectedColor:EventEmitter <string> =new EventEmitter;
  @Output() selectedlang:EventEmitter <string> =new EventEmitter
  constructor(private sharedService:SharedService) { }
  select:boolean=false;

  ngOnInit(): void {
    if('theme-color' in localStorage){
      this.storedTheme=localStorage.getItem('theme-color')
     }
     else{
       this.storedTheme=localStorage.setItem('theme-color','theme-red')
     }
  }
  selectColor(){
    this.select=!this.select
  }
  setTheme(theme:any){
    this.selectedColor.emit(theme);
    this.sharedService.getColorTheme()
  }
/////////////translate
changeLanguage(event:any){
  let value=event.target.innerText

  if(this.lang=="en"){
    this.lang='ar'
  }
  else{
    this.lang='en'
  }

  this.selectedlang.emit(value);
  this.sharedService.getselectedLanguage()

}

}
