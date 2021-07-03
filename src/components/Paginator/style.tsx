import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  display: block;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: rgb(10 80 161 / 30%) 0px 3px 14px 0px;
  background-color: #ffffff;
`;

export const TableWrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      font-size: 13px;
      font-weight: 500;
      border-bottom: 1px solid rgb(0, 0, 0, 0.2);

      &:first-child {
        border-bottom: 2px solid rgb(0, 0, 0, 0.2);
      }

      &:last-child {
        border: none;
      }
    }

    th {
      font-size: 13px;
      color: rgb(0,0,0,0.4);
      font-weight: 500;
      padding-bottom: 8px;
    }

    td {
      padding: 8px 0;
      vertical-align: top;
    }
  }

  ul {
    &.tags-wrapper {
      margin: 0;
      text-align: left;

      li {
        &::marker {
          color: #4987f2;
          font-size: 18px;
          line-height: 14px
        }
      }
    }
  }
`;

export const PaginationConfigWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;

  .page-indicator {
    width: 50%;
    display: flex;
  }

  .products-number {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
