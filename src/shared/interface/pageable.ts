export interface Pageable<T> {
  count: number;
  total: number;
  page: number;
  pageCount: number;
  items: T[];
}