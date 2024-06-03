import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() public img:string = '';
  @Input() public description:string = '';
  @Input() public route:string = '';

  constructor(private readonly _router: Router) {
  }
  public navigate(){
    this._router.navigate([this.route]);
  }
}
