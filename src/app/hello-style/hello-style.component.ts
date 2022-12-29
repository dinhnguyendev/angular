import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-style',
  templateUrl: './hello-style.component.html',
  styleUrls: ['./hello-style.component.scss'],
})
export class HelloStyleComponent {
  isDanger = false;
  isWarning = false;
  handelChangeToggle = () => {
    this.isDanger = true;
  };
}
