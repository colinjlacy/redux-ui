import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { NAV_ITEMS } from '../../constants';
import { SetNavItem } from '../../actions';
import { iUiState, iAppState, iNavItem } from '../../models';

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
                console.log('val', val);
                this.uiState = val
            });
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }

    handleNavActivation(eventData) {
        console.log('event', eventData);
        const payload: iNavItem = NAV_ITEMS.find(x => x.key === eventData);
        this.store.dispatch(new SetNavItem(payload));
    }
}
