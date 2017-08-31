import * as Actions from '../actions';

const INITIAL_STATE = {
    navIsOpen: false
};

export type Action = Actions.All;

export function ui(state: any = INITIAL_STATE, action: Action) {

    switch (action.type) {

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
