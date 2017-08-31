import { Action } from '@ngrx/store';

import { iNavItem } from '../models';

export const SET_NAV_ITEM  = 'SET_NAV_ITEM';

export class SetNavItem implements Action {
    readonly type = SET_NAV_ITEM;

    constructor(public payload: iNavItem) {}
}

export type All
    = SetNavItem;
