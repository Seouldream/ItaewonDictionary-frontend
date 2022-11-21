Feature('관리자 페이지');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/adminPage/speak');
});

Scenario('미답변 상태의 글들을 볼 수 있다.', ({ I }) => {
  // When
  I.see('미답변');

  // Then
  I.dontSee('답변완료');
});

Scenario('미답변 상태 글에 답변을 달 수 있다.', ({ I }) => {
  // When
  I.click('미답변 상태 글');

  I.fillField('댓글', '이렇게 하시면 좋아요');
  I.fillField('음성파일', '음성파일예제');

  // Then

  I.see('이렇게 하시면 좋아요');
  I.hear('음성파일예제');
});
