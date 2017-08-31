import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { iUiState, iAppState } from '../../models';

@Component({
    selector: 'main-view',
    templateUrl: './main.view.html',
    styleUrls: ['./main.view.scss']
})
export class MainView implements OnInit, OnDestroy {

    storeSubscription: Subscription;
    uiState: iUiState;

    // this is our one smart component, the view that will house
    // all of the dumb components.
    constructor(private store: Store<iAppState>) {}

    ngOnInit() {
        // we set up this view's intelligence by having it subscribe
        // to the Store.  later, when we start handling events, it will
        // also dispatch actions to the store as well.
        this.storeSubscription = this.store.select('ui')
            .subscribe(val => this.uiState = val);
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }
}
