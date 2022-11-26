Feature('말하고 첨삭받기 둘러보기');

// Given
beforeEach(({ I }) => {
  I.amOnPage('/speak');
});

Scenario('#1 말하고 첨삭받기 페이지에서 게시된 리스트들을 볼 수 있다.', ({ I }) => {
  // When

  // Then
  I.see('커피숍 데이트 상황');
  I.see('작성자');
  I.see('상황 설명');
});

Scenario(
  '#2 말하고 첨삭받기 페이지에서 게시된 리스트들을 클릭하여 상세 내용을 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');
    // Then
    I.see('제목');
    I.see('작성자');
    I.see('상황 설명');
    I.see('excuse me?');
  },
);

Scenario(
  '#3 말하고 첨삭받기 페이지에서 게시된 리스트들을 클릭하여 상세 내용을 볼 수 있다.',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');
    // Then
    I.see('제목');
    I.see('작성자');
    I.see('상황 설명');
    I.see('excuse me?');
  },
);

Scenario(
  '#4 말하고 첨삭받기 페이지의 개별 등록된 글의 녹음을 들을 수 있다..',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');

    I.click('특정 음성 파일');
    // Then
    I.hear('파일 내용이 재생 됨');
  },
);

Scenario(
  '#5 말하고 첨삭받기 페이지에서 게시된 리스트들을 클릭하여 댓글을 남길 수 있다.',
  ({ I }) => {
  // When
    I.click('특정 게시글 제목');

    I.fillField('댓글 공란');
    // Then

    I.see('내가 남긴 댓글 내용');
  },
);
