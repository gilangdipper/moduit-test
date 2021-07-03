import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { rangeNumber } from './helper';

const PaginationNumberWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 29px;

  .page-number {
    font-size: 12px;
    font-weight: 600;
    padding: 6px 12px;
    color: rgb(0, 0, 0, 0.4);
    cursor: pointer;

    &:first-child,
    &:last-child {
      color: #000000;
    }

    &.active {
      color: #000000;
      font-weight: 700;
      border-bottom: 2px solid #044ea0;
    }
  }
`;

interface IPaginationNumber {
  numberOfPage: number,
  total_pages: number,
  updatePageNumber: (pageNumber: number) => void,
}

const PaginationNumber: FC<IPaginationNumber> = (props) => {
  const [listNumber, setListNumber] = useState<number[]>([]);
  const { numberOfPage, updatePageNumber, total_pages } = props;

  useEffect(() => {
    let range: number [] = listNumber;

    if (listNumber.length <= 0) {
      range = rangeNumber(1, total_pages > 6 ? 6 : total_pages);
    } else {
      let lastNumber = listNumber[listNumber.length - 1];
      let firstNumber = listNumber[0];

      if ((lastNumber - numberOfPage) < 1 && (lastNumber + 1) <= total_pages) {
        lastNumber += 1;
        firstNumber = lastNumber - 5;
      } else if ((numberOfPage - firstNumber) === 0 && ((numberOfPage - 1) >= 1)) {
        firstNumber -= 1;
        lastNumber = firstNumber + 5;
      }
      range = rangeNumber(firstNumber, lastNumber);
    }

    setListNumber(range);
  }, [numberOfPage]);

  return (
    <PaginationNumberWrapper>
      <div
        className="page-number"
        onClick={() => {
          updatePageNumber(numberOfPage - 1);
        }}
        role="presentation"
      >
        &lang;
      </div>
      {listNumber.map((numberPage) => (
        <div
          className={`page-number ${numberPage === numberOfPage && 'active'}`}
          onClick={() => {
            updatePageNumber(numberPage);
          }}
          key={numberPage}
          role="presentation"
        >
          {numberPage}
        </div>
      ))}
      <div
        className="page-number"
        onClick={() => {
          updatePageNumber(numberOfPage + 1);
        }}
        role="presentation"
      >
        &rang;
      </div>
    </PaginationNumberWrapper>
  );
};

export default PaginationNumber;
