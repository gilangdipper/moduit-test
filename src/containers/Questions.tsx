import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import {
  BASE_API_URL,
  ENUM_PATHNAME,
  MENU_MAP,
  PRODUCT_API_URL,
} from '../constants';

import { initialState, reducer } from '../reducer';

import Sidebar from '../components/Sidebar';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';

const Questions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { filter, products, pagination } = state;
  const { pathname } = useLocation();
  let filteredProducts = products;

  if (filter.search !== '') {
    filteredProducts = filteredProducts.filter((product) => product.title.includes(filter.search));
  }

  useEffect(() => {
    const urlApi = `${BASE_API_URL}${PRODUCT_API_URL[ENUM_PATHNAME[pathname]]}`;
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
          <div className="title-header">{MENU_MAP[ENUM_PATHNAME[pathname]]}</div>
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
        <div className="footer-content">
          Copyright &copy; 2021
          {' '}
          <span>PT Moduit Digital Indonesia</span>
          . All rights reserved
        </div>
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
    width: 80vw;

    .header-content {
      display: flex;
      margin-bottom: 18px;

      .title-header {
        width: 70%;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
      }

      .search-header {
        width: 30%;
        padding-right: 30px
      }
    }

    .footer-content {
      font-size: 12px;
      font-weight: 400;
      color: rgb(0,0,0,0.4);
      margin-top: 30px;

      span {
        color: #4987f2;
        font-weight: 600;
      }
    }
  }
`;

export default Questions;
