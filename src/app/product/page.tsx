'use client';

import { useMemo } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useGetProduct } from '@/modules/product/productHooks';
import { matchLI } from '@/shared/match';
import { Breadcrumbs } from '@/uikit/components/Breadcrumbs';
import { OfferCard, OfferCardProps } from '@/uikit/components/OfferCard';
import { OfferDetails } from '@/uikit/components/OfferDetail';

const ProductPage = () => {
  const { data, isLoading, isError } = useGetProduct(
    { id: 6781 },
    { onError: console.log },
  );

  const processedData = useMemo((): OfferCardProps => {
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

  const matchState = useMemo(() => {
    if (isLoading) {
      return 'loading';
    }

    if (isError) {
      return 'error';
    }

    if (data) {
      return 'data';
    }

    return 'idle';
  }, [data, isLoading, isError]);

  return (
    <main className="overflow-auto">
      <div className="flex">
        <Breadcrumbs />
        <div className="flex-grow" />
        <Link href="/product/edit" passHref>
          <button className="h-7 rounded-md bg-brand-blue px-2 text-sm text-white">
            Edit
          </button>
        </Link>
      </div>

      {matchLI(matchState)({
        error: () => <h1>Something is wrong</h1>,
        idle: () => <h1>No Activity</h1>,
        loading: () => <h1>Loading . . . .</h1>,
        data: () => (
          <div className="flex flex-col gap-4">
            <OfferCard {...processedData} />

            <div className="flex flex-col gap-6 rounded-md border border-brand-border bg-white p-6">
              <b>Video</b>
              <div className="flex justify-center">
                <ReactPlayer url={data?.video} controls />
              </div>
            </div>

            <OfferDetails
              bussinessModel={data?.businessModels.map((mod) => mod.name) || []}
              costs={[data?.investmentEffort || '']}
              technology={[
                data?.type.name || '',
                ...(data?.categories.map((datum) => datum.name) || []),
              ]}
              trl={[data?.trl.name || '']}
            />
          </div>
        ),
      })}
    </main>
  );
};

export default ProductPage;
