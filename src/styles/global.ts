import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
   font-family: 'Nunito';
   background: ${props => props.theme.background}
}
`