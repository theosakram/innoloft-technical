'use client';

import { useMemo } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useProductStore } from '@/modules/product/productStore';
import { matchLI } from '@/shared/match';
import { Breadcrumbs } from '@/uikit/components/Breadcrumbs';
import { OfferCard } from '@/uikit/components/OfferCard';
import { OfferDetails } from '@/uikit/components/OfferDetail';

const ProductPage = () => {
  const { data, isLoading, isError, offerCardData } = useProductStore();

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
      <div className="mb-4 flex flex-col gap-1 md:mb-0 md:flex-row">
        <Breadcrumbs />
        <div className="flex-grow" />
        <Link href="/product/6781/edit" passHref>
          <button className="h-7 rounded-md bg-brand-blue px-2 text-sm text-white">
            Edit
          </button>
        </Link>
      </div>

      {matchLI(matchState)({
        error: () => <h1>Error: Something is wrong</h1>,
        idle: () => <h1>No Activity</h1>,
        loading: () => <h1>Loading . . . .</h1>,
        data: () => (
          <div className="flex w-full flex-col gap-4">
            <OfferCard {...offerCardData} />

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
