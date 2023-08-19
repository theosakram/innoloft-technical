import { defaultURL } from '@/shared/constant';
import type { GetProductRequest } from './productTypes';

export const getProduct = async (payload: GetProductRequest) => {
  return (await fetch(`${defaultURL}/product/${payload.id}`)).json();
};
