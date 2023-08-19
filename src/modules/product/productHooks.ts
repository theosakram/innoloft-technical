import type { UseQueryOptions } from 'react-query';
import { useQuery } from 'react-query';
import { queryKeys } from '@/shared/constant';
import { getProduct } from './productServices';
import type { GetProductRequest, ProductResponse } from './productTypes';

export const useGetProduct = (
  payload: GetProductRequest,
  options?: UseQueryOptions<
    ProductResponse,
    unknown,
    ProductResponse,
    Array<string | GetProductRequest>
  >,
) => {
  return useQuery(
    [queryKeys.getProduct, payload],
    () => getProduct(payload),
    options,
  );
};
