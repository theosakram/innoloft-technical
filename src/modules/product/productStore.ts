import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { OfferCardProps } from '@/uikit/components/OfferCard';
import { useGetProduct } from './productHooks';

export const useProductStore = () => {
  const pathname = usePathname();
  const { data, isLoading, isError } = useGetProduct(
    { id: 6781 },
    { enabled: pathname.includes('/product'), onError: console.log },
  );

  const offerCardData = useMemo((): OfferCardProps => {
    if (data) {
      return {
        description: data.description,
        imageUrl: data.picture,
        title: data.name,
        offeredBy: {
          logo: data.company.logo,
          profile: {
            company: data.company.name,
            name: `${data.user.firstName} ${data.user.lastName}`,
            src: data.user.profilePicture,
          },
          location: {
            street: `${data.company.address.street} ${data.company.address.house},`,
            city: `${data.company.address.zipCode} ${data.company.address.city.name}, ${data.company.address.country.name}`,
            coords: {
              lat: +data.company.address.latitude,
              lng: +data.company.address.longitude,
            },
          },
        },
      };
    }

    return {
      description: '',
      imageUrl: '',
      offeredBy: {
        location: {
          street: '',
          city: '',
          coords: undefined,
        },
        logo: '',
        profile: {
          company: '',
          name: '',
          src: '',
        },
      },
      title: '',
    };
  }, [data]);

  return {
    data,
    offerCardData,
    isLoading,
    isError,
  };
};
