import { GoogleMapAngularPage } from './app.po';

describe('google-map-angular App', function() {
  let page: GoogleMapAngularPage;

  beforeEach(() => {
    page = new GoogleMapAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
