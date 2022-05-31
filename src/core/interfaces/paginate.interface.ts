enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export interface Paginate<T> {
  page: number;
  take: number;
  direction: SortDirection;
  key: keyof T;
}
