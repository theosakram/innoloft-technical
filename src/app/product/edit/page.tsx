'use client';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { useProductStore } from '@/modules/product/productStore';
import { OfferCard } from '@/uikit/components/OfferCard';

const ProductEditPage = () => {
  const { offerCardData, data } = useProductStore();

  return (
    <div className="flex flex-col gap-2">
      <strong>{data?.name}</strong>
      <OfferCard {...offerCardData} variant="edit" />

      <div className="flex flex-col gap-4 rounded-md bg-white p-4">
        <strong>Video</strong>
        <input
          type="text"
          placeholder="Add a youtube or vimeo link"
          className="rounded-md border border-slate-300 p-1 text-sm"
        />
      </div>

      <div className="flex flex-col gap-4 rounded-md bg-white p-4">
        <strong>Offer Details</strong>
        <input
          type="text"
          placeholder="Add a youtube or vimeo link"
          className="rounded-md border border-slate-300 p-1 text-sm"
        />
      </div>
    </div>
  );
};

export default ProductEditPage;
