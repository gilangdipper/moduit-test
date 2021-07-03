import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const PAGE_NUMBER_MAP = [2, 4, 8, 10];

const ProductsNumberWrapper = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;

  p {
    display: flex;
    align-items: center;
    margin: 0 8px 0 0;
    font-size: 12px;
    font-weight: 700;
    color: #044ea0;
  }

  button {
    border: 1px solid rgb(0, 0, 0, 0.2);
    border-radius: 29px;
    background-color: #ffffff;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 12px;
    color: rgb(0, 0, 0, 0.4);
    cursor: pointer;
  }

  .dropup-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 40px;
    bottom: 30px;
    right: 0px;
    z-index: 1;
    box-shadow: rgb(10 80 161 / 30%) 0px 3px 14px 0px;
    border-radius: 4px;
    border: 1px solid rgb(0, 0, 0, 0.2);

    ${(props) => props.visible && `
      display: block;
    `}

    .dropup-item {
      padding: 4px 0;
      font-size: 12px;
    }
  }
`;

const ProductsNumber = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const handleClickOutside = (event) => {
    if (
      wrapperRef
      && wrapperRef.current
      && !wrapperRef.current.contains(event.target)
    ) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ProductsNumberWrapper
      ref={wrapperRef}
      visible={visible}
    >
      <p>Show</p>
      <button
        type="button"
        onClick={() => setVisible(!visible)}
      >
        8 &or;
      </button>
      <div className="dropup-content">
        {PAGE_NUMBER_MAP.map((pageNumber) => (
          <div
            className="dropup-item"
          >
            {pageNumber}
          </div>
        ))}
      </div>
    </ProductsNumberWrapper>
  );
};

export default ProductsNumber;
