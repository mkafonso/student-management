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
`;

export const Content = styled.div`
  max-width: 1100px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .page_title {
    margin-bottom: 10px;
  }

  .box-title {
    text-align: left;
    width: 100%;
    padding: 22px;
    margin-bottom: -170px !important;
  }

  .box-gastos {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 500px;
    height: 290px;
  }

  .documentos {
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 100%;
    height: 290px;
    margin: 25px 0 40px 0;
  }
`;

export const StudentStatus = styled.div`
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 500px;
  height: 290px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .recharts-legend-wrapper {
    bottom: 10px !important;
  }
`;
