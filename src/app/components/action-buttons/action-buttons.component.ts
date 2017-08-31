import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iNavItem } from '../../models';

@Component({
    selector: 'action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtons {
    // I now have a list of buttons populating dynamically,
    // as well as an event that emits up which button the user has chosen

    @Input() itemList: Array<iNavItem>;
    @Output() actionButtonEvent = new EventEmitter<string>();

    handleActionButtonClick(key) {
        this.actionButtonEvent.emit(key);
    }
}
