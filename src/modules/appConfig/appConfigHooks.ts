import { useQuery, UseQueryOptions } from 'react-query';
import { queryKeys } from '@/shared/constant';
import { AppConfigRequest, AppConfigResponse } from './appConfigType';
import { getAppConfig } from './appService';

export const useGetAppConfig = (
  payload: AppConfigRequest,
  options?: UseQueryOptions<
    AppConfigResponse,
    unknown,
    AppConfigResponse,
    Array<string | AppConfigRequest>
  >,
) => {
  return useQuery(
    [queryKeys.appConfiguration, payload],
    () => getAppConfig(payload),
    options,
  );
};
