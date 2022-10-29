Feature('home');

Scenario('visit home page', ({ I }) => {
  // When
  I.amOnPage('/');

  // Then
  I.see('Hello, world!');
});
