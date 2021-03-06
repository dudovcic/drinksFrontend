import { Pipe, PipeTransform } from '@angular/core';
import { isMoment } from 'moment';
import * as moment from 'moment';

@Pipe({
    name: 'humanTime',
    pure: true
})
export class HumanTimePipe implements PipeTransform {
    transform(time: any, format: string = "LLL") {
        return moment(time).format(format);
    }
}