import React, { useReducer } from 'react';
import styled from 'styled-components';

import productsDummy from './dummy';

import { IProduct } from '../interfaces';

import Sidebar from '../components/Sidebar';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';

import { MENU_MAP } from '../config';

interface IState {
  products: IProduct[],
  isLoading: boolean,
  error: string,
  pagination: {
    numberOfPage: number,
    numberOfProducts: number,
  },
}

const initialState: IState = {
  products: productsDummy,
  isLoading: true,
  error: '',
  pagination: {
    numberOfPage: 1,
    numberOfProducts: 8,
  },
};

type TAction =
  | { type: 'FETCH_PRODUCTS_SUCCESS', payload: { products: IProduct[] } }
  | { type: 'FETCH_PRODUCTS_FAIL', payload: { error: string } }
  | { type: 'UPDATE_PAGINATION', payload: { numberOfPage?: number, numberOfProducts?: number } };

const reducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
      };
    }
    case 'FETCH_PRODUCTS_FAIL': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case 'UPDATE_PAGINATION': {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

const Questions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products, pagination } = state;
  return (
    <QuestionsWrapper>
      <Sidebar />
      <div className="main-content">
        <div className="header-content">
          <div className="title-header">{MENU_MAP.QUESTION_ONE}</div>
          <div className="search-header">
            <SearchBox />
          </div>
        </div>
        <div className="body-content">
          <Paginator
            products={products}
            numberOfPage={pagination.numberOfPage}
            numberOfProducts={pagination.numberOfProducts}
            updatePageNumber={(numberOfPage) => {
              dispatch({
                type: 'UPDATE_PAGINATION',
                payload: { numberOfPage },
              });
            }}
            updateProductsNumber={(numberOfProducts) => {
              dispatch({
                type: 'UPDATE_PAGINATION',
                payload: { numberOfProducts },
              });
            }}
          />
        </div>
        <div className="footer-content" />
      </div>
    </QuestionsWrapper>
  );
};

const QuestionsWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  background-color: #f5f8fb;

  .main-content {
    display: block;
    padding: 32px 24px;
    width: 75vw;

    .header-content {
      display: flex;
      margin-bottom: 18px;

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
