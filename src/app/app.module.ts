import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// In Angular, we import the StoreModule from its directory in node_modules
import { StoreModule } from '@ngrx/store';

import { AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons } from './components';
import { MainView } from './views';
// We also pull in the reducer function, which currently has not content.
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
        // finally, we import the store module as a module dependency
        StoreModule.forRoot({ui: ui})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
