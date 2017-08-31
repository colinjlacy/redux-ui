import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iNavItem } from '../../models';
import { NAV_ITEMS } from '../../constants';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNav {

    navItems: Array<iNavItem>;

    @Input() isOpen: boolean;
    // notice we take the activeNavItem as an input instead of trying
    // to handle it internally.  That's part of the redux mentality,
    // and in following that we keep this component stupid
    @Input() activeNavItem: iNavItem;
    @Output() closeNavEvent = new EventEmitter<any>();
    // this adds an even that we emit once a user has chosen a nav item.
    // it's up the view to decide what to do with that event, not this
    // component.
    @Output() setNavItem = new EventEmitter<iNavItem>();

    constructor() {
        this.navItems = NAV_ITEMS;
    }

    // now we have click handlers for each item in the main nav
    handleNavItemClick(key) {
        this.setNavItem.emit(key);
    }

    handleCloseNavClick() {
        this.closeNavEvent.emit();
    }

}
