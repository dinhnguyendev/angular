import { Component } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.scss'],
})
export class HiComponent {
  ngOnInit() {
    console.log('init hi components');
  }
  ngOnDestroy() {
    console.log('destroy hi components');
  }
}
