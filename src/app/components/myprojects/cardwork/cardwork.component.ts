import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cardwork',
  template: `
    <div class="card-wrap">
      <div class="card-box" *ngFor="let i of image">
        <div  class="card">
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
export class CardworkComponent implements OnInit {
  t = true
  border = true
  image = [
    {
      img: '../../../../assets/2_mixlab.jpg',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/3_ROOM.jpg',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/jadoo',
    },
    {
      img: '../../../../assets/14_Jadoo.jpg',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/7_YES.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/9_RobinHood.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/11_Grovemade.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/13_Bella.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/16_Fitness.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/17_MiScooter.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/20_Honey.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/5_northstar.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/21_decbase.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '../../../../assets/6_holidays.webp',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'VuexCart',
      borderColour: '#40B983',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Melanish',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'Port',
      borderColour: '#DD4B25',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'GsapRafael',
      borderColour: '#5ED3F3',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
    {
      img: '',
      linkToGhPages: 'https://v3.ru.vuejs.org/',
      framework: 'NgRxTodo',
      borderColour: 'crimson',
      linkCodeGithub:'https://github.com/RafaelNassybullin'
    },
  ]

  ngOnInit(): void {
  }
}
