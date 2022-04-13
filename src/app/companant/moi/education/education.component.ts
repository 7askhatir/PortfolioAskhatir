import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
declare var $: any;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { 
    var swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true
      }
    });
    
  }
    
  ngOnInit(): void {
    
  }

}
