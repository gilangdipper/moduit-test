import productsDummy from '../dummy';

import { IProduct } from '../interfaces';

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

export const initialState: IState = {
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

export const reducer = (state: IState, action: TAction) => {
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
