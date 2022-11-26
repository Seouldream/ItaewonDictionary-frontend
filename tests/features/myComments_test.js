Feature('내 페이지 댓글 관리');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/myPage/comments');
});

Scenario('#1 내가 올린 댓글들을 볼 수 있다.', ({ I }) => {
  // When

  // Then
  I.see('댓글 내용');
  I.see('작성자아이디');
});

Scenario(
  '#2 내가 등록한 댓글을 클릭하면 해당 게시글을 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('내가 등록한 댓글 내용');
    // Then
    I.see('해당 댓글 게시물 제목');
    I.see('내용');
  },
);

Scenario(
  '#3 삭제된 게시물에 내가 등록한 댓글을 클릭하면 삭제 문구를 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('내가 등록한 댓글 내용');
    // Then
    I.see('삭제된 게시물입니다.');
  },
);

Scenario(
  '#4 내 댓글을 수정 할 수 있다.',
  ({ I }) => {
  // When
    I.see('수정할 댓글 이름');
    // 해당 댓글을 수정하기
    I.click('수정하기');

    I.fillField('정정 합니다.');

    I.click('확인');
    // Then
    I.see('수정된 글입니다.');
    I.see('정정 합니다.');
  },
);

Scenario(
  '#4 댓글을 삭제 할 수 있다.',
  ({ I }) => {
  // When
    I.see('삭제할 댓글 제목');

    I.click('삭제하기');

    I.see('삭제하시겠습니까?');

    I.click('완료');

    // Then
    I.dontSee('삭제할 댓글 제목');
  },
);
