import React, { FC } from 'react';

import {
  PaginationConfigWrapper,
  PaginatorWrapper,
  TableWrapper,
} from './style';
import { pagination } from './helper';

import ProductsNumber from './ProductsNumber';
import PaginationNumber from './PaginationNumber';

import { IProduct } from '../../interfaces';

interface IPaginator {
  products: IProduct[],
  numberOfPage: number,
  numberOfProducts: number,
  updatePageNumber: (pageNumber: number) => void,
  updateProductsNumber: (productsNumber: number) => void,
}

const TABLE_HEADER_MAP = [
  'Product Name',
  'Product Code',
  'Category',
  'Description',
  'Tags',
];

const Paginator: FC<IPaginator> = (props) => {
  const {
    products, numberOfPage, numberOfProducts, updatePageNumber,
  } = props;
  const { data, total_pages } = pagination(products, numberOfPage, numberOfProducts);

  return (
    <PaginatorWrapper>
      <TableWrapper>
        <table>
          <tbody>
            <tr>
              {TABLE_HEADER_MAP.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>

            {data.map((product: IProduct) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.id}</td>
                <td>{product.category || '-'}</td>
                <td>{product.description}</td>
                <td>
                  <ul className="tags-wrapper">
                    {(product.tags || []).map((tag, idx) => {
                      const key = `${tag}${idx}`;
                      return (
                        <li key={key}>{tag}</li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>

      <PaginationConfigWrapper>
        <div className="page-indicator">
          <PaginationNumber
            numberOfPage={numberOfPage}
            total_pages={total_pages}
            updatePageNumber={updatePageNumber}
          />
        </div>
        <div className="products-number">
          <ProductsNumber />
        </div>
      </PaginationConfigWrapper>
    </PaginatorWrapper>
  );
};

export default Paginator;
