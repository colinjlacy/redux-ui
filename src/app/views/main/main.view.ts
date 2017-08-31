import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { OpenNav, CloseNav } from '../../actions';
import { iUiState, iAppState } from '../../models';

@Component({
    selector: 'main-view',
    templateUrl: './main.view.html',
    styleUrls: ['./main.view.scss']
})
export class MainView implements OnInit, OnDestroy {

    storeSubscription: Subscription;
    uiState: iUiState;

    constructor(private store: Store<iAppState>) {}

    ngOnInit() {
        this.storeSubscription = this.store.select('ui')
            .subscribe(val => {
                this.uiState = val
            });
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }

    // now that we have interaction being handled in our dumb components,
    // we'll interact with our Store in our smart component by handling
    // the events emitted by dumb components in specialized handlers.

    openNav() {
        this.store.dispatch(new OpenNav());
    }

    closeNav() {
        this.store.dispatch(new CloseNav());
    }
}
