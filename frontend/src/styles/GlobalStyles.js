import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Assistant', Arial, Helvetica, sans-serif;
  }

  *::selection {
    background: #FA617B;
    color: #f3f5f8;
  }

  html {
    min-height: 100%;
    background: var(--background);
  }

  button, input {
    border: 0;
    background: none;
    color: var(--primary);
    transition: color .2s ease-out;
  }

  a {
    text-decoration: none;
  }

  span, p ,a, svg {
    color: var(----secondary);
  }

  .Toastify__toast--success {
    background: var(--terciary) !important;
  }

  :root {
    --background: #f3f5f8;

    --primary: #1b1f23;
    --secondary: #4D4D4D;
    --terciary: #0366d6;

    --success: #7cd27b;
    --error: #f9826c;
    --pending: #e59d27;

/* ==============================
    Deletar as cores de baixo? ...talvez?
*/

    --primary: #1b1f23;
    --secondary: #4D4D4D;
    --terciary: #f9826c;

    --success: #7cd27b;
    --error: #f9826c;
    --pending: #e59d27;
  }
`;
