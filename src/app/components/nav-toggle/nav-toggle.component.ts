import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-toggle',
    templateUrl: './nav-toggle.component.html',
    styleUrls: ['./nav-toggle.component.scss']
})
export class NavToggle {

    // this is our first dumb component.  It does one thing, which
    // is handling a click event, and emitting a new event up the DOM

    @Output() openNavEvent = new EventEmitter<any>();

    openNav() {
        this.openNavEvent.emit();
    }
}
