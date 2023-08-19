import { defaultURL } from '@/shared/constant';

export const getTRL = async () => {
  return (await fetch(`${defaultURL}/trl`)).json();
};
