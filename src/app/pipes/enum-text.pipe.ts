import { Pipe, PipeTransform } from '@angular/core';
import { enumerators } from '../../enumerators/dictionaries/enum.pt-br';

@Pipe({
  name: 'enumText'
})
export class EnumTextPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!enumerators[args[0]]) { return 'Enumerador Inválido'; }
    if (!enumerators[args[0]][value]) { return (args[0] + ' Inválido'); }

    return enumerators[args[0]][value];
  }

}
