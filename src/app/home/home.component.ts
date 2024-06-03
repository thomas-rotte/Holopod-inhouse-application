import { Component } from '@angular/core';
import {TileComponent} from "../tile/tile.component";
import {TITLE_LIST} from "./tileData";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    TileComponent,
    CommonModule
  ],
  standalone: true
})
export class HomeComponent {

  protected readonly tileList = TITLE_LIST;

}
