import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {

  public transform(items: any[], field: string, isDesc: boolean): any {
    let direction: number = isDesc ? 1 : -1;
    let props: string[] = [];

    if ( field.indexOf(".") !== -1 ) {
      while ( field.indexOf(".") !== -1 ) {
        props.push( field.slice(0, field.indexOf(".")));
        field = field.slice(field.indexOf(".") + 1, field.length );
      }
    }
    props.push(field);

    return [...items].sort((first, second) => {
      props.forEach( prop => {
        first = first[prop];
        second = second[prop];
      });

      if (first > second) {
        return -1 * direction;
      } else if (first < second) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

}
