import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleBooleanService {
  public showImgOnInit: boolean = false
  public notReadyHover: boolean = false
  public turnCircleOnInit: boolean = true
  public serviceBool: boolean = true
  public helloEngg: string = 'Hello!'
  public helloRus: string = 'Привет!'
  public nameEngg: string = "I'm Rafael Nassybullin"
  public nameRus: string = 'я Рафаэль Насыбуллин'
  public myWorksRus: string = 'Мои работы'
  public myWorksEng: string = 'My works'
  public language: boolean = true

  languageToggle() {
    this.language = !this.language
    console.log(navigator.language);
  }

  userLanguage() {
    navigator.language !== 'ru-RU' ? this.language = false : ''
    console.log('raf');
  }

  toggle() {
    this.serviceBool = !this.serviceBool
    console.log(this.serviceBool);
  }

  f() {
    this.serviceBool = false
    console.log(this.serviceBool);
  }

  t() {
    this.serviceBool = true
  }

  public cardData = [
    {
      img: 'assets/17_MiScooter.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/xiaomiAngular/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/xiaomiAngular',
    },
    {
      img: 'assets/21_decbase.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/furniture/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/furniture'
    },
    {
      img: 'assets/7_YES.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/yes/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/yes'
    },
    {
      img: 'assets/14_Jadoo.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/jadoo/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/jadoo'
    },
    {
      img: 'assets/6_holidays.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/happyHolidays/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/happyHolidays'
    },
    {
      img: 'assets/ggdrop.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/ggdrop',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/ggdrop',
    },
    {
      img: 'assets/VUEX-CART.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/VuexCart/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/VuexCart'
    },
    {
      img: 'assets/melanish.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/melanish/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/melanish'
    },
    {
      img: 'assets/3_ROOM.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/ROOM/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/ROOM'
    },
    {
      img: 'assets/2_mixlab.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/MixLab/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/MixLab'
    },
    {
      img: 'assets/5_northstar.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Northstar/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/Northstar'
    },

    {
      img: 'assets/gsapAnim.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/expoforum/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/expoforum'
    },
    {
      img: 'assets/calculatorr.png',
      linkToGhPages: 'https://rafaelnassybullin.github.io/vwpxconverter/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin'
    },

    {
      img: 'assets/16_Fitness.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/FitnessClubGHPages/',
      framework: 'React',
      borderColour: '#5ED3F3',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/FitnessClub'
    },
    {
      img: 'assets/11_Grovemade.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/grovemade/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/grovemade'
    },
    {
      img: 'assets/9_RobinHood.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Robinhood/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/Robinhood'
    },
    {
      img: 'assets/13_Bella.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Bella/',
      framework: 'Angular',
      borderColour: 'crimson',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/Bella'
    },
    {
      img: 'assets/20_Honey.webp',
      linkToGhPages: 'https://rafaelnassybullin.github.io/honey/',
      framework: 'Vue',
      borderColour: '#40B983',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/honey'
    },
    {
      img: 'assets/port.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/PORT/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/PORT'
    },
    {
      img: 'assets/blog.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/foodblogger/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://rafaelnassybullin.github.io/foodblogger/'
    },

    {
      img: 'assets/furniture.jpg',
      linkToGhPages: 'https://rafaelnassybullin.github.io/Furnituristic/',
      framework: 'HTML',
      borderColour: '#DD4B25',
      linkCodeGithub: 'https://github.com/RafaelNassybullin/Furnituristic'
    },
  ]
}
