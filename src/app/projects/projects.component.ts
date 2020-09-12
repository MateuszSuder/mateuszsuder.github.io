import { Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  baseURLP = 'assets/projects/';
  baseURLI = 'assets/icons/';
  pixelRatio = '';
  projects = [];

  constructor(){
    if (window.devicePixelRatio < 1.5){
      this.pixelRatio = 'pixelratio-1/';
      this.baseURLI = this.baseURLI + this.pixelRatio;
      this.baseURLP = this.baseURLP + this.pixelRatio;
    } else if (window.devicePixelRatio < 2.5){
      this.pixelRatio = 'pixelratio-2/';
      this.baseURLI = this.baseURLI + this.pixelRatio;
      this.baseURLP = this.baseURLP + this.pixelRatio;
    } else {
      this.pixelRatio = 'pixelratio-3/';
      this.baseURLI = this.baseURLI + this.pixelRatio;
      this.baseURLP = this.baseURLP + this.pixelRatio;
    }
    const portfolio = {
      preview: this.baseURLP + 'portfolio.png',
      name: 'Portfolio',
      description: 'This website\'s project. Responsive portfolio made using Angular, SCSS and some PixiJS for animations. Project contains 4 sections and header with possiblity to scroll into them.',
      used: [
        this.baseURLI + 'Angular.png',
        this.baseURLI + 'ts.png',
        this.baseURLI + 'SASS.png',
        this.baseURLI + 'pixi.png',
        this.baseURLI + 'Git.png'
      ],
      github: 'https://github.com/MateuszSuder/mateuszsuder.github.io',
      live: 'https://mateuszsuder.github.io'
    };

    const minesweeper = {
      preview: this.baseURLP + 'minesweeper.png',
      name: 'Minesweeper',
      description: 'Minesweeper made using only TypeScript/JS, JQuery and CSS. This project was made to test my skills in JS ES6+, HTML and CSS also just because I like minesweeper. I\'m looking forward to made similiar project in PixiJS.',
      used: [
        this.baseURLI + 'ts.png',
        this.baseURLI + 'js.png',
        this.baseURLI + 'jQuery.png',
        this.baseURLI + 'CSS3.png',
        this.baseURLI + 'HTML5.png',
        this.baseURLI + 'npm.png',
        this.baseURLI + 'Git.png'
      ],
      github: 'https://github.com/MateuszSuder/MineJSweeper',
      live: 'https://mateuszsuder.github.io/MineJSweeper/'
    };

    const slot = {
      preview: this.baseURLP + 'slot.png',
      name: 'Slot game',
      description: 'Basic slot using TypeScript and PixiJS for animations. This is my first slot game with Pixi but I will for sure create another one in future, maybe even with some backend to calcuate the spin. Spin result is calculated before animation just like it is in real online slots',
      used: [
        this.baseURLI + 'ts.png',
        this.baseURLI + 'pixi.png',
        this.baseURLI + 'npm.png',
        this.baseURLI + 'Git.png',
        this.baseURLI + 'webpack.png'
      ],
      github: 'https://github.com/MateuszSuder/PixiSlot',
      live: 'https://mateuszsuder.github.io/PixiSlot/'
    };

    const background = {
      preview: this.baseURLP + 'starsBackground.png',
      name: 'Stars Background animation',
      description: 'Animation made using Pixi. Random appearing stars appearing with different delay and dissapearing with random delay. Project is created for websites, the background is transparent so you won\'t see stars on live version because they are white.',
      used: [
        this.baseURLI + 'pixi.png',
        this.baseURLI + 'ts.png',
        this.baseURLI + 'npm.png',
        this.baseURLI + 'webpack.png'
      ],
      github: 'https://github.com/MateuszSuder/starsBackground',
      live: 'https://mateuszsuder.github.io/starsBackground/'
    };

    const skillsAnimation = {
      preview: this.baseURLP + 'skillsAnimations.png',
      name: 'My skills list animations',
      description: 'List of my skills, programming languages put in basic animation using sinusoidal position change.',
      used: [
        this.baseURLI + 'pixi.png',
        this.baseURLI + 'ts.png',
        this.baseURLI + 'npm.png',
        this.baseURLI + 'webpack.png'
      ],
      github: 'https://github.com/MateuszSuder/Pixi-Skills',
      live: 'https://mateuszsuder.github.io/Pixi-Skills/'
    };
    this.projects = [portfolio, minesweeper, slot, background, skillsAnimation];
  }
}
