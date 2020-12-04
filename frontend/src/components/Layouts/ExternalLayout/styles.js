import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .external-details {
    min-width: 500px;
    max-width: 500px;
    height: 96%;
    border-radius: 25px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: var(--terciary);
    margin: 0 32px;
  }

  .slider-item {
    height: 92vh !important;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 25px;
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  margin: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
