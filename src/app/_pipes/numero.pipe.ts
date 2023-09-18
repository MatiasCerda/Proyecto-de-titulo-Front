import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'numero'
})
export class NumeroPipe implements PipeTransform {
  transform(value: string):any {
      value = String(value);
      value = value==null ? "": value.replace(/,/g, '');
      value = value.replace(/\./g, '');
      let retNumber = Number(value);
      return isNaN(retNumber) ? 0 : retNumber > 2147483647 ? 0 : retNumber;
  }
}