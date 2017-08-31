import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iNavItem } from '../../models';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss']
})
export class AppModal {
    // in my modal, I now have two input properties, and I emit one event.
    // the inputs tell me how my modal should behave, and the event tells
    // the view what the user wants to do.

    @Input() isOpen: boolean;
    @Input() modalData: iNavItem;
    @Output() modalCloseEvent = new EventEmitter<any>();

    handleModalClose() {
        this.modalCloseEvent.emit();
    }
}
