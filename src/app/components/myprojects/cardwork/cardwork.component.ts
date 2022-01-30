import {Component} from '@angular/core';
import {ToggleBooleanService} from "../../../toggle-boolean.service";

interface CardData {
  img: string
  linkToGhPages: string
  framework: string
  borderColour: string
  linkCodeGithub: string
}

@Component({
  selector: 'app-cardwork',
  template: `
    <div class="card-wrap">
      <div class="card-box" *ngFor="let cardsItem of cards">
        <div class="fake-menu-header">
          <div class="circle red"></div>
          <div class="circle yelow"></div>
          <div class="circle green"></div>
          <h6>{{cardsItem.framework}}</h6>
        </div>
        <div class="card">
          <a [href]="cardsItem.linkToGhPages" target="_blank">
            <img loading="lazy" [src]="cardsItem.img" alt="">
            <div class="github" [ngStyle]="{background: cardsItem.borderColour}">
              <h2>{{cardsItem.framework}}</h2>
            </div>
            <a [href]="cardsItem.linkCodeGithub" target="_blank">
              <div (mouseover)="textHoverChange = !textHoverChange"
                   (mouseleave)="textHoverChange = !textHoverChange"
                   class="open"
              >
                {{ textHoverChange ? 'code' : 'go!' }}
              </div>
            </a>
          </a>
        </div>
        <div [ngStyle]="{background:cardsItem.borderColour}" class="borderrr"></div>
      </div>
    </div>
  `,
  styleUrls: ['./cardwork.component.scss']
})
export class CardworkComponent {

  public textHoverChange:boolean = true

  public cards: CardData[]

  constructor(public aService: ToggleBooleanService) {

    this.cards = aService.cardData

  }
}
