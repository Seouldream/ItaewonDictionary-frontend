Feature('커뮤니티 어드민');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/community');
});

Scenario('#1 커뮤니티 안내 글을 볼 수 있다', ({ I }) => {
  // When
  I.click('커뮤니티 개설이 처음이시라면?');
  // Then
  I.see('아래와 같은 규칙으로 하시면 좋아요!');
});

Scenario(
  '#2 커뮤니티에 등록된 활동들을 볼 수 있다.',
  ({ I }) => {
  // When

    // Then
    I.see('활동1');
    I.see('작성자아이디');
    I.see('내용(20자 이내)');
    I.see('모집중');
    // 오늘 작성된 글은 시간을 나타내주면 더 좋을 것 같다.
    I.see('날짜');
  },
);

Scenario(
  '#3 커뮤니티에 등록된 활동의 상세 내용을 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');
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
  '#5 모집 활동에 대해 관리자 댓글을 남길 수 있다..',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');

    I.amOnPage('특정게시글 링크');
    I.fillField('comment', '관리자 입니다.');
    // Then
    I.see('관리자 입니다.');
  },
);

Scenario(
  '#6 관리자는 모집 활동을 삭제할 수 있다.',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');

    I.see('게시글 내용');

    I.amOnPage('특정게시글 링크');
    I.click('삭제하기');
    // Then
    I.dontSee('게시글 내용');
  },
);
