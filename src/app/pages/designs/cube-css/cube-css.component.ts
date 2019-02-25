import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cube-css',
  templateUrl: './cube-css.component.html',
  styleUrls: ['./cube-css.component.css']
})
export class CubeCssComponent implements OnInit {

  constructor() { }

  showMe(self) {
    alert(self);
  }

  ngOnInit() {
  }

}
