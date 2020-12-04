import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  padding: 32px;

  > svg {
    width: 400px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 100px;
    font-weight: bold;
    color: var(--secondary);
  }

  > h2 {
    font-weight: bold;
    color: var(--secondary);
    margin: 10px 0px;
  }

  > p {
    font-weight: bold;
    color: var(--secondary);
  }
`;
