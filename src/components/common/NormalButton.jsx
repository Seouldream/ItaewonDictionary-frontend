import styled from 'styled-components';

const NormalButton = styled.button`
display: block;
font-size: 1rem;
border: none;
border-radius: 1em;
width:5em;
height: 2.7em;
padding: 0.3em;
cursor: pointer;

color: ${((props) => props.theme.text.white)};
background-color: #00C641;

font-size: ${((props) => props.theme.size.default)};

:hover {
  //color: black
}

:active {
  color: ${((props) => props.theme.text.white)};
  background-color: ${((props) => props.theme.colors.active)};
}

:disabled {
  color: ${((props) => props.theme.text.white)};
  background-color: ${((props) => props.theme.colors.inactive)};
}
`;

export default NormalButton;
