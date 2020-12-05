import styled from "styled-components";

export const LoginForm = styled.form`
  > h2 {
    margin: 20px 0;
    text-align: center;
    color: var(--secondary);
  }

  .form-group {
    display: flex;
    flex-direction: column;

    > input {
      width: 350px;
      height: 45px;
      border: 1px solid var(--secondary);
      border-radius: 5px;
      padding: 3px 10px;

      &:focus {
        border: 1px solid var(--terciary);
      }

      & + input {
        margin-top: 15px;
      }
    }
  }

  .login-btn {
    margin-top: 15px;
    width: 350px;
    height: 45px;
    border-radius: 5px;
    background: var(--terciary);
    color: var(--background);
    font-size: 18px;
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
  }

  .google {
    background: #4285f4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      margin-right: 10px;
    }
  }

  > span {
    color: var(--secondary);
    margin-top: 15px;
    display: inline-block;

    > a {
      color: var(--terciary);
      margin-left: 8px;
    }
  }
`;
