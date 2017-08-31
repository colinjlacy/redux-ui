import { Action } from '@ngrx/store';

// This is the typical interface for @ngrx/store.  There are probably
// other ways to write Redux - this is just how the library I'm using it
// does it.

// First, we have string constants.  These map to a `type` property on a
// dispatched Action.  That type dictates to the reducer function what type of
// data to write when creating a new state object.
export const OPEN_NAV  = 'OPEN_NAV';
export const CLOSE_NAV  = 'CLOSE_NAV';


// Then we have Actions.  Each action includes a `type` property, which as
// mentioned above is a string.  It can also have a `payload` property, which we'll
// see in the next step
export class OpenNav implements Action {
    readonly type = OPEN_NAV;
}

export class CloseNav implements Action {
    readonly type = CLOSE_NAV;
}

// At the bottom here, we have some TypeScript code that keeps everything in our
// redux data flow type-safe.  It basically says to the TypeScript compiler what
// actions can possibly be called in our reducer, and what type of data they should
// expect from the dispatcher.
export type All
    = OpenNav
    | CloseNav;
