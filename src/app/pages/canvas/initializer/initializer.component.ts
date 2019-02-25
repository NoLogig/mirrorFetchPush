import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import maths from 'src/app/services/math/utils.service';
import { CanvasUtilsService } from 'src/app/services/canvas/utils.service';


@Component({
  selector: 'app-initializer',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.scss']
})
export class InitializerComponent implements OnInit {

  @ViewChild('base') baseCanvas: ElementRef;
  @ViewChild('overlay') overlayCanvas: ElementRef;

  canvas: {
    base: {
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    },
    overlay: {
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number
    }
  };

  constructor(public canu: CanvasUtilsService, public ngZone: NgZone) {

  }

  ngOnInit(): void {
    this.initBase();
    this.initOverlay();

    // this.animateGeo();
  }


  initBase() {
    this.canvas.base = this.baseCanvas.nativeElement;
    this.canvas.base.ctx = this.baseCanvas.nativeElement.getContext('2d');

    this.canvas.base.width = this.canvas.base.canvas.width = window.innerWidth;
    this.canvas.base.height = this.canvas.base.canvas.height = window.innerHeight;

    this.canvas.base.ctx.strokeStyle = 'rgba(0, 255, 255, .9)';
    this.canvas.base.ctx.fillStyle = 'rgba(0, 0, 0, .8)';
    this.canvas.base.ctx.fillRect(0, 0, this.canvas.base.width, this.canvas.base.height);
    this.canvas.base.ctx.fill();

  }
  initOverlay() {
    this.canu.drawCanvasGrid(this.canvas.base.ctx, this.canvas.base.width, this.canvas.base.height, 39);
    this.canu.drawCanvasCenter(this.canvas.base.ctx);
  }

  canvasAnimate() {
    // Prevent memory leak
    this.ngZone.runOutsideAngular(this.render);
  }

  render = (): void => {
    this.canvas.base.ctx.clearRect(0, 0, this.canvas.base.width, this.canvas.base.height);
    // updates
    requestAnimationFrame(this.render);
  }

}
