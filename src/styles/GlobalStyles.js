import { createGlobalStyle } from "styled-components";

const normalize = `
  /*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */html{box-sizing:border-box}*,::after,::before{box-sizing:inherit}:root{-moz-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'}hr{height:0}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,'Liberation Mono',Menlo,Courier,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{padding:0}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}
`;

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    font-family: ${(props) => props.theme.font.secondary};
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: normal;
  }

  h1, h2 {
    font-family: ${(props) => props.theme.font.primary};
  }

  h1 {
    ${(props) => props.theme.font_size.xlarge};
  }

  h2 {
    ${(props) => props.theme.font_size.larger};
  }

  h3 {
    ${(props) => props.theme.font_size.large};
  }

  p {
    ${(props) => props.theme.font_size.regular};
    color: ${(props) => props.theme.color.black.light};
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    h1 {
      ${(props) => props.theme.font_size.larger};
    }

    h2 {
      ${(props) => props.theme.font_size.large};
    }

    h3 {
      ${(props) => props.theme.font_size.regular};
    }

    p {
      ${(props) => props.theme.font_size.small};
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  .site-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    padding: 30px 20px;
    font-family: Prata, serif;
    background-color: #8bd8ed;
    color: black;
    font-size: 1.5rem;
  }
  .site-navigation {
    font-size: 1.2rem;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    ul li {
      display: inline-block;
      margin-left: 20px;
    }
    a {
      color: rgba(0,0,0,0.6);
      text-decoration: none;
      &:hover {
        color: rgba(0,0,0,0.8);
      }
    }
    a[aria-current="page"] {
      color: rgba(0,0,0,1)
    }
    .menu-trigger {
      display: none;
      font-size: 24px;
      background: none;
      border: none;
      color: white;
      padding: 0;
      cursor: pointer;
    }
    @media (max-width: $breakpoint-lg) {
      .menu-trigger,
      .icon-menu-line {
        display: flex;
      }
  
      .icon-menu-close {
        display: none;
      }
      .menu-trigger.is-active {
        .icon-menu-line {
          display: none;
        }
        .icon-menu-close {
          display: flex;
        }
      }
      .menu-trigger.is-active + ul {
        display: block;
      }
      ul {
        display: none;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1;
        width: 100%;
        max-width: 320px;    
        border-radius: 0 0 0 12px;
        overflow: hidden;
      }
      ul li {
        display: block;
        margin-left: 0;
      }
      a {
        display: block;
        padding: 20px;
      }
    }
  }
  .container {
    margin: 0 auto;
    max-width: 1240px;
    padding: 0 20px;
  }
  .site-logo {
    font-weight: bold;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
    @media (max-width: $breakpoint-lg) {
      font-size: 20px;
    }
  }
`;

export default GlobalStyles;
