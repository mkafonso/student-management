import styled from "styled-components";

export const Container = styled.div`
  .page_title {
    margin-bottom: 25px;
  }

  .MuiTableCell-head {
    background: var(--secondary) !important;
    color: white !important;
  }

  .MuiTableCell-body {
    color: var(--secondary) !important;
  }

  > a {
    display: inline-block;
  }

  .add-partners_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    background: var(--terciary);
    color: var(--background);
    cursor: pointer;

    margin: 15px 0;
    height: 45px;
    padding: 10px 25px;
    border-radius: 5px;

    &:hover {
      filter: brightness(95%);
    }
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
  }

  .salvar-partner,
  .cancel-partner {
    margin-top: 15px;
    width: 150px;
    height: 45px;
    border-radius: 5px;
    background: var(--success);
    color: var(--background);
    font-size: 18px;
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
  }

  .cancel-partner {
    background: var(--error);
    color: var(--background);
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 290px;

  .form-group {
    margin-top: 40px;

    display: flex;
    justify-content: space-between;
    padding: 50px 40px;
  }

  .input-group {
    display: flex;
    flex-direction: column;

    > input {
      min-width: 450px;
      width: 100%;
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
`;
