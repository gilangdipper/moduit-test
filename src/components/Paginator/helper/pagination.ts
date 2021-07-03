import { IProduct } from '../../../interfaces';

const pagination = (
  items: IProduct[],
  current_page: number,
  per_page_items: number,
): {
  page: number,
  per_page: number,
  pre_page: number | null,
  next_page: number | null,
  total: number,
  total_pages: number,
  data: IProduct[],
} => {
  const page = current_page || 1;
  const per_page = per_page_items || 10;
  const offset = (page - 1) * per_page;

  const paginatedItems = items.slice(offset).slice(0, per_page_items);
  const total_pages = Math.ceil(items.length / per_page);

  return {
    page,
    per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: (total_pages > page) ? page + 1 : null,
    total: items.length,
    total_pages,
    data: paginatedItems,
  };
};

export default pagination;
