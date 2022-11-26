Feature('그래마 페이지 수정하기 둘러보기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/grammar-admin');
});

Scenario('1형식과 5형식에 대한 정보를 볼 수 있다.', ({ I }) => {
  // When

  // Then
  I.see('문장의 형식');
  I.see('1형식');
  I.see('5형식');
});

Scenario('수정된 내용을 볼 수 있다.', ({ I }) => {
  // When

  // Then
  I.see('문장의 형식');
  I.see('1형식');
  I.see('5형식');
});
