import { defaultURL } from '@/shared/constant';
import type { GetProductRequest, UpdateProductRequest } from './productTypes';

export const getProduct = async (payload: GetProductRequest) => {
  return (await fetch(`${defaultURL}/product/${payload.id}`)).json();
};

export const updateProduct = async (payload: UpdateProductRequest) => {
  return fetch(`${defaultURL}/product/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload.body),
  });
};
