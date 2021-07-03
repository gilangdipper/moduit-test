import React from 'react';

import { SearchBoxWrapper } from './style';

import { ReactComponent as SearchIcon } from '../../icon/search.svg';

function SearchBox() {
  return (
    <SearchBoxWrapper>
      <input placeholder="Search by product name" />
      <div className="icon-search"><SearchIcon /></div>
    </SearchBoxWrapper>
  );
}

export default SearchBox;
