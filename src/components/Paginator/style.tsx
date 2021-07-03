import styled from 'styled-components';

export const PaginatorWrapper = styled.div`
  display: block;
  padding: 14px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 14px 0px;
  background-color: #ffffff;

  .table-wrapper {
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
  }
`;
