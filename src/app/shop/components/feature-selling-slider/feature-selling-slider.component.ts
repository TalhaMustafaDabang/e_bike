import { Component, OnInit } from '@angular/core';
declare let $;


@Component({
  selector: 'app-feature-selling-slider',
  templateUrl: './feature-selling-slider.component.html',
  styleUrls: ['./feature-selling-slider.component.css']
})
export class FeatureSellingSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('.next1').click(function () { $('.carousel1a').carousel('next'); return false; });
    $('.prev1').click(function () { $('.carousel1a').carousel('prev'); return false; });
    $('.carousel1a').carousel({
      interval: 3000
    });
  }

}
