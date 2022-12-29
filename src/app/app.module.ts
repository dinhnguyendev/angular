import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { HelloForComponent } from './hello-for/hello-for.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, HiComponent, HelloForComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
