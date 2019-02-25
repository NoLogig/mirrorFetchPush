import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboardComponent } from './pages/games/checkboard/checkboard.component';
import { GithubViewerComponent } from './pages/APIs/github-viewer/github-viewer.component';
import { NumberShazamComponent } from './pages/games/number-shazam/number-shazam.component';
import { SphereComponent } from './pages/theorems/sphere/sphere.component';
import { SpiralsComponent } from './pages/theorems/spirals/spirals.component';
import { UlamSpiralComponent } from './pages/theorems/ulam-spiral/ulam-spiral.component';
import { FibonacciComponent } from './pages/theorems/fibonacci/fibonacci.component';
import { FactorialComponent } from './pages/theorems/factorial/factorial.component';
import { ImageManipulationComponent } from './pages/pixel-manipulation/img-manipulation/img-manipulation.component';
import { VideoEditorComponent } from './pages/pixel-manipulation/video-manipulation-greenscreen/video-editor.component';
import { PythagorasComponent } from './pages/theorems/pythagoras/pythagoras.component';
import { NodeGardenComponent } from './pages/designs/node-garden/node-garden.component';
import { SierpinskiTriangleComponent } from './pages/theorems/sierpinski-triangle/sierpinski-triangle.component';
import { SplitScreenScewComponent } from './pages/designs/split-screen-scew/split-screen-scew.component';
import { SieveAtkinComponent } from './pages/theorems/sieve-atkin/sieve-atkin.component';
import { SieveEratosthenesComponent } from './pages/theorems/sieve-eratosthenes/sieve-eratosthenes.component';
import { TheoremEuclidEulerComponent } from './pages/theorems/theorem-euclid-euler/theorem-euclid-euler.component';
import { CubeCssComponent } from './pages/designs/cube-css/cube-css.component';
import { ParallaxCSSComponent } from './pages/designs/layouts/parallax-css/parallax-css.component';

export const routes: Routes = [
  { path: '', redirectTo: 'numberzam', pathMatch: 'full' },
  { path: 'numbersam', children: [], component: NumberShazamComponent },
  { path: 'node', children: [], component: NodeGardenComponent },
  { path: 'checkboard', children: [], component: CheckboardComponent },
  { path: 'github', children: [], component: GithubViewerComponent },
  { path: 'sphere', children: [], component: SphereComponent },
  { path: 'spiral', children: [], component: SpiralsComponent },
  { path: 'ulman', children: [], component: UlamSpiralComponent },
  { path: 'fibonacci', children: [], component: FibonacciComponent },
  { path: 'factorial', children: [], component: FactorialComponent },
  { path: 'img', children: [], component: ImageManipulationComponent },
  // { path: 'img/:id', component: ImageManipulationComponent,
  //   children: [
    //     { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //     { path: 'overview', component: ImgOverviewComponent },
    //     { path: 'specs', component: ImgSpecsComponent }
    //   ]
    // },
    { path: 'video', children: [], component: VideoEditorComponent },
    { path: 'pythagoras', children: [], component: PythagorasComponent },
    { path: 'hexagon', redirectTo: 'hexagon', pathMatch: 'full'},
    { path: 'split-scew', children: [], component: SplitScreenScewComponent },
    { path: 'sierpinksi', children: [], component: SierpinskiTriangleComponent },
    { path: 'atkin', children: [], component: SieveAtkinComponent },
    { path: 'eratosthenes', children: [], component: SieveEratosthenesComponent },
    { path: 'cube-css', children: [], component: CubeCssComponent },
    { path: 'euler', children: [], component: TheoremEuclidEulerComponent },
    { path: 'phi', redirectTo: 'phi', pathMatch: 'full'},
    { path: 'para', children: [], component: ParallaxCSSComponent }


    // { path: '**', component: SplitScreenScewComponent }  // to Do: Fancy 404 PageNotFound
  ];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
