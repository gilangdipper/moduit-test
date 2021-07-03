import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../../logo/logo.svg';

const Sidebar = () => {
  return (
    <QuestionsWrapper>
      <Logo />
    </QuestionsWrapper>
  );
};

const QuestionsWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 25vw;
  height: 100vh;
  background-color: #ffffff;
  align-items: center;
  border-radius: 0 20px 20px 0;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 14px 0px;

  svg {
    margin-top: 24px;
  }
`;

export default Sidebar;
