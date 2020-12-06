import styled from "styled-components";

export const Container = styled.div`
  .page_title {
    margin-bottom: 25px;
  }

  .buttons-container {
    display: flex;
    justify-content: flex-end;
    padding: 20px 0;
  }

  .salvar-student,
  .cancel-student {
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

  .cancel-student {
    background: var(--error);
    color: var(--background);
    margin-left: 15px;
  }

  .user-actions {
    display: flex;
    align-items: center;

    li {
      list-style: none;
      font-size: 22px;
      cursor: pointer;

      & + li {
        margin-left: 20px;
      }
    }
  }
`;

export const Filters = styled.div`
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .add-student_btn {
    width: 200px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--terciary);
    color: var(--background);
    font-size: 18px;
    cursor: pointer;

    &:hover {
      filter: brightness(95%);
    }
  }

  > .status {
    width: 400px;
    height: 45px;
    background: orange;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > input {
    width: 300px;
    height: 45px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 18px;

    &:focus {
      border: 1px solid var(--terciary);
    }
  }
`;

export const MainContent = styled.div`
  margin: 35px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 210px;
  padding: 20px;

  .upload-img {
    width: 200px;
    height: 200px;
    border: 2px solid var(--error);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 197px;
      height: 196px;
      object-fit: contain;
    }
  }

  .upload-link {
    color: var(--error);
    text-decoration: underline;
    padding: 8px 0 14px 0;
    display: inline-block;
    cursor: pointer;
  }

  #image-upload[type="file"] {
    display: none;
  }

  .form-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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

  .hometown {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  .birthday-input {
    min-width: 450px;
    width: 100%;
    height: 45px !important;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    padding: 3px 10px;
    margin: 20px 0;

    &:focus {
      border: 2px solid var(--terciary) !important;
    }
  }

  .gender-input {
    margin-bottom: 20px;
  }
`;

export const DocumentContent = styled.div`
  margin: 35px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 210px;
  padding: 20px;

  .form-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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

export const StudiesContent = styled.div`
  margin: 35px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 210px;
  padding: 20px;

  .period {
    margin-top: 15px;
  }

  .course {
    margin-bottom: 15px;
  }

  .form-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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

export const HealthContent = styled.div`
  margin: 35px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 210px;
  padding: 20px;

  .form-group {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
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

  .textarea-group {
    width: 100%;
  }

  .historyDisease {
    margin-top: 15px;
    width: 100%;
    min-height: 80px;
    padding: 10px;
    border: 1px solid var(--secondary);
    border-radius: 5px;

    &:focus {
      border: 1px solid var(--terciary);
    }
  }
`;

export const Content = styled.div`
  margin: 35px 0;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  min-height: 290px;

  .MuiTableCell-head {
    background: var(--secondary) !important;
    color: white !important;
  }

  .MuiTableCell-body {
    color: var(--secondary) !important;
    max-height: 50px !important;
  }

  .user-img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

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

  .upload-img {
    width: 200px;
    height: 200px;
    background: var(--error);
    border-radius: 5px;
  }

  .upload-link {
    color: var(--error);
    text-decoration: underline;
    padding: 8px 0 14px 0;
    display: inline-block;
  }
`;
