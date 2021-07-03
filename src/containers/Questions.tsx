import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import productsDummy from './dummy';

import { IProduct } from '../interfaces';
import { BASE_API_URL, MENU_MAP, PRODUCT_API_URL } from '../constants';

import Sidebar from '../components/Sidebar';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';

interface IState {
  error: string,
  filter: {
    search: string,
  },
  isLoading: boolean,
  pagination: {
    numberOfPage: number,
    numberOfProducts: number,
  },
  products: IProduct[],
}

const initialState: IState = {
  error: '',
  filter: {
    search: '',
  },
  isLoading: true,
  pagination: {
    numberOfPage: 1,
    numberOfProducts: 8,
  },
  products: productsDummy,
};

type TAction =
  | { type: 'FETCH_PRODUCTS_SUCCESS', payload: { products: IProduct[] } }
  | { type: 'FETCH_PRODUCTS_ERROR', payload: { error: string } }
  | { type: 'UPDATE_PAGINATION', payload: { numberOfPage?: number, numberOfProducts?: number } }
  | { type: 'UPDATE_FILTER', payload: { search: string } };

const reducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
      };
    }
    case 'FETCH_PRODUCTS_ERROR': {
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
    case 'UPDATE_FILTER': {
      return {
        ...state,
        filter: {
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
  const { filter, products, pagination } = state;
  const { pathname } = useLocation();
  let filteredProducts = products;

  if (filter.search !== '') {
    filteredProducts = filteredProducts.filter((product) => product.title.includes(filter.search));
  }

  useEffect(() => {
    const urlApi = `${BASE_API_URL}${PRODUCT_API_URL[pathname]}`;
    axios
      .get(urlApi)
      .then((response) => {
        dispatch({
          type: 'FETCH_PRODUCTS_SUCCESS',
          payload: { products: response.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_PRODUCTS_ERROR',
          payload: { error },
        });
      });
  }, [pathname]);

  return (
    <QuestionsWrapper>
      <Sidebar />
      <div className="main-content">
        <div className="header-content">
          <div className="title-header">{MENU_MAP.QUESTION_ONE}</div>
          <div className="search-header">
            <SearchBox
              updateSearchFilter={(search: string) => {
                dispatch({ type: 'UPDATE_FILTER', payload: { search } });
              }}
            />
          </div>
        </div>
        <div className="body-content">
          <Paginator
            products={filteredProducts}
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
