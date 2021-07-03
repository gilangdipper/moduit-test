import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  width: 100%;
  display: flex;

  input {
    width: 100%;
    background-color: #ffffff;
    padding: 6px 10px;
    border-radius: 31px 0 0 31px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-right: none;
    font-size: 12px;

    &::placeholder {
      color: rgb(0, 0, 0, 0.2);
    }

    &:focus-visible,
    &:focus {
      outline: none;
    }
  }

  .icon-search {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 0 31px 31px 0;
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-left: none;
    padding-right: 10px;

    svg {
      g {
        fill: #a1a1a1;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
