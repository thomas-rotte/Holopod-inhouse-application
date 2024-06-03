import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {HomeComponent} from "./home/home.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'video', component:VideoComponent},
  {path:'schedule', component:ScheduleComponent},
  {path:'game', component:GameComponent},
  {path:'', redirectTo:'/home', pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
