import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

   transform(date: moment.Moment, format = 'LL', locale?: string): string {
    if (!date)
      return '';

    let d = date;

    if(locale){
      d = moment(d);
      d.locale(locale);
    }

    return d.format(format);
  }
}