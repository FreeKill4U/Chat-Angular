import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messegeCuter'
})
export class MessegeCuterPipe implements PipeTransform {

  transform(value: any, border: number): unknown {
    let result = value;
    if(value != null)
    {
      result = value.slice(0, border);
      if(value.length >= border)
        result+='...';
    }
    return result;
  }

}
