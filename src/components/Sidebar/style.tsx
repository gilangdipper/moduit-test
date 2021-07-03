import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 25vw;
  height: auto;
  background-color: #ffffff;
  align-items: center;
  border-radius: 0 20px 20px 0;
  box-shadow: rgb(10 80 161 / 30%) 0px 3px 14px 0px;

  svg {
    margin: 40px 0 68px 0;
  }

  .menu-item {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    .menu-icon {
      width: 25%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .menu-text {
      width: 75%;
      text-align: left;
      padding-left: 8px;
      font-size: 14px;
      color: #a2a2a2;
    }

    &.active {
      .menu-text {
        font-weight: bold;
        color: #5c5c5c;
        border-right: 4px solid #044ea0;
      }
    }
  }
`;
