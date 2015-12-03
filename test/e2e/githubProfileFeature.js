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


// describe('Github Profile Finder', function() {
//   it('finds profiles', function() {
//     browser.get('http://localhost:8080');


//    element(by.model('searchCtrl.searchTerm')).sendKeys('spike01');
//     element(by.className('btn')).click();

//     expect(element(by.binding('user.login')).getText()).toEqual('spike01');
//     });
//   });



describe('GitHub profile finder', function() {
 it('finds profiles', function() {
   browser.get('http://localhost:8080');

   element(by.model('searchCtrl.searchTerm')).sendKeys('Mattia46');
   element(by.className('btn')).click();

   expect(element(by.binding('user.login')).getText()).
   toEqual('Mattia46');
   browser.pause();
 });
});