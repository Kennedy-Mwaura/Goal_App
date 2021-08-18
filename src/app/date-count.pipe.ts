import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); // get the current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // create a new date object with only the date
    let dateDifference = Math.abs(value - todayWithNoTime); // get the difference between the two dates in milliseconds
    let dateDifferenceInDays = Math.round(dateDifference / (1000 * 60 * 60 * 24)); // calculate the difference in days
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }

}