// describe('GitHub profile finder', function() {
//   it('finds profiles', function() {
//     browser.get('http://localhost:8080');

//     element(by.model('searchCtrol.searchTerm')).sendKeys('stephenlloyd');
//     element(by.className('btn')).click();

//     expect(element(by.binding('user.login')).getText()).
//         toEqual('stephenlloyd');
//   });
// });

// describe('Github Profile finder', function() {

//   it('finds profiles', function() {
//     browser.get('http://localhost:8080');

//     element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
//     element(by.className('btn')).click();
//     expect(element(by.binding('user.login')).getText()).
//         toEqual('spike0');
//   });
// });


// describe('GitHub profile finder', function() {
//   it('finds profiles', function() {
//     browser.get('http://localhost:8080');
//
//     element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
//     element(by.className('btn')).click();
//
//     expect(element(by.binding('user.login')).getText()).
//         toEqual('spike01');
//   });
// });


describe('GitHub profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds the last spike', function() {
    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spike321');
  });

});
