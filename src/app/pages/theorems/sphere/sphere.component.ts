import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sphere',
  templateUrl: './sphere.component.html',
  styleUrls: ['./sphere.component.css']
})
export class SphereComponent implements OnInit {
  laySyntax = [];
  constructor() { }

  ngOnInit() {
  }

  shereXYZ() {
    // Anzahl der Pünktchen bestimmen und div-Tags schreiben (+1 wg. Opera-Bug mit 0)
    for (let i = 0; i < 151; i++) {
      this.laySyntax.push(i);
    }

    let alpha = 0;

    // Kreisbewegung
    // 100 = Radius, 125/125 = Nullpunkt
    // 0.1257 = 2*Pi/Punkteanzahl pro Kreis = 2*Pi/50
    // = Abstand der Elemente zueinander in Radiant (rad)
    // Diese Angaben bestimmen die Größe der Kreise

    // feste Werte
    for (let p = 51; p < 101; p++) { this.laySyntax[p].top = 125 + 100 * Math.sin(0.1257 * p); }
    for (let p = 101; p < 151; p++) { this.laySyntax[p].left = 125 + 100 * Math.cos(0.1257 * p); }

    // veränderliche Werte
    function move() {
      for (let p = 1; p < 51; p++) {
        this.laySyntax[p].left = 125 + 100 * Math.cos(alpha + 0.1257 * p);
        this.laySyntax[p].top = 125 + 100 * Math.sin(alpha + 0.1257 * p);
      }
      for (let p = 51; p < 101; p++) { this.laySyntax[p].left = 125 + 100 * Math.cos(0.1257 * p) * Math.sin(alpha); }
      for (let p = 101; p < 151; p++) { this.laySyntax[p].top = 125 + 100 * Math.sin(0.1257 * p) * Math.sin(alpha); }

      // Winkel-Geschwindigkeit
      alpha = alpha - 0.01;

    }
  }
}
