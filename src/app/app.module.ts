import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { HelloForComponent } from './hello-for/hello-for.component';
import { HelloStyleComponent } from './hello-style/hello-style.component';
import { HelloInputBindingComponent } from './hello-input-binding/hello-input-binding.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    HelloForComponent,
    ProgressBarComponent,
    HelloStyleComponent,
    HelloInputBindingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
