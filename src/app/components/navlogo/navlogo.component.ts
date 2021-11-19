import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navlogo',
  template: `
    <nav>
      <div class="logo">{{logo}}</div>
      <div class="right-nav">
        <div  class="contacts"
              routerLink="/contacts"

        > <svg fill="white" width="2.5vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.65 512.83">
          <path d="M276.59,0c3.69.61,7.36,1.36,11.06,1.8a246.94,246.94,0,0,1,92.66,30.48q68.88,38.84,105,109.26a244.85,244.85,0,0,1,26.47,92.87c5.46,68.21-13.93,128.88-56.37,182.18-32.53,40.86-74.42,68.42-124,84.2-13.25,4.21-26.87,7.28-40.32,10.86a10.9,10.9,0,0,1-2,.3c-56.81,3.78-111.08-4.14-160.7-34.3C68.18,441.07,27.68,389.23,9.15,321.35-7.68,259.67-1.14,199.59,27.52,142.42c25.48-50.81,64-89,114.61-115.1,27.5-14.15,56.73-22.47,87.35-26.2,2.38-.29,4.74-.74,7.11-1.12ZM424.34,421.22c57.9-55.61,86.66-153,53.77-245.41C443.92,79.72,352.23,15.68,243.73,21.06c-101,5-188.45,73.58-214.73,174.49-23.21,89.1,8.8,178,59.64,225.26,7.39-4.32,14.4-9.21,22-12.73,15.52-7.14,31.49-13.29,47-20.34a305,305,0,0,0,29.13-15.07c5-2.92,9.29-7.46,9.62-13.83.5-9.81.58-19.65.59-29.47a10.37,10.37,0,0,0-1.82-6c-9.84-12.71-16.23-27-20.34-42.46a7.79,7.79,0,0,0-2.34-4.06c-11.51-8.79-15.42-21.23-16.95-34.82-.82-7.33.35-14.4,4.28-20.62,2-3.15,2.07-5.9,1.32-9.26-5.75-25.87-8.31-51.89-2.55-78.12,5.67-25.8,19.21-46,43.51-57.51,22-10.48,45.5-13.32,69.6-10.17,12.37,1.61,23.79,6,33.59,14.12a24.9,24.9,0,0,0,8.84,4.86c17,4.78,29.59,14.85,37.22,30.78a87.63,87.63,0,0,1,8.08,33.22c1.23,21.95-1.58,43.48-7.24,64.7-.5,1.86-.53,4.55.47,6,10.92,15.8,2.26,46.29-10.57,55.65-1.92,1.4-3.27,3.95-4.24,6.24-4.44,10.54-6.86,22.47-13.39,31.42-7.86,10.77-7.5,21.78-8.18,33.66-.85,15.07,5.76,24.66,18.5,31.14,3,1.5,5.84,3.22,8.88,4.57C371,394.77,400.06,403.07,424.34,421.22Zm-320,13.21c87.88,75.88,212.15,75.27,303.36.94a42.79,42.79,0,0,0-5.1-3.17c-17.25-7.73-34.45-15.58-51.85-23-13.18-5.61-26.41-11.1-37.55-20.36-7.89-6.57-15.51-14.08-16.35-24.76-1.22-15.41-1-30.94-1.08-46.42,0-1.55,1.39-3.33,2.56-4.62,2.93-3.25,6.83-5.84,9.06-9.48,7.85-12.85,11.32-27.17,12.38-42.6,8.11.23,14.51-1.66,15.63-11.17s5.37-20.07-8.64-24.25c.93-3,1.68-5.31,2.41-7.67,7.22-23.5,12.62-47.27,9.41-72.09-2.93-22.61-14.24-39.11-39.25-42a7,7,0,0,1-4.57-3c-4.18-7.44-10.83-11-18.77-12.74-11.7-2.61-23.52-2.28-35.28-.93-13.47,1.55-26.49,5-37.92,12.67-19.13,12.88-25.9,32.21-27.13,54-1.3,23,3.41,45.33,9.21,67.41.91,3.47.34,5.31-2.75,6.69-3.79,1.7-6.44,4.34-5.85,8.84.75,5.75,1.57,11.52,2.78,17.19.87,4.09,3.23,6.8,8.09,6.4,2-.16,4.14.56,6.3.89.8,12.52,3.27,24.2,8.68,35,3.38,6.74,6.19,14.09,14.08,17.39,1,.41,1.62,2.73,1.62,4.16,0,13.49-.33,27-.2,40.47a30.78,30.78,0,0,1-7.88,21c-4.44,5.08-9.26,10.48-15.06,13.62-14.13,7.64-28.84,14.22-43.47,20.9C136,420.73,120.59,427.29,104.34,434.43Z"/>
        </svg> <p (mouseover)="tu = !tu"
                (mouseleave)="tu = !tu" class="contacts-title">{{tu?"Контакты":contacts}}</p></div>
<!--        <h2>Ru</h2>-->
      </div>

    </nav>
    <div class="wrapper">
      <div class="text">
        <h2> Привет, </h2>
        <h1>я Рафаэль Насыбуллин </h1>
        <p>Frontend Разработчик.</p>
        <p> 24 года, г.Актобе, Фрилансер </p>
        <p>
          Angular, Vue и React - любимые фреймворки,
        </p>
        <p>фанат веб-разработки на JavaScript!!!</p>
        <button routerLink="/myprojects">Мои работы</button>
      </div>
      <div (mouseover)="hover = !hover"
           (mouseleave)="hover = !hover"
           [ngClass]="hover?'off image':'image'">
<!--        <img src="" alt="">-->

        <div class="vector">
          <svg [ngClass]="hover?'grece circle2':'circle2'" fill="#FFCE45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578.29 578.29">
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
  `,
  styleUrls: ['./navlogo.component.scss']
})
export class NavlogoComponent implements OnInit {
  hover: boolean = false
  tu: boolean = true
  logo: string = '<Rafael.>'
  contacts: string = '<Контакты.>'
  constructor() {
  }

  ngOnInit(): void {
  }

// https://t.me/Rafael_RFL

}
