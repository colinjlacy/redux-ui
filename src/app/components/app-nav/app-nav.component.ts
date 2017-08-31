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

    @Input() isActive: boolean;
    @Input() activeNavItem: iNavItem;
    @Output() setActive = new EventEmitter<boolean>();
    @Output() setNavItem = new EventEmitter<iNavItem>();

    constructor() {
        this.navItems = NAV_ITEMS;
    }

    handleNavItemClick(key) {
        this.setNavItem.emit(key);
    }

}
