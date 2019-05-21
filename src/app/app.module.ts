import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NextThreeStateCheckboxComponent } from './next-three-state-checkbox/next-three-state-checkbox.component';

@NgModule({
  declarations: [NextThreeStateCheckboxComponent],
  imports: [BrowserModule],
  entryComponents: [NextThreeStateCheckboxComponent],
  bootstrap: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const nextCheckbox = createCustomElement(NextThreeStateCheckboxComponent, {
      injector,
    });
    customElements.define('next-checkbox', nextCheckbox);
  }
  ngDoBootstrap() {}
}
