import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
@import url("//hello.myfonts.net/count/3d92dc");


@font-face {
  font-family: "CodeNext-Regular";
  src: url('webFonts/CodeNextRegular/font.woff2') format('woff2'), url('webFonts/CodeNextRegular/font.woff') format('woff');
}

  :root {
    --primary-color: #010e1e;
    --secondary-color: #F26F71;
    --tertiary-color: #006464;
    --white: #FFFAFF;
    font-size: 18px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 100;
    font-family: 'CodeNext-Regular', sans-serif;
  }

  html {
    font-family: 'CodeNext-Regular', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    scroll-padding-top: 80px;
    -webkit-overflow-scrolling: touch;
  }

  body {
    background: var(--primary-color);
    scrollbar-color: #006464;
    font-weight: 200;
  }

  a {
    color: white;
    text-decoration: none;
  }

  span {
    line-height: 1.6rem;
  }


  body {
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #010e1e;
}

::-webkit-scrollbar-thumb {
  background: #006464;
  border-radius: 30px;
}

::-webkit-scrollbar-thumb:hover {
  background: #112836;
}

a[aria-current="page"] {
  color: #F26F71;
}   

@media screen and (max-width: 1100px) {
  a[aria-current="page"] {
  color: #010e1e;
}}


`


