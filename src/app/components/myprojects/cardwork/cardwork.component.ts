import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cardwork',
  template: `
    <div class="card-wrap">
      <div class="card" *ngFor="let i of image">
        <a [href]="i.link" target="_blank">
          <img [src]="i.img" alt="">
          <div class="github" [ngStyle]="{background: i.colour}"><h2>{{i.base}}</h2></div>
          <a [href]="i.code" target="_blank"><div (mouseover)="t = !t" (mouseleave)="t = !t" class="open">{{t ? 'code' : 'go!'}}</div></a>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./cardwork.component.scss']
})
export class CardworkComponent implements OnInit {
  t = true
  image = [
    {
      img: '../../../../assets/interes.jpg',
      link: 'https://rafaelnassybullin.github.io/MixLab/',
      base: 'Html',
      colour: 'orange'
    },
    {
      img: '../../../../assets/2.jpg',
      link: 'https://v3.ru.vuejs.org/',
      base: 'Angular',
      colour: 'crimson'
    },
    {
      img: '../../../../assets/333333.jpg',
      link: 'https://v3.ru.vuejs.org/',
      base: 'Vue',
      colour: '#40B983',
      code:'https://github.com/RafaelNassybullin/jadoo'


    },
    {
      img: '../../../../assets/333333.jpg',
      link: 'https://v3.ru.vuejs.org/',
      base: 'Vue',
      colour: '#40B983'


    },
    {
      img: '../../../../assets/333333.jpg',
      link: 'https://v3.ru.vuejs.org/',
      base: 'Vue',
      colour: '#40B983'


    },
    {
      img: '../../../../assets/333333.jpg',
      link: 'https://v3.ru.vuejs.org/',
      base: 'Vue',
      colour: '#40B983'


    },
  ]

  ngOnInit(): void {
  }
}
