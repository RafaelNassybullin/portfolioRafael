import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild
} from '@angular/core';
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {ToggleBooleanService} from "../../toggle-boolean.service";

gsap.registerPlugin(TextPlugin)

@Component({
  selector: 'app-navlogo',
  template: `
    <nav #navanim>
      <div class="logo">{{logo}}</div>
    </nav>
    <div class="wrapper">
      <div class="text">
        <h2 >
          <div class="overlay" #helloTitle>Привет,</div>
        </h2>
        <h1 >
          <div class="overlay" #nameTitle>я Рафаэль Насыбуллин </div>
        </h1>
        <p #typingAnimationsOne><span>✔</span> Frontend Разработчик.</p>
        <p #typingAnimationsTwo>️<span>✔</span> 24 года, г.Актобе, Фрилансер</p>
        <p #typingAnimationsThree>️<span>✔</span> Angular, Vue и React - любимые фреймворки,</p>
        <p #typingAnimationsFour>️<span>✔</span> фанат веб-разработки на JavaScript!!!</p>
        <div class="animate-button" #buttonAnimation>
        <button class="my-jobs" routerLink="/myprojects">Мои работы</button>
        </div>
      </div>
      <div class="image-wrapp">
        <div (mouseover)="hover = !hover"
             (mouseleave)="hover = !hover"
             [ngClass]="this.offAnimService.turnCircleOnInit||hover?'off image':'image'">
          <img [ngClass]="offAnimService.showImgOnInit?'_img_active':''" src="assets/0d76d85861c81f297adccd6509e933c1.jpg"
               alt="">
          <div class="vector">
            <svg  [ngClass]="hover&&offAnimService.notReadyHover?'grece circle2':'circle2'" fill="#FFCE45" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 578.29 578.29">
              <path
                d="M280.33,570.06V542.38L263.47,541c-.43,3.29-.8,6-1.22,9.2l8.91,1.25c-.2,2.57-.39,5.13-.63,8.21l-17.65-1.61c1.17-8.89,2.29-17.38,3.45-26.11l32.51,2.15v44.13a287.1,287.1,0,0,1-104.41-19.48c5.44-14,10.76-27.66,16-41.17l31,9.75c-2,8.22-3.93,16.54-6.06,25.5l-17.15-4.62c.83-2.81,1.56-5.27,2.41-8.12l8.54,2.15c.86-3,1.66-5.76,2.55-8.85L205.08,528c-3,8.55-6,16.93-9.33,26.26l37,10.37c2.54-12.19,5-23.78,7.45-35.7l7.42,1.35c-1.84,11.79-3.65,23.39-5.61,36Z"/>
              <path
                d="M383.18,62.74,400,22.05a286.39,286.39,0,0,1,89,58.11l-30.56,31.92-25-21,15.44-21.17c4.68,3.63,9.13,7.09,14,10.84-1.73,2.21-3.41,4.34-5.23,6.65L450.51,82l-5.69,7.26,13.43,11.34,18.57-20.76L446.73,56.22l-20.62,30-6.47-4.06L439,51.28,405.27,33c-4,8.79-7.69,16.85-11.53,25.28l15.63,7.89c1.44-2.59,2.84-5.1,4.52-8.1l-7.71-4.37,3.72-7.58,15.66,8.4c-4.49,7.75-8.84,15.24-13.21,22.77Z"/>
              <path
                d="M56.25,131.64l30,20.49-4,6.46L51.37,139.32,32.89,173l25.44,11.55,7.87-15.65-8.13-4.42c-1.46,2.62-2.79,5-4.3,7.68l-7.64-3.83,8.44-15.6,22.73,13.2L62.81,195.06,22.14,178.27c13.65-33.44,33.06-62.76,58-89.06l32,30.6c-7,8.28-13.87,16.5-21,24.95L69.89,129.33l10.77-14,6.69,5.25-5.28,7.2c2.36,1.83,4.66,3.62,7.27,5.63L100.58,120,79.93,101.42Z"/>
              <path
                d="M89.25,498l30.61-31.89,24.92,21-15.43,21.27-14-10.94,5.31-6.55,7.12,5.28,5.72-7.29L120,477.62,101.45,498.4,131.64,522l20.55-30,6.42,4.16L139.25,527,173,545.18c4.07-8.95,7.74-17,11.53-25.32l-15.63-7.81-4.49,8.2,7.66,4.14-3.69,7.68-15.67-8.33c4.49-7.76,8.83-15.25,13.19-22.8l29.18,14.53-16.91,40.81A290.16,290.16,0,0,1,89.25,498Z"/>
              <path
                d="M492,426c1.46-2.26,2.63-4.06,4.12-6.38L527,439c6.13-11.35,12-22.24,18.19-33.71L520,393.7l-7.86,15.6,8.11,4.6c1.42-2.56,2.74-5,4.28-7.75l7.6,3.75c-2.77,5.18-5.41,10.13-8.35,15.65L501,412.32l14.44-29.17,40.85,16.91A290.06,290.06,0,0,1,498.13,489l-32-30.51,21-25,21.25,15.46-11,14-6.54-5.35c1.81-2.43,3.46-4.65,5.29-7.09L489,444.74,477.7,458.26l20.63,18.53c7.85-10,15.58-19.82,23.73-30.17Z"/>
              <path
                d="M60.71,200.39l-9.8,31.07-25.52-6.09,4.7-17.14,8.06,2.46-2.09,8.56,8.84,2.38c1.81-5.67,3.5-11,5.31-16.64L24,195.75c-3.46,12.36-6.84,24.42-10.35,37l35.68,7.41c-.46,2.47-.89,4.82-1.39,7.51L12,241.72C10.73,254.49,9.5,266.8,8.17,280H35.89c.42-5,.89-10.57,1.38-16.47l-9.11-1.38-1.37,9-8.22-.59c.57-6,1.09-11.59,1.66-17.71l26,3.48c-.7,10.85-1.39,21.43-2.1,32.34H0a275.73,275.73,0,0,1,19.76-104Z"/>
              <path
                d="M517.58,377.77c3.27-10.38,6.44-20.47,9.75-31l25.47,6c-1.53,5.74-3,11.37-4.6,17.28l-8.14-2.61c.76-2.79,1.43-5.31,2.26-8.36l-8.89-2.6c-1.76,5.48-3.46,10.78-5.37,16.7l26.24,9.32c3.45-12.34,6.85-24.49,10.35-37l-35.72-7.41c.46-2.4.88-4.62,1.43-7.46l35.94,5.88c1.26-12.87,2.47-25.21,3.76-38.37h-27.7c-.4,5.09-.85,10.71-1.32,16.61l9.24,1.25c.36-2.75.72-5.46,1.17-8.87l8.22.44c-.51,5.9-1,11.45-1.55,17.8L532,321.92c.73-10.86,1.44-21.42,2.17-32.31h44.15a287.08,287.08,0,0,1-19.48,104.21Z"/>
              <path
                d="M373.25,50.29c3.14-8.95,6.09-17.37,9.31-26.53L345.49,13.69c-2.49,12-4.88,23.55-7.37,35.57l-7.54-1.34c2-11.8,3.89-23.37,6-35.94L298.09,8.15V35.9l16.69,1.31c.41-3.08.78-5.85,1.23-9.18l-8.49-1.17V18.59l17.88,1.52L322,46.27l-32.38-2.13V.48c24.3-1.6,66.72,4,104.08,19.47-5.29,13.62-10.59,27.25-15.82,40.69l-31-9.72c1.89-8.07,3.82-16.35,6-25.52L370.12,30c-.91,3-1.65,5.48-2.49,8.28L359,36l-2.48,9Z"/>
              <path
                d="M553.83,172.48l-40.4,17.79c-5-9.58-10-19-15.15-28.81l22.43-13.76,8.8,15.34L522,167.2l-4.25-7.48-8.34,4.19,8.17,15.66,25.17-11.94-19-33.48-30.37,20-4.48-6.22,29.7-21.17L494.39,96.94,474,116l12,13.2,6.1-5.29c-1.35-2.72-3.41-5.22-3.65-7.89-.17-1.85,2.17-3.93,3.72-6.46l12.88,15-21,16.05-21.1-24.06c10.36-10.2,20.77-20.43,31.51-31A286.25,286.25,0,0,1,553.83,172.48Z"/>
              <path
                d="M80,416.75,57.6,430.49c-2.92-5.09-5.72-9.95-8.83-15.35l7.4-4c1.38,2.28,2.78,4.61,4.52,7.51l8.08-4.47-8.08-15.47L35.6,410.56l18.9,33.49,30.35-20c1.45,2,2.9,3.93,4.56,6.2L59.69,451.51l24.22,29.73,20.31-19L92.87,449.11l-7.43,5.7,5.67,6.93c-2.09,1.8-4.19,3.59-6.55,5.6L73.35,453.57l20.87-15.89,21.07,23.94-31.52,31q-37.08-37-59.35-86.9l40.41-17.82Z"/>
              <path
                d="M283,0V44.24L251.24,47c-1.36-8.44-2.72-16.88-4.16-25.87L265,18.78c.15,3.09.28,5.67.42,8.54l-8.52,1.23c.33,3.12.64,6,1,9.2l17.55-1.48c-.48-9.08-.95-17.84-1.48-27.79L235.83,13l6.69,35.63-7.38,1.86c-2.73-11.76-5.41-23.29-8.26-35.6l-36.69,11c3.36,9,6.44,17.31,9.69,26l16.64-5.49-2.64-9-8.32,2.42c-.85-2.38-1.76-4.89-2.88-8l17.07-5.16,6.7,25.4L195.61,62.59l-16.89-40.8A287.69,287.69,0,0,1,283,0Z"/>
              <path
                d="M0,295.18H44.3c.89,10.39,1.78,20.91,2.72,31.87l-25.87,4.08c-.77-6-1.5-11.67-2.28-17.79l8.41-.46,1.36,8.47,9.14-1.07c-.53-5.93-1-11.34-1.55-17.38L8.45,304.36c1.56,12.79,3.07,25.21,4.64,38.06l35.7-6.69,1.68,7.42L15,351.33c3.68,12.38,7.25,24.35,11,36.78L52,378.34c-1.82-5.53-3.56-10.79-5.48-16.59l-9,2.51,2.4,8.49-8,2.75c-1.72-5.64-3.38-11.08-5.17-17l25.45-6.74c3.54,10.51,6.91,20.5,10.39,30.85L21.82,399.53A288.82,288.82,0,0,1,0,295.18Z"/>
              <path
                d="M388.1,552.3l-9.72-26.09-16.6,5.58c.85,2.89,1.67,5.67,2.6,8.87l8.46-2.36c.83,2.46,1.67,4.92,2.72,8l-17,5.15c-2.31-8.79-4.52-17.2-6.69-25.44l30.84-10.38c5.55,13.4,11.12,26.84,16.89,40.75a288.44,288.44,0,0,1-104.32,21.91V534L327,531.21c1.34,8.26,2.71,16.7,4.19,25.84l-17.87,2.36c-.15-3.11-.27-5.55-.42-8.54l8.45-1.16-1.05-9.23L302.93,542c.48,9,.94,17.9,1.46,27.78l38-4.54c-2.28-12.25-4.44-23.88-6.65-35.78l7.43-1.59c2.7,11.76,5.34,23.19,8.17,35.5Z"/>
              <path
                d="M461.88,462.79l31,31.38a281.73,281.73,0,0,1-87.18,59.57c-6-13.66-11.86-27-17.73-40.33l28.81-15.15c4.46,7.26,9,14.66,13.77,22.4l-15.41,8.8-4.1-7.51,7.6-4.34-4.52-8.18-15.51,8.14c4,8.33,7.84,16.35,12,25.09l33.41-18.92c-6.88-10.48-13.32-20.27-19.94-30.34l6.22-4.56c7,9.81,13.9,19.48,21.22,29.73l29.66-24.2L462.29,474,449,485.6l5.85,7,7-5.37,5.6,6.34-13.79,11.32-16-20.9Z"/>
              <path
                d="M154.24,85l-6.37,4.31L126.64,59.5,97,83.78,115.84,104l13.47-11.18-5.94-7.45-7,5.62-5.55-6.44,13.62-10.93,16,20.67c-8.13,7.14-16.09,14.13-24,21.13L85.38,83.93a287.3,287.3,0,0,1,87.14-59.49c6,13.63,11.87,26.92,17.77,40.32L161.5,79.92c-4.39-7.08-8.88-14.33-13.72-22.11L162.86,49l4.49,7.23-7.61,4.33c1.41,2.72,2.72,5.26,4.24,8.21l15.57-8.07L167.86,35.49,134.2,54.41Z"/>
              <path
                d="M552.34,190.07l-26.08,9.79c1.8,5.43,3.56,10.71,5.49,16.53l9-2.39c-.83-2.9-1.57-5.51-2.43-8.54l8.05-2.74c1.73,5.74,3.35,11.07,5.14,17l-25.41,6.73L515.7,195.57l40.76-16.89a289.25,289.25,0,0,1,21.83,104.07H534q-1.28-15-2.7-31.57l25.84-4.13c.79,5.88,1.56,11.54,2.41,17.84l-8.77.48c-.3-2.82-.58-5.38-.91-8.46L540.48,258c.55,6.08,1,11.49,1.57,17.37l27.65-1.46c-1.41-12.62-2.79-25-4.26-38.26l-35.93,6.9c-.57-2.57-1-4.77-1.65-7.49l35.45-8.13C559.65,214.59,556.08,202.62,552.34,190.07Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./navlogo.component.scss']
})
export class NavlogoComponent implements AfterViewInit {
  constructor(public offAnimService:ToggleBooleanService) {}
  public hover: boolean = false
  public logo: string = '<Portfolio.>'
  public contacts: string = '<Контакты.>'

  public innerWidthh = window.innerWidth
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidthh = window.innerWidth;
  }
  @ViewChild('navanim', {static: true}) navanim!: ElementRef<HTMLDivElement>
  @ViewChild('helloTitle', {static: true}) helloTitle!: ElementRef<HTMLDivElement>
  @ViewChild('nameTitle', {static: true}) nameTitle!: ElementRef<HTMLDivElement>
  @ViewChild('image', {static: true}) image!: ElementRef<HTMLDivElement>
  @ViewChild('typingAnimationsOne', {static: true}) typingAnimationsOne!: ElementRef<HTMLDivElement>
  @ViewChild('typingAnimationsTwo', {static: true}) typingAnimationsTwo!: ElementRef<HTMLDivElement>
  @ViewChild('typingAnimationsThree', {static: true}) typingAnimationsThree!: ElementRef<HTMLDivElement>
  @ViewChild('typingAnimationsFour', {static: true}) typingAnimationsFour!: ElementRef<HTMLDivElement>
  @ViewChild('buttonAnimation', {static: true}) buttonAnimation!: ElementRef<HTMLDivElement>

  initImage(){
    this.offAnimService.notReadyHover = true
    this.offAnimService.showImgOnInit = true
    this.offAnimService.turnCircleOnInit = false
  }
  ngAfterViewInit() {
    this.offAnimService.serviceBool&&this.innerWidthh>433?this.initialAnim():''
    this.offAnimService.serviceBool
      ? setTimeout(() => this.offAnimService.turnCircleOnInit = false, this.innerWidthh>433?1800:0)
      : this.offAnimService.turnCircleOnInit = false;
    this.offAnimService.serviceBool
      ?setTimeout(() => {
      this.offAnimService.showImgOnInit = true
      this.offAnimService.notReadyHover = true
    }, this.innerWidthh>433?2400:0)
      :this.initImage()
  }
  initialAnim(): void {
    let tl = gsap.timeline({onComplete(){tl.kill()}})
   tl.from(this.helloTitle.nativeElement, 1.2, {
        y:'10.981vw',
        delay: 0.7,
        ease: 'power4.out',
        skewY: 7,
        stagger: {amount: 0.3}
    }).from(this.nameTitle.nativeElement, 1.2, {
        y:'10.981vw',
        delay: -0.6,
        ease: 'power4.out',
        skewY: 7,
        stagger: {amount: 0.3}
    }).from(this.navanim.nativeElement, 0.7,{
      y:'-100%',
      delay: -0.3,
      ease: 'power4.out',
      stagger: {amount: 0.3}
    }).from(this.typingAnimationsOne.nativeElement, {
      duration: 0.5, text: "", ease: "none"
    }).from(this.typingAnimationsTwo.nativeElement, {
      duration: 0.5, text: "", ease: "none"})
    .from(this.typingAnimationsThree.nativeElement, {
      duration: 0.5, text: "", ease: "none"})
    .from(this.typingAnimationsFour.nativeElement, {
      duration: 0.5, text: "", ease: "none"})
    .from(this.buttonAnimation.nativeElement, 0.7,{
      x:'-30vw',
      delay: -0.3,
      ease: 'power4.out',
      stagger: {amount: 0.3}
    }).call(()=>this.offAnimService.f())
  }}
