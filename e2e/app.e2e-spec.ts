import { Angular04242017Page } from './app.po';

describe('angular04242017 App', () => {
  let page: Angular04242017Page;

  beforeEach(() => {
    page = new Angular04242017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
