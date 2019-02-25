import { Component, OnInit, ViewChild, ElementRef, Testability } from '@angular/core';

import { Observable, of, range } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-ulam-spiral',
  templateUrl: './ulam-spiral.component.html',
  styleUrls: ['./ulam-spiral.component.css']
})
export class UlamSpiralComponent implements OnInit {

  @ViewChild('ulman') canvasRef1: ElementRef;

  public myElement;

  numCols = 4;
  grid = [];
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  maxDist = 150;
  nodes = [];

  n = 1000;

  constructor() {

  }

  ngOnInit() {

    this.canvas = this.canvasRef1.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth / 2;
    this.canvas.height = window.innerHeight / 2;

    this.createUlmanField();

    this.test();
  }

  createUlmanField() {

    this.ctx.strokeStyle = 'rgba(0, 255, 255, .5)';
    this.ctx.fillStyle = 'rgba(0, 255, 255, .5)';

    for (let i = 0; i < 50; i++) {

      this.ctx.beginPath();
      this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);
      this.ctx.lineTo(this.canvas.width / 2 + 50, this.canvas.height / 2);
      this.ctx.stroke();

    }
  }

  factorializeFor(num) {
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1) {
      return 1;
    }

    // We start the FOR loop with i = 4
    // We decrement i after each iteration
    for (let i = num - 1; i >= 1; i--) {
      // We store the value of num at each iteration
      num = num * i; // or num *= i;
      /*
                      num      var i = num - 1       num *= i         i--       i >= 1?
      1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes
      2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
      3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
      4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
      5th iteration: 120               0                120
      End of the FOR loop
      */
    }
    return num; // 120
  }

  test() {

    for (let j = 0; j < this.n; j++) {

      let radius;
      let index = j + 1;
      let r = Math.sqrt(index);
      let theta = r * 2 * Math.PI;
      let x = Math.cos(theta) * r;
      let y = Math.sinh(theta) * r;

      let factors: [number] = this.factorializeFor(index);
      if (factors.length > 1) {
        radius = 0.05 * Math.pow(2, factors.length - 1);
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      }
    }
  }

}
