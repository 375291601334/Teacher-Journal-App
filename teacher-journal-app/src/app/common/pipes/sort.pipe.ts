import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {

  public transform(items: any[], field: string, isDesc: boolean): any {
    let direction: number = isDesc ? 1 : -1;
    return [...items].sort((first, second) => {
      if (first[field] > second[field]) {
        return -1 * direction;
      } else if (first[field] < second[field]) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

}
