import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNav {

    // this is our second dumb component.  It does two things.

    // First, ittakes input from the parent view telling it whether
    // or not the app-nav should be open.
    @Input() isOpen: boolean;

    // Second, it handles a click on its close button, and then
    // re-emits a special event to the parent view letting it know
    // the user's intent.
    @Output() closeNavEvent = new EventEmitter<any>();

    handleCloseNavClick() {
        this.closeNavEvent.emit();
    }

}
