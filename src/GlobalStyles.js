import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    scroll-behavior: smooth;
}
body{
    font-family: 'Ubuntu', sans-serif;
}
`;
