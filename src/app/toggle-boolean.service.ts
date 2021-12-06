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
