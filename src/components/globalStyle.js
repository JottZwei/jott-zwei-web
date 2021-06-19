import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

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
    font-family: 'Open Sans', sans-serif;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    touch-action: manipulation;
    scroll-padding-top: 80px;
    -webkit-overflow-scrolling: touch;
    scrollbar-color: #006464;
    background: var(--primary-color);
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


