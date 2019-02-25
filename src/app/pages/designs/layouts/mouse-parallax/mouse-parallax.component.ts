import { Component, OnInit } from '@angular/core';

interface IParallaxMouse {
  targetContainer: HTMLElement;
  moveFactor: number;
  zIndex: string;
}

@Component({
  selector: 'app-mouse-parallax',
  templateUrl: './mouse-parallax.component.html',
  styleUrls: ['./mouse-parallax.component.scss']
})
export class MouseParallaxComponent implements OnInit {

  title = 'Mouse Parallax Component';
  parallaxElements: IParallaxMouse[];

  constructor() { }

  ngOnInit() {
  }

  parallaxMouse(event: MouseEvent, { targetContainer, moveFactor = 5, zIndex = '-1'}: IParallaxMouse ) {

    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let percentX = ((mouseX / windowWidth) * moveFactor) - (moveFactor / 2);
    let percentY = ((mouseY / windowHeight) * moveFactor) - (moveFactor / 2);

    let topString = (0 - percentY - moveFactor) + '%';
    let leftString = (0 - percentX - moveFactor) + '%';
    let rightString = (0 - percentX - moveFactor) + '%';
    let bottomString = (0 - percentY - moveFactor) + '%';

    targetContainer.style.top = topString;
    targetContainer.style.left = leftString;
    targetContainer.style.right = rightString;
    targetContainer.style.bottom = bottomString;

    if (zIndex) {
      targetContainer.style.zIndex = zIndex;
    }
  }

  // $('#background').mouseParallax({ moveFactor: 5 });
  // $('#foreground').mouseParallax({ moveFactor: 10 });
  // $('#fore-foreground').mouseParallax({ moveFactor: 15 });
  // $('#fore-fore-foreground').mouseParallax({ moveFactor: 20 });

  // $('body').height(3000);
}
