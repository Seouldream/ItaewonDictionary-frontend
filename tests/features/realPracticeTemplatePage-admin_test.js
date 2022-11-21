Feature('실전 말하기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/realPracticeTemplate-admin');
});

Scenario('말하기 위해서 익혀야할 실전 템플릿 양식을 추가할 수 있다.', ({ I }) => {
  // When
  I.fillField('영작하기', 'Hi, I am Jay');
  I.click('베스트 프렉티스 보기');
  // Then
  I.see('Hi, I am Jay');
  I.see('100%');
});

Scenario('말하기 위해서 익혀야할 실전 템플릿 양식을 추가할 수 있다.', ({ I }) => {
  // When
  I.click('추가하기');

  I.fillField('title', '제목');
  I.fillField('koreanSentence', '안녕');
  I.fillField('englishSentence', 'hi');
  I.fillField('youtubeUrl', '...');
  I.fillField('description', 'you can say hello instead');
  // Then

  I.see('제목');
  I.see('안녕');
  // 토글 클릭
  I.click('안녕');
  I.see('Hi');
  I.see('you can say hello instead');
});

Scenario('말하기 위해서 익혀야할 실전 템플릿 양식을 수정할 수 있다.', ({ I }) => {
  // When
  I.click('수정하기');

  I.fillField('title', '제목');
  I.fillField('koreanSentence', '안녕');
  I.fillField('englishSentence', 'hi');
  I.fillField('youtubeUrl', '...');
  I.fillField('description', 'you can say hello instead');
  // Then

  I.see('제목');
  I.see('안녕');
  // 토글 클릭
  I.click('안녕');
  I.see('Hi');
  I.see('you can say hello instead');
});

Scenario('말하기 위해서 익혀야할 실전 템플릿 양식을 삭제할 수 있다.', ({ I }) => {
  // When
  I.click('삭제하기');

  I.see('삭제하시겠습니까?');
  I.click('확인');
  // Then

  I.dontSee('제목');
});
