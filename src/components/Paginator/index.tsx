import React from 'react';

import { products } from './dummy';
import { PaginatorWrapper } from './style';
import { IProduct } from './interface';

const TABLE_HEADER_MAP = [
  'Product Name',
  'Product Code',
  'Category',
  'Description',
  'Tags',
];

const Paginator = () => {
  const productData: IProduct[] = products.slice(0, 8);
  return (
    <PaginatorWrapper>
      <div className="table-wrapper">
        <table>
          <tr>
            {TABLE_HEADER_MAP.map((header) => (
              <th>{header}</th>
            ))}
          </tr>

          {productData.map((product: IProduct) => (
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
      </div>
    </PaginatorWrapper>
  );
};

export default Paginator;
