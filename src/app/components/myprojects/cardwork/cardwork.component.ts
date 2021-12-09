import {AfterViewChecked, Component, OnInit} from '@angular/core';

import {ToggleBooleanService} from "../../../toggle-boolean.service";


@Component({
  selector: 'app-cardwork',
  template: `
    <div class="card-wrap">
      <div class="card-box" *ngFor="let i of image">
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
export class CardworkComponent implements AfterViewChecked,OnInit {
  t = true
  border = true
  image = [
    {
      img: '../../../../assets/21_decbase.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/furniture/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/furniture'
    },
    {
      img: '../../../../assets/7_YES.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/yes/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin/yes'
    },
    {
      img: '../../../../assets/14_Jadoo.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/jadoo/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/jadoo'
    },
    {
      img: '../../../../assets/6_holidays.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/happyHolidays/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/happyHolidays'
    },
    {
      img: '../../../../assets/VUEX-CART.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/VuexCart/',
      framework: 'VuexCart',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin/VuexCart'
    },
    {
      img: '../../../../assets/melanish.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/melanish/',
      framework: 'Aesthetic',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/melanish'
    },
    {
      img: '../../../../assets/3_ROOM.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/ROOM/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/ROOM'
    },
    {
      img: '../../../../assets/2_mixlab.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/MixLab/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/MixLab'
    },
    {
      img: '../../../../assets/5_northstar.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Northstar/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Northstar'
    },
    {
      img: '../../../../assets/port.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/PORT/',
      framework: 'Port',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/PORT'
    },
    {
      img: '../../../../assets/gsapAnim.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/expoforum/',
      framework: 'GsapRafael',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/expoforum'
    },
    {
      img: '../../../../assets/calculatorr.png',
      linkToGhPages: 'https://rafaelnassybullin.github.io/vwpxconverter/',
      framework: 'NgRxTodo',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/17_MiScooter.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin',
      outlineStatus:'0.8vw solid red'////////////////
    },
    {
      img: '../../../../assets/16_Fitness.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/FitnessClubGHPages/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin/FitnessClub'
    },
    {
      img: '../../../../assets/11_Grovemade.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/grovemade/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin/grovemade'
    },
    {
      img: '../../../../assets/9_RobinHood.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Robinhood/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Robinhood'
    },
    {
      img: '../../../../assets/13_Bella.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Bella/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Bella'
    },
    {
      img: '../../../../assets/20_Honey.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/honey/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin/honey'
    },
    {
      img: '../../../../assets/blog.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/foodblogger/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://rafaelnassybullin.github.io/foodblogger/'
    },
    {
      img: '',
      linkToGhPages: 'https://rafaelnassybullin.github.io/foodblogger/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://rafaelnassybullin.github.io/foodblogger/'
    },
    {
      img: '../../../../assets/furniture.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Furnituristic/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin/Furnituristic'
    },
  ]

  ngOnInit() {}
  constructor(public aService:ToggleBooleanService) {}
  ngAfterViewChecked() {}
}
