Feature('그래마 페이지 둘러보기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/grammar');
});

Scenario('1형식과 5형식에 대한 정보를 볼 수 있다.', ({ I }) => {
  // When

  I.click('수정하기');

  I.fillField('수정된 내용입니다.');
  // Then

  I.see('수정된 내용입니다.');
});
