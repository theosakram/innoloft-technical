import { defaultURL } from '@/shared/constant';
import { AppConfigRequest } from './appConfigType';

export const getAppConfig = async (payload: AppConfigRequest) => {
  return (await fetch(`${defaultURL}/configuration/${payload.appId}`)).json();
};
