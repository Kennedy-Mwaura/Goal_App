import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [

    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2021, 11, 14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot', new Date(2021, 10, 15)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon', new Date(2021, 12, 16)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks', new Date(2021, 9, 7)),
    new Goal(5,'Solve math homework','Damn Math', new Date(2021, 3, 8)),
    new Goal( 6, 'Plot world domination', 'Definetly on my to-do list', new Date(2021, 10, 9)),
    
    
  ]; 
  addNewGoal(goal:any ){
    let goalLength = this.goals.length;
    goal.id = goalLength +1 ;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete:boolean, index: number){
    if (isComplete){
      this.goals.splice(index, 1);
    }
  }
  deleteGoal(isComplete:boolean, index: number){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);

      if (toDelete){
        this.goals.splice(index, 1)
      }
    }
  }

  constructor() { }
  
  ngOnInit(): void {
  }

}
