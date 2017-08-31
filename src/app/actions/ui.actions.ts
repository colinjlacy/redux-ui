import { Action } from '@ngrx/store';

import { iNavItem } from '../models';

export const SET_NAV_ITEM  = 'SET_NAV_ITEM';
export const OPEN_NAV  = 'OPEN_NAV';
export const CLOSE_NAV  = 'CLOSE_NAV';

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
