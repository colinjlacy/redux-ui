import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iNavItem } from '../../models';

@Component({
    selector: 'action-buttons',
    templateUrl: './action-buttons.component.html',
    styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtons {
    @Input() itemList: Array<iNavItem>;
    @Output() actionButtonEvent = new EventEmitter<string>();

    handleActionButtonClick(key) {
        this.actionButtonEvent.emit(key);
    }
}
