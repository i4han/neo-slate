import { NeoSlatePage } from './app.po';

describe('neo-slate App', () => {
  let page: NeoSlatePage;

  beforeEach(() => {
    page = new NeoSlatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
