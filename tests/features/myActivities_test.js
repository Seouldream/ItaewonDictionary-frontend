Feature('내 페이지 게시물 관리');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/myPage/activities');
});

Scenario('#1 내가 올린 게시물들을 볼 수 있다.', ({ I }) => {
  // When

  // Then
  I.see('활동1');
  I.see('작성자아이디');
  I.see('내용(20자 이내)');
  I.see('모집중');
  // 오늘 작성된 글은 시간을 나타내주면 더 좋을 것 같다.
  I.see('날짜');
});

Scenario(
  '#2 내가 등록한 게시물을 상세 내용을 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('낵 게시글 제목');
    // Then
    I.see('제목');
    I.see('작성자아이디');
    I.see('날짜');
    I.see('장소');
    I.see('규칙');
    I.see('내용');
  },
);

Scenario(
  '#3 내 게시물을 삭제 할 수 있다.',
  ({ I }) => {
  // When
    I.click('삭제할 게시글 제목');

    I.click('삭제');

    I.see('삭제하시겠습니까?');

    I.click('확인');
    // Then
    I.dontSee('삭제 게시물 제목');
    I.amOnPage('내 게시물 리스트');
  },
);

Scenario(
  '#4 내 게시물을 수정 할 수 있다.',
  ({ I }) => {
  // When
    I.click('수정할 게시글 제목');

    I.click('수정하기');

    I.fillField('제목');
    I.fillField('작성자아이디');
    I.fillField('날짜');
    I.fillField('장소');
    I.fillField('규칙');
    I.fillField('내용');

    I.click('완료');

    // Then

    I.see('제목');
    I.see('작성자아이디');
    I.see('날짜');
    I.see('장소');
    I.see('규칙');
    I.see('내용');
  },
);
