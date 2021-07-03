import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';

const Questions = () => (
  <QuestionsWrapper>
    <Sidebar />
  </QuestionsWrapper>
);

const QuestionsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f5f8fb;
`;

export default Questions;
