import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];

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

  constructor(goalService.GoalService) {
    this.goals = goalService.getGoals();
   }
  
  ngOnInit(): void {
  }

}
