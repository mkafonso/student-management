import styled from "styled-components";

export const Container = styled.header`
  background: var(--terciary);
  height: 72px;
  width: 100vw;
  color: white;

  display: flex;
  justify-content: flex-end;
  padding: 0 10px;

  .header_profile {
    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
      width: 50px;
      height: 50px;
      border: 2px solid var(--background);
      border-radius: 50%;
    }

    > span {
      margin-left: 10px;
      font-size: 16px;
    }
  }
`;
