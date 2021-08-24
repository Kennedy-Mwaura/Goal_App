import { Injectable } from '@angular/core';
import { goals } from '../goalList';
import {Goal} from '../goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals() {
    return goals;
  }

  getGoal(id: any) {
    for (let goal of goals){
      if (goal.id === id){
        return goal;
      }
    }
  }

  constructor() { }
}
