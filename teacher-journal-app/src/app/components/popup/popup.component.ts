import { Component, Input } from "@angular/core";

@Component({
  selector: "app-popup",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.less"]
})
export class PopupComponent implements Input {
  @Input() public text: string;

}
