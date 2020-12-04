import styled from "styled-components";

export const Container = styled.aside`
  grid-area: sidebar;
  position: fixed;
  background: white;
  height: 100vh;

  .sidebar-title {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sidebar-footer {
    font-size: 14px;
    bottom: 15px;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-item {
    padding-bottom: 30px;
    padding-left: 16px;
    cursor: pointer;
  }

  .menu-item_option {
    display: flex;
    align-items: center;
  }

  .menu-item_label {
    font-size: 16px;
    cursor: pointer;
    margin-left: 10px;
  }

  .exit {
    margin-top: 15px;
  }
`;

export const MenuOptions = styled.div`
  margin-top: 20px;
`;
