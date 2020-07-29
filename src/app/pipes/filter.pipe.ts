import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    
    const resultServices = [];
    for (const service of value){
      if(service.nom.indexOf(arg) > -1){        
        console.log(service);
        resultServices.push(service);
      };
    };
    return resultServices;
  }

}
