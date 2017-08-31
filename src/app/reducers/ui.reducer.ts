import { NAV_ITEMS } from '../constants';
import * as Actions from '../actions';

const INITIAL_STATE = {
    activeNavItem: NAV_ITEMS[0]
};

export type Action = Actions.All;

export function ui(state: any = INITIAL_STATE, action: Action) {

    switch (action.type) {

        case Actions.SET_NAV_ITEM:
            return Object.assign({}, state, {
                activeNavItem: action.payload
            });

        default:
            return state;

    }
}
