import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  standalone:true
})
export class VideoComponent {
  constructor(private readonly _router:Router) {
  }
  goToHome() {
    this._router.navigate(['home'])
  }
}
