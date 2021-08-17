import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    {id:1, name:'Watch finding Nemo', description:'Find an online version and watch merlin find his son'},
    {id:2, name:'Buying cookie', description:'Buy choclate chip'},
    {id:3, name:'Get dog food', description:'Almost done'},
    {id:4, name:'solve Coding assignment', description:'Work on solving the bugs '},
    {id:5, name:'Plot world domination', description:'Definetly on my to-do list'},
    
    
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
