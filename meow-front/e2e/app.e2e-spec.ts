import { MeowFrontPage } from './app.po';

describe('meow-front App', () => {
  let page: MeowFrontPage;

  beforeEach(() => {
    page = new MeowFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
