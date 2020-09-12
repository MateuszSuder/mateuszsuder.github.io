import { Component} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  baseURL = 'assets/';

  portfolio = {
    preview: this.baseURL + 'projects/portfolio.png',
    name: 'Portfolio',
    description: 'This website\'s project. Responsive portfolio made using Angular, SCSS and some PixiJS for animations. Project contains 4 sections and header with possiblity to scroll into them.',
    used: [
      this.baseURL + 'icons/Angular.png',
      this.baseURL + 'icons/ts.png',
      this.baseURL + 'icons/SASS.png',
      this.baseURL + 'icons/pixi.png',
      this.baseURL + 'icons/Git.png'
    ],
    github: 'https://github.com/MateuszSuder/mateuszsuder.github.io',
    live: 'https://mateuszsuder.github.io'
  };

  minesweeper = {
    preview: this.baseURL + 'projects/minesweeper.png',
    name: 'Minesweeper',
    description: 'Minesweeper made using only TypeScript/JS, JQuery and CSS. This project was made to test my skills in JS ES6+, HTML and CSS also just because I like minesweeper. I\'m looking forward to made similiar project in PixiJS.',
    used: [
      this.baseURL + 'icons/ts.png',
      this.baseURL + 'icons/js.png',
      this.baseURL + 'icons/jQuery.png',
      this.baseURL + 'icons/CSS3.png',
      this.baseURL + 'icons/HTML5.png',
      this.baseURL + 'icons/npm.png',
      this.baseURL + 'icons/Git.png'
    ],
    github: 'https://github.com/MateuszSuder/MineJSweeper',
    live: 'https://mateuszsuder.github.io/MineJSweeper/'
  };

  slot = {
    preview: 'assets/projects/slot.png',
    name: 'Slot game',
    description: 'Basic slot using TypeScript and PixiJS for animations. This is my first slot game with Pixi but I will for sure create another one in future, maybe even with some backend to calcuate the spin. Spin result is calculated before animation just like it is in real online slots',
    used: [
      this.baseURL + 'icons/ts.png',
      this.baseURL + 'icons/pixi.png',
      this.baseURL + 'icons/npm.png',
      this.baseURL + 'icons/Git.png',
      this.baseURL + 'icons/webpack.png'
    ],
    github: 'https://github.com/MateuszSuder/PixiSlot',
    live: 'https://mateuszsuder.github.io/PixiSlot/'
  };

  background = {
    preview: 'assets/projects/starsBackground.png',
    name: 'Stars Background animation',
    description: 'Animation made using Pixi. Random appearing stars appearing with different delay and dissapearing with random delay. Project is created for websites, the background is transparent so you won\'t see stars on live version because they are white.',
    used: [
      this.baseURL + 'icons/pixi.png',
      this.baseURL + 'icons/ts.png',
      this.baseURL + 'icons/npm.png',
      this.baseURL + 'icons/webpack.png'
    ],
    github: 'https://github.com/MateuszSuder/starsBackground',
    live: 'https://mateuszsuder.github.io/starsBackground/'
  };

  skillsAnimation = {
    preview: 'assets/projects/skillsAnimations.png',
    name: 'My skills list animations',
    description: 'List of my skills, programming languages put in basic animation using sinusoidal position change.',
    used: [
      this.baseURL + 'icons/pixi.png',
      this.baseURL + 'icons/ts.png',
      this.baseURL + 'icons/npm.png',
      this.baseURL + 'icons/webpack.png'
    ],
    github: 'https://github.com/MateuszSuder/Pixi-Skills',
    live: 'https://mateuszsuder.github.io/Pixi-Skills/'
  };

  projects = [this.portfolio, this.minesweeper, this.slot, this.background, this.skillsAnimation];

}
