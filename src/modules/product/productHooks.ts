import type { UseMutationOptions, UseQueryOptions } from 'react-query';
import { useMutation, useQuery } from 'react-query';
import { queryKeys } from '@/shared/constant';
import { getProduct, updateProduct } from './productServices';
import type {
  GetProductRequest,
  ProductResponse,
  UpdateProductRequest,
} from './productTypes';

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

export const useUpdateProduct = (
  options?: UseMutationOptions<unknown, unknown, UpdateProductRequest>,
) => {
  return useMutation(
    [queryKeys.updateProduct],
    (payload: UpdateProductRequest) => updateProduct(payload),
    options,
  );
};
