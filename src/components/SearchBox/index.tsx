import React, {
  ChangeEvent, FC, KeyboardEvent, useRef, useState,
} from 'react';

import { SearchBoxWrapper } from './style';

import { ReactComponent as SearchIcon } from '../../icon/search.svg';

interface ISearchBox {
  updateSearchFilter: (search: string) => void;
}

const SearchBox: FC<ISearchBox> = ({ updateSearchFilter }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState<string>('');

  return (
    <SearchBoxWrapper>
      <input
        placeholder="Search by product name"
        ref={inputRef}
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.keyCode === 13) {
            updateSearchFilter(search);
          }
        }}
      />
      <div
        className="icon-search"
        onClick={() => {
          updateSearchFilter(search);
        }}
        role="presentation"
      >
        <SearchIcon />
      </div>
    </SearchBoxWrapper>
  );
};

export default SearchBox;
