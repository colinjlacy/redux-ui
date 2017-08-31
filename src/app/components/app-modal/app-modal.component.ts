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

    handleModalClose() {
        this.modalCloseEvent.emit();
    }
}
