import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition('* => void', [animate('1s', style({ opacity: 0 }))]),
    ]),
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CarouselComponent implements OnInit {
  slides = [
    {
      src:
        'https://static.businessworld.in/article/article_extra_large_image/1588319167_Cp7vRv_Artificial_Intelligence.png',
    },
    {
      src:
        'https://res.tinkleo.com/uploads/goods_image/14/20181120/836f6401c3213ec06c5e5b961ca744b3_400X400.jpg',
    },
    {
      src:
        'https://kutv.com/resources/media/0e2c36b8-3732-4ce2-8a01-3e398b5879ae-large16x9_covid.JPG?1585498264218',
    },
    {
      src:
        'https://raw.githubusercontent.com/bitcot/hubspot-responsive-image-gallery/master/screenshots/Image%20Gallary-display.png',
    },
    {
      src:
        'https://www.hellotech.com/blog/wp-content/uploads/2019/09/The-Best-Smart-Home-Devices-of-2019-1-960x600.jpg',
    },
  ];
  currentSlide = 0;
  constructor() {
    setInterval(() => {
      const previous = this.currentSlide - 1;
      this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    }, 2000);
  }

  ngOnInit(): void {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log('next clicked, new current slide is: ', this.currentSlide);
  }
}
