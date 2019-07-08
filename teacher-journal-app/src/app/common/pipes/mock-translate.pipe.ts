import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "translate"
})
export class MockTranslatePipe implements PipeTransform {
  public transform(value: string): string {
    return value;
  }
}
