import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  ngOnInit() {
    console.log('init Hello Component');
  }
  ngOnDestroy() {
    console.log('destroy Hello Component ');
  }
  user = {
    name: ' dinh nguyen',
    age: 10,
  };
  name = 'angular two way binding';
  inputType = 'text';
  handelClick = (event: any) => {
    console.log('handel Click', event);
  };

  // data binding
}
