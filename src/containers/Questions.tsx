import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import SearchBox from '../components/SearchBox';

import { MENU_MAP } from '../config';

const Questions = () => (
  <QuestionsWrapper>
    <Sidebar />
    <div className="main-content">
      <div className="header-content">
        <div className="title-header">{MENU_MAP.QUESTION_ONE}</div>
        <div className="search-header">
          <SearchBox />
        </div>
      </div>
      <div className="body-content" />
      <div className="footer-content" />
    </div>
  </QuestionsWrapper>
);

const QuestionsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f5f8fb;

  .main-content {
    display: block;
    padding: 32px 24px;
    width: 75vw;

    .header-content {
      display: flex;

      .title-header {
        width: 60%;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
      }

      .search-header {
        width: 40%;
      }
    }
  }
`;

export default Questions;
