import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTabsModule, MatDividerModule, MatButtonToggleModule, MatTab } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './pages/designs/header/header.component';
import { NodeGardenComponent } from './pages/designs/node-garden/node-garden.component';
import { SplitScreenScewComponent } from './pages/designs/split-screen-scew/split-screen-scew.component';
import { CubeCssComponent } from './pages/designs/cube-css/cube-css.component';

import { ImageManipulationComponent } from './pages/pixel-manipulation/img-manipulation/img-manipulation.component';
import { VideoEditorComponent } from './pages/pixel-manipulation/video-manipulation-greenscreen/video-editor.component';

import { NumberShazamComponent } from './pages/games/number-shazam/number-shazam.component';
import { CheckboardComponent } from './pages/games/checkboard/checkboard.component';

import { FactorialComponent } from './pages/theorems/factorial/factorial.component';
import { FibonacciComponent } from './pages/theorems/fibonacci/fibonacci.component';
import { PythagorasComponent } from './pages/theorems/pythagoras/pythagoras.component';
import { SierpinskiTriangleComponent } from './pages/theorems/sierpinski-triangle/sierpinski-triangle.component';
import { SieveAtkinComponent } from './pages/theorems/sieve-atkin/sieve-atkin.component';
import { SieveEratosthenesComponent } from './pages/theorems/sieve-eratosthenes/sieve-eratosthenes.component';
import { SphereComponent } from './pages/theorems/sphere/sphere.component';
import { SpiralsComponent } from './pages/theorems/spirals/spirals.component';
import { TheoremEuclidEulerComponent } from './pages/theorems/theorem-euclid-euler/theorem-euclid-euler.component';
import { UlamSpiralComponent } from './pages/theorems/ulam-spiral/ulam-spiral.component';

import { GithubViewerComponent } from './pages/APIs/github-viewer/github-viewer.component';


import { GoldenModule } from './pages/golden-ratio/golden-ratio.module';
import { HexagonModule } from './pages/designs/hexagon/hexagon.module';
import { InitializerModule } from './pages/canvas/initializer/initializer.module';
import { VisitenkarteModule } from './pages/designs/visitenkarte/visitenkarte.module';
import { ParallaxCSSComponent } from './pages/designs/layouts/parallax-css/parallax-css.component';
import { MouseParallaxComponent } from './pages/designs/layouts/mouse-parallax/mouse-parallax.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent,
    GithubViewerComponent, SphereComponent, SpiralsComponent, SieveEratosthenesComponent, NodeGardenComponent,
    TheoremEuclidEulerComponent, UlamSpiralComponent, ImageManipulationComponent, VideoEditorComponent,
    NumberShazamComponent, FactorialComponent, FibonacciComponent, PythagorasComponent, SierpinskiTriangleComponent, SieveAtkinComponent,
    CheckboardComponent, CubeCssComponent,
    SplitScreenScewComponent,
    ParallaxCSSComponent,
    MouseParallaxComponent
  ],
  imports: [
    AppRoutingModule, GoldenModule, MatTabsModule, VisitenkarteModule,
    BrowserModule, HttpClientModule, InitializerModule,
    BrowserAnimationsModule, HexagonModule,
    FormsModule, ReactiveFormsModule, MatButtonToggleModule,
    MatCardModule, MatSliderModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule
  ],
  providers: [ErrorStateMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
