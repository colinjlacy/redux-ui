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
    @Input() activeNavItem: iNavItem;
    @Output() closeNavEvent = new EventEmitter<any>();
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
