import { useQuery, UseQueryOptions } from 'react-query';
import { queryKeys } from '@/shared/constant';
import { getTRL } from './trlService';

export const useGetTRL = (
  options?: UseQueryOptions<unknown, unknown, unknown, Array<string>>,
) => {
  return useQuery([queryKeys.getTRL], getTRL, options);
};
