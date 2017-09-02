# Redux UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

After running `npm install` (or whatever), run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Purpose

This serves as a demo project to accompany a presentation about using a Redux data flow to handle user interactions with common items in your UI.  For example, when a user opens or closes a main nav, opens or closes a modal, or clicks a button that triggers actions elsewhere in the DOM.

### Branches

Each branch serves as a step towards the final output, shown in this master branch.  Note that in the list below, Key files are listed from the `src/app/` path, and most are marked with comments explaining some of the features that were added in the selected branch.

#### `0-bare-app`

This shows the app in its initial state, with a pure ng4 setup using the Anuglar CLI.  Really nothing to see here other than what was there before adding the Redux data flow.

#### `1-redux-setup`

This branch pulls in the `@ngrx/store` library, and creates the first reducer; although at this point the reducer doesn't have any functionality yet.

Key files:
- `app.module.ts` - shows how `@ngrx/store` is pulled into the app as a library
- `reducers/ui.reducer.ts` - initial setup of the reducer we'll use in this demo

#### `2-main-view-subscription`

This shows how we create a `Subscriber` in the main view to watch for changes to the state.

Key files:
- `views/main/main.view.ts` - demonstrates a smart component's subscription to the store, as well as shows how it would clean up its listener using the built-in `ngOnDestroy` hook.

#### `3-nav-toggle`

Our first implementation of a Redux flow.  This branch enables the toggling of the slide-out nav using reducers to modify the state of the app.

Key files:
- `actions/ui.actions.ts` - shows how to set up two actions that only include the `Action.type` property, and omit the optional `Action.payload`.
- `reducers/ui.reducer.ts` - explains the various statements in a typical reducer file, and sets up two `Action.type` handlers to return a newly altered state.
- `views/main/main.view.ts` - defines custom event handlers that consume events bubbled up from child components, and turns those into Actions dispatched to reducer functions.
- `views/main/main.view.html` - shows how custom event handlers are set on dumb component, as well as how locally-captured state data is passed down to dumb components.
- `components/nav-toggle/nav-toggle.component.ts` - a simple implementation of a click handler on a dumb component bubbling up a custom event to its parent smart component.
- `components/app-nav/app-nav.component.ts` - shows how properties from the state of the app are passed down from the smart component into this dumb component, and how a click handler bubbles up a custom event from the dumb component back to the smart component.

#### `4-main-nav`

Continues implementing a Redux flow for our UI by applying state to main navigation item selection.

Key files:
- `actions/ui.actions.ts` - adds an action that does include the optional `Action.payload` property
- `reducers/ui.reducer.ts` - shows how a reducer can handle an action that passes in a payload of data
- `views/main/main.view.ts` - sets up a custom event handler that accepts data from the dumb child component, operates on it, and dispatches an action with a payload.
- `components/app-nav/app-nav.component.html` - sets up a click handler on the `li` loop, and maps dummy data to the various main nav options.
- `components/app-nav/app-nav.component.ts` - shows how the click handler is applied to create a custom event that will bubble up to the smart parent component.

#### `5-page-content`

This takes data that was set in the state during the last step, and applies it to other parts of the view.

Key files:
- `views/main/main.view.html` - passes data already available in the smart component down to the dumb child, and uses it in its own template.
- `components/page-title/page-title.component.ts` - adds an input to take title data from its parent.
- `components/page-title/page-title.component.html` - applies the newly accepted title data to the component template.

#### `6-activate-modal`

In this branch, we demo how a click on side of the component tree can modify the state so that another side of the component tree is altered.

Key files:
- `actions/ui.actions.ts` - adds two new actions, one that opens the modal and accepts a payload dictating the modal's content, and one that closes the modal and has no payload.
- `reducers/ui.reducer.ts` - adds cases to the reducer to handle the two new actions.
- `views/main/main.view.ts` - adds `triggerModal` and `closeModal` handlers for the various modal events.
- `views/main/main.view.html` - passes internal data down to the action button component, and applies a custom event handler to its template.  Does the same with the app modal component.
- `components/action-buttons/action-buttons.component.ts` - sets up an input to take in a list of data objects from the parent, and creates a click handler that bubbles up a custom events.
- `components/action-buttons/action-buttons.component.html` - creates a loop over the data array received from the parent, and applies the click handler so that each button passes back specific data to the handler when clicked.
- `components/app-modal/app-modal.component.ts` - adds inputs to take display data and the activation state of the modal from the smart parent, while also creating a custom event to emit when the cancel button is clicked.
- `components/app-modal/app-modal.component.html` - shows how custom data passed in from the parent is applied to the template, and how the click handler is applied to the cancel button.

#### `7-modal-nav`

Finally we apply an already existing Action to a new set of functionality to show that Actions can be reused when attempting to achieve the same results.

Key files:
- `reducers/ui.reducer.ts` - slightly modifies the `SET_NAV_ITEM` action created in `4-main-nav` to also close a modal; this makes is applicable to the main nav, as well as the modal.
- `views/main/main.view.html` - applies the existing `handleNavItemActivation` custom event handler to the app modal component
- `components/app-modal/app-modal.component.ts` - creates a new custom event for submitting the modal, which is fired in the new click handler that will be set on the submit button
- `components/app-modal/app-modal.component.html` - applies the new click handler to the submit button
