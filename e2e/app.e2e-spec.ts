import { ReduxUiPage } from './app.po';

describe('redux-ui App', () => {
  let page: ReduxUiPage;

  beforeEach(() => {
    page = new ReduxUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
