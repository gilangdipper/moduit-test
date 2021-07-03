import React, { FC } from 'react';

import {
  PaginationConfigWrapper,
  PaginatorWrapper,
  TableWrapper,
} from './style';
import ProductsNumber from './ProductsNumber';
import pagination from './helper/pagination';

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
  const { products, numberOfPage, numberOfProducts } = props;
  const { data } = pagination(products, numberOfPage, numberOfProducts);

  return (
    <PaginatorWrapper>
      <TableWrapper>
        <table>
          <tr>
            {TABLE_HEADER_MAP.map((header) => (
              <th>{header}</th>
            ))}
          </tr>

          {data.map((product: IProduct) => (
            <tr>
              <td>{product.title}</td>
              <td>{product.id}</td>
              <td>{product.category || '-'}</td>
              <td>{product.description}</td>
              <td>
                <ul className="tags-wrapper">
                  {(product.tags || []).map((tag) => (
                    <li>{tag}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </table>
      </TableWrapper>

      <PaginationConfigWrapper>
        <div className="page-indicator">
          <div className="pagination">
            <div className="page-number">&lang;</div>
            <div className="page-number active">1</div>
            <div className="page-number">2</div>
            <div className="page-number">3</div>
            <div className="page-number">4</div>
            <div className="page-number">5</div>
            <div className="page-number">6</div>
            <div className="page-number">&rang;</div>
          </div>
        </div>
        <div className="products-number">
          <ProductsNumber />
        </div>
      </PaginationConfigWrapper>
    </PaginatorWrapper>
  );
};

export default Paginator;
