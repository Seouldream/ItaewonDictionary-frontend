import styled from 'styled-components';

const Item = styled.li`
/* padding: 0;
margin: 0; */
`;

const Wrapper = styled.button`
    height: 20em;
    width: 15em;
    margin: 0.5em;
    padding: 4em 1.5em;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: rgb(0 0 0) 3px 3px 7px 2px;
    background: url(https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/icons8-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%86%B8%E1%84%8B%E1%85%B4-%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3-100.png) 5% 10% / 4em no-repeat, url(https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/icons8-%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A5%E1%86%B8%E1%84%8B%E1%85%B4-%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%89%E1%85%B3-100.png) 95% 90% / 4em no-repeat rgb(255, 255, 255);
    text-align: start;

    p {
      font-size: 1.5em;
      color:black;
    }
`;
export default function Category({
  category, navigateToCategoryDetails,
}) {
  const handleClickCategory = () => {
    // ToDo 클릭시 ????
    navigateToCategoryDetails(category.id);
  };
  return (
    <Item>
      <Wrapper type="button" onClick={handleClickCategory}>
        <p>{category.name}</p>
      </Wrapper>
    </Item>
  );
}
