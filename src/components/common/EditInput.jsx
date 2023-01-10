import styled from 'styled-components';

const EditInput = styled.input`
  width: 50%;
  padding: 1.5em;
  border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.border)};
  color: ${((props) => props.theme.text.gray)};
  & + & {
    margin-top: 16px;
  }
  
  :focus {
    outline: none;
    border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.primary)};
  }
`;

export default EditInput;
