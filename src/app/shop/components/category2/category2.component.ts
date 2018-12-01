import { Component, OnInit } from '@angular/core';
declare let $;

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.css']
})
export class Category2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.next2').click(function () { $('.carousel2b').carousel('next'); return false; });
    $('.prev2').click(function () { $('.carousel2b').carousel('prev'); return false; });
    $('.carousel2b').carousel({
      interval: 3000
    });
  }

}
