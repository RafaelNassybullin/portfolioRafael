import {AfterViewChecked, Component} from '@angular/core';
import gsap from "gsap";
// import {animation} from "@angular/animations";

@Component({
  selector: 'app-cardwork',
  template: `
    <div class="card-wrap">
      <div [ngClass]="i.animatable?'card-box animate':'card-box'" class="card-box" *ngFor="let i of image">
        <div  class="card" [ngStyle]="{outline: i.outlineStatus}">
          <a [href]="i.linkToGhPages" target="_blank">
            <img [src]="i.img" alt="">
            <div class="github" [ngStyle]="{background: i.borderColour}">
              <h2>{{i.framework}}</h2>
            </div>
            <a [href]="i.linkCodeGithub" target="_blank">
              <div (mouseover)="t = !t"
                   (mouseleave)="t = !t"
                   class="open"
              >
                {{t ? 'code' : 'go!'}}
              </div>
            </a>
          </a>
        </div>
        <div [ngStyle]="{background:i.borderColour}" class="borderrr"></div>
      </div>
    </div>
  `,
  styleUrls: ['./cardwork.component.scss']
})
export class CardworkComponent implements AfterViewChecked {
  t = true
  border = true
  image = [
    {
      img: '../../../../assets/21_decbase.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/furniture/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/furniture',
      animatable:true
    },
    {
      img: '../../../../assets/7_YES.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/yes/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin/yes',
            animatable:true

    },
    {
      img: '../../../../assets/14_Jadoo.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/jadoo/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/jadoo',
            animatable:true

    },
    {
      img: '../../../../assets/6_holidays.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/happyHolidays/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/happyHolidays',
            animatable:true

    },
    {
      img: '../../../../assets/VUEX-CART.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/VuexCart/',
      framework: 'VuexCart',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin/VuexCart',
            animatable:true

    },
    {
      img: '../../../../assets/melanish.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/melanish/',
      framework: 'Aesthetic',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/melanish',
            animatable:true

    },
    {
      img: '../../../../assets/3_ROOM.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/ROOM/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/ROOM',
      animatable:false

    },
    {
      img: '../../../../assets/2_mixlab.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/MixLab/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/MixLab',
      animatable:false
    },
    {
      img: '../../../../assets/5_northstar.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Northstar/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Northstar',
      animatable:false
    },
    {
      img: '../../../../assets/port.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/PORT/',
      framework: 'Port',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/PORT',
      animatable:false
    },
    {
      img: '../../../../assets/gsapAnim.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/expoforum/',
      framework: 'GsapRafael',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/expoforum',
      animatable:false
    },
    {
      img: '../../../../assets/calculatorr.png',
      linkToGhPages: 'https://rafaelnassybullin.github.io/vwpxconverter/',
      framework: 'NgRxTodo',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin',
      animatable:false
    },
    {
      img: '../../../../assets/17_MiScooter.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
      ,outlineStatus:'0.8vw solid red'////////////////,
      ,animatable:false
    },
    {
      img: '../../../../assets/16_Fitness.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/FitnessClubGHPages/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/FitnessClub',
      animatable:false
    },
    {
      img: '../../../../assets/11_Grovemade.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
      ,outlineStatus:'0.8vw solid red'////////////////,
      ,animatable:false
    },
    {
      img: '../../../../assets/9_RobinHood.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Robinhood/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Robinhood',
      animatable:false
    },
    {
      img: '../../../../assets/13_Bella.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
      ,outlineStatus:'0.8vw solid red'////////////////
      ,animatable:false
    },
    {
      img: '../../../../assets/20_Honey.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/honey/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin/honey',
      animatable:false
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'NgRxTodo',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
      ,outlineStatus:'0.8vw solid red'////////////////
      ,animatable:false
    },
    {
      img: '../../../../assets/blog.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/foodblogger/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://rafaelnassybullin.github.io/foodblogger/',
      animatable:false
    },
    {
      img: '../../../../assets/furniture.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Furnituristic/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Furnituristic',
      animatable:false
    },
  ]

  ngAfterViewChecked() {
    let boxess = document.querySelectorAll(".card-wrap");
    boxess.forEach((boxs) => {
      let overlays = boxs.querySelectorAll(".animate");
      let examples = gsap.timeline({onComplete(){examples.kill()}})
      examples.to(overlays, {duration: 0.5,delay: 0.8, scale: 1,stagger: 0.2})
    })
  }
}
