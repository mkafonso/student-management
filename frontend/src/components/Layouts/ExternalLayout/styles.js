import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .external-details {
    min-width: 500px;
    height: 96%;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: var(--background);
    background: orange;
    margin: 0 32px;
  }
`;

export const Content = styled.section`
  width: 100%;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
