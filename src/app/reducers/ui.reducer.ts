import * as Actions from '../actions';

// Here we set an initial state, with a single property, telling the app
// that the main nav should be closed by default.
const INITIAL_STATE = {
    navIsOpen: false
};

// this pulls in the typings that we set for all of our available actions
export type Action = Actions.All;

// finally we get to our reducer function, which you can see is actually pretty simple
export function ui(state: any = INITIAL_STATE, action: Action) {

    // we run a switch statement over the `type` property of the Action that's passed in
    // from the dispatcher
    switch (action.type) {

        // if the `type` matches the `OPEN_NAV` constant, then we overwrite the state with
        // a new object, which has a property that sets the main nav to be open
        case Actions.OPEN_NAV:
            return Object.assign({}, state, {
                navIsOpen: true
            });

        // if the `type` matches the `CLOSE_NAV` constant, then we overwrite the state with
        // a new object, which has a property that sets the main nav to be closed
        case Actions.CLOSE_NAV:
            return Object.assign({}, state, {
                navIsOpen: false
            });

        default:
            return state;

    }
}
