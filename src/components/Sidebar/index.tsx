import React from 'react';

import { SidebarWrapper } from './style';

import { ReactComponent as Logo } from '../../logo/logo.svg';
import Q1 from '../../icon/Q1.svg';
import Q2 from '../../icon/Q2.svg';

import { MENU_MAP } from '../../constants';

const LOGO_MENU_MAP = {
  QUESTION_ONE: Q1,
  QUESTION_TWO: Q2,
};

const Sidebar = () => (
  <SidebarWrapper>
    <Logo />

    {Object.keys(MENU_MAP).map((menuKey) => {
      const activeClass = MENU_MAP[menuKey] === MENU_MAP.QUESTION_ONE
        ? 'active' : '';
      return (
        <div key={menuKey} className={`menu-item ${activeClass}`}>
          <div className="menu-icon">
            <img alt="menu" src={LOGO_MENU_MAP[menuKey]} />
          </div>
          <div className="menu-text">
            {MENU_MAP[menuKey]}
          </div>
        </div>
      );
    })}
  </SidebarWrapper>
);

export default Sidebar;
