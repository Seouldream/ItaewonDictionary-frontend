import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    margin: 0;
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
    color: ${((props) => props.theme.text.primary)};
    background-color: ${((props) => props.theme.colors.background)};
    font-size: ${((props) => props.theme.size.default)};
    max-width: 2560px;
    //min-width: 720px;
    min-height: 100vh;
}
a {
    color: ${((props) => props.theme.text.primary)};
    text-decoration: none;
}
ul {
    list-style: none;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;
