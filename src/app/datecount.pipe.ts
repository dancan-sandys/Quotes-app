import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datecount'
})
export class DatecountPipe implements PipeTransform {

  transform(value: any): number {

    let today:Date = new Date()
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let dateDifference = Math.abs(todayWithNoTime - value)
    let secondsPerDay = 86400
    let dateDifferenceSeconds = dateDifference * 0.001
    let dateCounter = dateDifferenceSeconds/secondsPerDay

    if(dateCounter >= 1 && value > 0){
      return dateCounter
    }

    else {return 0 }

    
  }

}
