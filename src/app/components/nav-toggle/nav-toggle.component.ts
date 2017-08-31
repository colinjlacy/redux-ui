import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-toggle',
    templateUrl: './nav-toggle.component.html',
    styleUrls: ['./nav-toggle.component.scss']
})
export class NavToggle {
    @Output() openNavEvent = new EventEmitter<any>();

    openNav() {
        this.openNavEvent.emit();
    }
}
