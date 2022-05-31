import { Paginate } from '../interfaces/paginate.interface';

export function buildPaginationCriteria(paginate: Partial<Paginate<any>>) {
  const { take, page, direction, key } = paginate;
  let criteria = {};

  if (paginate.page && paginate.take) {
    criteria = { ...criteria, take: +take, skip: +take * (+page - 1) };
  }

  if (direction && key) {
    criteria = { ...criteria, orderBy: { [key]: direction } };
  }
  return criteria;
}
