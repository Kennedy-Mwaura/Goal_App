import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService} from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote!: Quote;

  goToUrl(id: number){
    this.router.navigate(['/goals', id]);
  }


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
  deleteGoal(index: number){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }

  constructor(goalService:GoalService, alertService: AlertService, 
    private http: HttpClient, private quoteService: QuoteRequestService, private router: Router) {
    this.goals = goalService.getGoals();
    this.alertService  = alertService;
   }
  
  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
  }


}
