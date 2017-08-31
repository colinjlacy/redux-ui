import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iNavItem } from '../../models';

@Component({
    selector: 'app-modal',
    templateUrl: './app-modal.component.html',
    styleUrls: ['./app-modal.component.scss']
})
export class AppModal {
    @Input() isOpen: boolean;
    @Input() modalData: iNavItem;
    @Output() modalCloseEvent = new EventEmitter<any>();
    // a new event for submitting the modal
    @Output() modalSubmitEvent = new EventEmitter<string>();

    handleModalClose() {
        this.modalCloseEvent.emit();
    }

    // this emits an event with the key of the selected nav item
    handleModalSubmit() {
        this.modalSubmitEvent.emit(this.modalData.key);
    }
}
