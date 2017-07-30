import { ContosoWebPage } from './app.po';

describe('contoso-web App', () => {
  let page: ContosoWebPage;

  beforeEach(() => {
    page = new ContosoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
