import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SidebarWrapper } from './style';

import { ReactComponent as Logo } from '../../logo/logo.svg';
import Q1 from '../../icon/Q1.svg';
import Q2 from '../../icon/Q2.svg';

import { ENUM_PATHNAME, MENU_MAP } from '../../constants';

const LOGO_MENU_MAP = {
  QUESTION_ONE: Q1,
  QUESTION_TWO: Q2,
};

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <SidebarWrapper>
      <Logo />

      {Object.keys(MENU_MAP).map((menuKey) => {
        const activeClass = menuKey === ENUM_PATHNAME[pathname]
          ? 'active' : '';
        return (
          <div key={menuKey} className={`menu-item ${activeClass}`}>
            <Link to={ENUM_PATHNAME[menuKey]}>
              <div className="menu-icon">
                <img alt="menu" src={LOGO_MENU_MAP[menuKey]} />
              </div>
              <div className="menu-text">
                {MENU_MAP[menuKey]}
              </div>
            </Link>
          </div>
        );
      })}
    </SidebarWrapper>
  );
};

export default Sidebar;
