import { useQuery, UseQueryOptions } from 'react-query';
import { queryKeys } from '@/shared/constant';
import { getTRL } from './trlService';
import { TRLResponse } from './trlTypes';

export const useGetTRL = (
  options?: UseQueryOptions<TRLResponse, unknown, TRLResponse, Array<string>>,
) => {
  return useQuery([queryKeys.getTRL], getTRL, options);
};
