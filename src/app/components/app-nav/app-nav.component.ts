import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html',
    styleUrls: ['./app-nav.component.scss']
})
export class AppNav {

    @Input() isOpen: boolean;
    @Output() closeNavEvent = new EventEmitter<any>();

    handleCloseNavClick() {
        this.closeNavEvent.emit();
    }

}
