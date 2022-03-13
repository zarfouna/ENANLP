import {checkForArticle} from '../client/js/nameChecker'

 

test('the function "checkForArticle()" should exist', () => {
    expect(checkForArticle).toBeDefined();
  });
  test('It should be a function',  () => {
    expect(typeof checkForArticle).toBe("function");
});