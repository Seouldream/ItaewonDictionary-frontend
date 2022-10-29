Feature('회원은 게시된 스터디 목록을 확인 할 수 있다.');

// Given
Before(({ I }) => {
  I.amOnPage('/studies');
});

Scenario('스터디 목록 둘러보기', ({ I }) => {
  // When

  // Then
  I.see('작성자');
  I.see('제목');
  I.see('공지사항');
});
