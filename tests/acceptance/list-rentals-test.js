import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the homepage', function (assert){
  visit('/');
  andThen(function(){
    assert.equal(currentURL(), '/rentals', 'should redirect automatically')
  })
});
test('should link to information about company', function (assert){
  visit('/');
  click('a:contains("About")');
  andThen(function(){
    assert.equal(currentURL(), '/about', 'should navigate to about');
  })
});
test('should link to contact information', function (assert){
  visit('/');
  click('a:contains("Contact")');
  andThen(function(){
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  })
});
// test('should list available rentals', function (assert){
// });
// test('should filter available rentals by city', function (assert){
// });
// test('should show details for a selected rental', function (assert){
// });