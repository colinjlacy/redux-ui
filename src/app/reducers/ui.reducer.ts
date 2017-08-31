import { NAV_ITEMS } from '../constants';
import * as Actions from '../actions';

const INITIAL_STATE = {
    activeNavItem: NAV_ITEMS[0],
    navIsOpen: false
};

export type Action = Actions.All;

export function ui(state: any = INITIAL_STATE, action: Action) {

    switch (action.type) {

        case Actions.SET_NAV_ITEM:
            return Object.assign({}, state, {
                activeNavItem: action.payload,
                navIsOpen: false
            });

        case Actions.OPEN_NAV:
            return Object.assign({}, state, {
                navIsOpen: true
            });

        case Actions.CLOSE_NAV:
            return Object.assign({}, state, {
                navIsOpen: false
            });

        default:
            return state;

    }
}
