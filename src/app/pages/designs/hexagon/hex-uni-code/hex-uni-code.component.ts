import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex-uni-code',
  templateUrl: './hex-uni-code.component.html',
  styleUrls: ['./hex-uni-code.component.scss']
})
export class HexUniCodeComponent implements OnInit {
  test;
  cellCount = 15;
  selectedIndex = 0;

   cells;
   isHorizontal = true;
   rotateFn = this.isHorizontal ? 'rotateY' : 'rotateX';
   radius;
   theta;
car;
   cellWidth;
   cellHeight;
  constructor() { }

  nextCarousel(c) {
    this.selectedIndex++;
    this.rotateCarousel(c);
  }
  prevCarousel(c) {
    this.selectedIndex--;
    this.rotateCarousel(c);
  }

  /* rotateCarousel() {
    let angle = this.selectedIndex / this.cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  }
  }
  */
  rotateCarousel(carousel: HTMLDivElement) { this.car = carousel;
    this.cellWidth = carousel.offsetWidth;
    this.cellHeight = carousel.offsetHeight;
    let angle = this.theta * this.selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -this.radius + 'px) ' +
      this.rotateFn + '(' + angle + 'deg)';
  }
  changeCarousel() {
    this.theta = 360 / this.cellCount;
    let cellSize = this.isHorizontal ? this.cellWidth : this.cellHeight;
    this.radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / this.cellCount ) );
    for ( let i = 0; i < this.cells.length; i++ ) {
      let cell = this.cells[i];
      if ( i < this.cellCount ) {
        // visible cell
        cell.style.opacity = 1;
        let cellAngle = this.theta * i;
        cell.style.transform = this.rotateFn + '(' + cellAngle + 'deg) translateZ(' + this.radius + 'px)';
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = 'none';
      }
    }

    this.rotateCarousel(this.car);
  }
  testFn(t) { console.log(t); }
  ngOnInit() { }
}
/*
// rotate carousel
( function() {
  var demo = document.querySelector('.demo--rotate-carousel');
  var carousel = demo.querySelector('.carousel');
  var cellCount = 9;
  var selectedIndex = 0;

  function rotateCarousel() {
    var angle = selectedIndex / cellCount * -360;
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  }

  var prevButton = demo.querySelector('.previous-button');
  prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
  });

  var nextButton = demo.querySelector('.next-button');
  nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
  });
})();
*/

/*
// dynamic carousel
( function() {
  var demo = document.querySelector('.demo--dynamic-carousel');
  var carousel = demo.querySelector('.carousel');
  var cells = carousel.querySelectorAll('.carousel__cell');
  var cellCount = 9;
  var selectedIndex = 0;
  var cellWidth = carousel.offsetWidth;
  var cellHeight = carousel.offsetHeight;
  var isHorizontal = true;
  var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
  var radius, theta;
  // console.log( cellWidth, cellHeight );

  function rotateCarousel() {
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
      rotateFn + '(' + angle + 'deg)';
  }

  var prevButton = demo.querySelector('.previous-button');
  prevButton.addEventListener( 'click', function() {
    selectedIndex--;
    rotateCarousel();
  });

  var nextButton = demo.querySelector('.next-button');
  nextButton.addEventListener( 'click', function() {
    selectedIndex++;
    rotateCarousel();
  });

  var cellsRange = demo.querySelector('.cells-range');
  cellsRange.addEventListener( 'change', changeCarousel );
  cellsRange.addEventListener( 'input', changeCarousel );



  function changeCarousel() {
    cellCount = cellsRange.value;
    theta = 360 / cellCount;
    var cellSize = isHorizontal ? cellWidth : cellHeight;
    radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
    for ( var i=0; i < cells.length; i++ ) {
      var cell = cells[i];
      if ( i < cellCount ) {
        // visible cell
        cell.style.opacity = 1;
        var cellAngle = theta * i;
        cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
      } else {
        // hidden cell
        cell.style.opacity = 0;
        cell.style.transform = 'none';
      }
    }

    rotateCarousel();
  }

  var orientationRadios = demo.querySelectorAll('input[name="orientation"]');
  ( function() {
    for ( var i=0; i < orientationRadios.length; i++ ) {
      var radio = orientationRadios[i];
      radio.addEventListener( 'change', onOrientationChange );
    }
  })();

  function onOrientationChange() {
    var checkedRadio = demo.querySelector('input[name="orientation"]:checked');
    isHorizontal = checkedRadio.value == 'horizontal';
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    changeCarousel();
  }

  // set initials
  onOrientationChange();

})();
*/
