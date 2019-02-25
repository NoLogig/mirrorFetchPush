import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public routes = [];
  public navIcons = [
    'grid_on',
    'blur_on',
    '360',
    'priority_high',
    'aspect_ratio',
    'share', 'settings',
    'network',
    'signal_cellular_null',
    'img',
    'video',
    'pythagoras',
    'carousel',
    'skew-screen',
    'sierpinksi',
    'atkin',
    'eratosthenes',
    'cube',
    'euler',
    'phi'
  ];

  constructor() {
    routes.forEach((r, i) => {
      if (r.path && r.path !== '**') {
        this.routes.push(r);
      }
    });
  }
  ngOnInit() {
  }

}
