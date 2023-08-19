'use client';

import { useMemo } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useGetProduct } from '@/modules/product/productHooks';
import { matchLI } from '@/shared/match';
import { Breadcrumbs } from '@/uikit/components/Breadcrumbs';
import { OfferDetails } from '@/uikit/components/OfferDetail';

const ProductPage = () => {
  const { data, isLoading, isError } = useGetProduct(
    { id: 6781 },
    { onError: console.log },
  );

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
    <main>
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
            <div className="border-brand-border flex flex-col gap-6 rounded-md border bg-white p-6">
              <b>Video</b>
              <div className="flex justify-center">
                <ReactPlayer url={data?.video} controls />
              </div>
            </div>

            <OfferDetails
              bussinessModel={data?.businessModels.map((mod) => mod.name) || []}
              costs={[data?.investmentEffort || '']}
              technology={[]}
              trl={[data?.trl.name || '']}
            />
          </div>
        ),
      })}
    </main>
  );
};

export default ProductPage;
