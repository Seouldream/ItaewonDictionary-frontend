Feature('말하기 위해서 익혀야할 간단 템플릿 둘러보기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/basicTemplate');
});

Scenario('말하기 위해서 익혀야할 간단한 템플릿 양식을 볼 수 있다..', ({ I }) => {
  // When

  // Then
  I.see('Hey, How are you?');
  I.see('인사하기');
  I.see('실전 연습하러가기');
  I.click('실전 연습하러가기');
});
