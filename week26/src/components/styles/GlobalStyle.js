import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  /* GmarketSans(https://noonnu.cc/font_page/366) */
  @font-face {
    font-family: 'Gmarket Sans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gmarket Sans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
      format('woff');
    font-weight: 300;
    font-style: normal;
  }
    
  @font-face {
    font-family: 'Gmarket Sans';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff')
      format('woff');
    font-weight: 700;
    font-style: normal;
  }

  /* CSS Reset & Global Styles */
  * {
    box-sizing: border-box;
    word-break: keep-all;
  }

  html {
    font-family: ${({ theme }) => theme.fontFamily.sub};
    font-size: 14px;
    font-weight: 400;
    overflow-y: scroll;
    background-color: #f9f9f9;
  }

  body {
    margin: 0;
  }

  /* #root에 대한 스타일 */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    color: #494949;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-weight: 500;
  }

  h1, h2, h3, h4, button {
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-weight: 500;
  }
`;

export default GlobalStyle;
