Feature('커뮤니티');

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
  '#4 커뮤니티에 활동을 등록할 수 있다',
  ({ I }) => {
  // When
    I.click('활동 만들러 가기');

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

Scenario(
  '#5 모집 활동에 대해 댓글을 남길 수 있다..',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');

    I.amOnPage('특정게시글 링크');
    I.fillField('comment', '참여 하고 싶은데요');
    // Then
    I.see('참여 하고 싶은데요');
  },
);
