import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons } from './components';
import { MainView } from './views';
import { ui } from './reducers';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons,
        MainView
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({ui: ui})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
