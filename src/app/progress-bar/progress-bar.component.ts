import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'progress-barsssss',
  template: `
    <div [style.backgroundColor]="backgroundColor">
      <div
        class="progress"
        [style]="{
          backgroundColor: processColor,
          width: process + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress {
        height: 20px;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = '#ccc';
  @Input() processColor = 'tomato';
  @Input() process = 50;
  currentprocess = 10;
  constructor() {
    console.log(this.backgroundColor, this.processColor, this.process);
  }
  ngOnInit() {
    console.log(this.backgroundColor, this.processColor, this.process);
  }
  ngOnChanges() {}
}
