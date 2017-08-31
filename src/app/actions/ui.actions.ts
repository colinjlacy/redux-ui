import { Action } from '@ngrx/store';

import { iNavItem } from '../models';

export const SET_NAV_ITEM  = 'SET_NAV_ITEM';
export const OPEN_NAV  = 'OPEN_NAV';
export const CLOSE_NAV  = 'CLOSE_NAV';

// This is out new action that implements the action.payload property.
// in doing so, it accepts data to be sent according to a type and value.
// In this case, we're getting a nav item object along with the call to this action
export class SetNavItem implements Action {
    readonly type = SET_NAV_ITEM;

    constructor(public payload: iNavItem) {}
}

export class OpenNav implements Action {
    readonly type = OPEN_NAV;
}

export class CloseNav implements Action {
    readonly type = CLOSE_NAV;
}

export type All
    = SetNavItem
    | OpenNav
    | CloseNav;
