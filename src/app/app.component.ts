import { Component } from '@angular/core';
import { Goal } from './goal'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Goals';
  // goals: Goal[] = [
  //   {id:1, name: 'Watch Finding Nemo'},
  //   {id:2, name: 'Learn Angular'},
  //   {id:3, name: 'Learn TypeScript'},
  //   {id:4, name: 'Buy a new phone case'}, 
  //   {id:5, name: 'Buy a new computer case'},
  //   {id:6, name: 'Plot my world domoination plan'},
  // ]
}
