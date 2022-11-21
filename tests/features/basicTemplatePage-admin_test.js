Feature('말하기 위해서 익혀야할 간단 템플릿 관리자 페이지 둘러보기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/basicTemplate-admin');
});

Scenario('말하기 위해서 익혀야할 간단한 템플릿 양식을 볼 수 있다..', ({ I }) => {
  // When

  // Then
  I.see('Hey, How are you?');
  I.see('인사하기');
  I.see('실전 연습하러가기');
  I.click('실전 연습하러가기');
});

Scenario('말하기 위해서 익혀야할 간단한 템플릿 양식을 추가할 수 있다..', ({ I }) => {
  // When
  I.click('추가하기');

  I.fillField('title', '인삿말 배우기.');
  I.fillField('koreanSentence', '뭐해?');
  I.fillField('englishSentence', 'what is up?');
  I.fillField('description', '상세 설명입니다.');
  // Then

  I.see('인삿말 배우기');
  I.see('뭐해?');
  I.see('what is up?');
  I.see('상세 설명입니다.');
});

Scenario('말하기 위해서 익혀야할 간단한 템플릿 양식을 수정할 수 있다..', ({ I }) => {
  // When
  I.click('수정하기');

  I.fillField('title', '추가 내용 제목');
  I.fillField('koreanSentence', '수정사항');
  I.fillField('englishSentence', 'it is updated');
  I.fillField('description', '업데이트 되었습니다.');
  // Then

  I.see('추가 내용 제목');
  I.see('수정사항');
  I.see('it is updated');
  I.see('업데이트 되었습니다.');
});

Scenario('말하기 위해서 익혀야할 간단한 템플릿 양식을 삭제할 수 있다..', ({ I }) => {
  // When
  I.see('Hey, How are you?');

  I.click('삭제하기');

  // Then

  I.see('삭제 하시겠습니까?');

  I.click('확인');

  I.dontSee('Hey, How are you?');
});
