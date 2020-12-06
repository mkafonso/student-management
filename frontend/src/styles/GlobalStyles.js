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

  input,textarea {
    font-size: 16px;
  }

  span, p ,a, svg {
    color: var(----secondary);
  }

  .Toastify__toast--success {
    background: var(--terciary) !important;
  }

  .css-2b097c-container {
    width: 450px !important;
    min-width: 450px !important;
  }

  .css-yk16xz-control {
    width: 450px !important;
    min-width: 450px !important;
    border: 1px solid var(--secondary) !important;
    border-radius: 5px;
    padding: 3px 0;
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
