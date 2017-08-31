import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons } from './components';
import { MainView } from './views';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons,
        MainView
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
