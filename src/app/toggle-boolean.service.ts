import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleBooleanService {
  constructor() { }
  public showImgOnInit: boolean = false
  public notReadyHover: boolean = false
  public turnCircleOnInit: boolean = true
  public serviceBool: boolean = true

  public helloEngg:string  = 'Hello!'
  public helloRus:string  = 'Привет!'
  public nameEngg:string  = "I'm Rafael Nassybullin"
  public nameRus:string  = 'я Рафаэль Насыбуллин'
  public myWorksRus:string  = 'Мои работы'
  public myWorksEng:string  = 'My works'

  public language:boolean = true

  languageToggle(){
    this.language = !this.language
    console.log(navigator.language);
  }

  userLanguage(){
    navigator.language!=='ru-RU'?this.language=false:''
    console.log('raf');
  }

  public projectBool:boolean = true

  projectBoolAnimationTurnOff(){
    this.projectBool = false
  }


  toggle() {
    this.serviceBool = !this.serviceBool
    console.log(this.serviceBool);
  }
  f(){
    this.serviceBool = false
    console.log(this.serviceBool);
  }
  t(){
    this.serviceBool = true
  }

}
