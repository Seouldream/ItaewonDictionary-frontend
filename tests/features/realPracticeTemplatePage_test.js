Feature('실전 말하기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/realPracticeTemplate');
});

Scenario('말하기 위해서 익혀야할 실전 템플릿 양식을 볼 수 있다..', ({ I }) => {
  // When

  // Then
  I.see('안녕 나는 제이라고 해.');
});

Scenario('템플릿 양식의 영작을 볼 수 있다..', ({ I }) => {
  // When
  I.fillField('userAnswer', 'Hi, I am Jay');
  I.click('베스트 프렉티스 보기');
  // Then

  // 정답률에 따른 텍스트의 컬러를 판단할 수 있을까?
  I.see('Hi, I am Jay');
  I.see('100%');
});
