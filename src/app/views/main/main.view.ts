import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { NAV_ITEMS } from '../../constants';
import { SetNavItem, OpenNav, CloseNav, OpenModal, CloseModal } from '../../actions';
import { iUiState, iAppState, iNavItem } from '../../models';

@Component({
    selector: 'main-view',
    templateUrl: './main.view.html',
    styleUrls: ['./main.view.scss']
})
export class MainView implements OnInit, OnDestroy {

    storeSubscription: Subscription;
    uiState: iUiState;
    navItemList: Array<iNavItem>;

    constructor(private store: Store<iAppState>) {}

    ngOnInit() {
        this.storeSubscription = this.store.select('ui')
            .subscribe(val => {
                console.log('val', val);
                this.uiState = val
            });
        this.navItemList = NAV_ITEMS;
    }

    ngOnDestroy() {
        this.storeSubscription.unsubscribe();
    }

    handleNavItemActivation(eventData) {
        const payload: iNavItem = NAV_ITEMS.find(x => x.key === eventData);
        this.store.dispatch(new SetNavItem(payload));
    }

    openNav() {
        this.store.dispatch(new OpenNav());
    }

    closeNav() {
        this.store.dispatch(new CloseNav());
    }

    triggerModal(eventData) {
        const payload: iNavItem = NAV_ITEMS.find(x => x.key === eventData);
        payload.title = payload.title.replace('!', '?');
        this.store.dispatch(new OpenModal(payload));
    }

    closeModal() {
        this.store.dispatch(new CloseModal());
    }
}
