import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// adding in the redux store ng2 module
import { StoreModule } from '@ngrx/store';

import { AppHeader, AppNav, AppModal, PageTitle, NavToggle, ActionButtons } from './components';
import { MainView } from './views';
// pulling in my reducer function
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
        // importing the store module as a module dependency
        StoreModule.provideStore({ui: ui})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
