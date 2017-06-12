import { SimpleInterfacePage } from './app.po';

describe('simple-interface App', () => {
  let page: SimpleInterfacePage;

  beforeEach(() => {
    page = new SimpleInterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
