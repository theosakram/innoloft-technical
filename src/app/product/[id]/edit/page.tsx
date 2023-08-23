'use client';

import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useUpdateProduct } from '@/modules/product/productHooks';
import { useProductStore } from '@/modules/product/productStore';
import { OfferCard } from '@/uikit/components/OfferCard';
import 'react-toastify/dist/ReactToastify.css';

const ProductEditPage = () => {
  const router = useRouter();
  const { offerCardData, data } = useProductStore();
  const autoClose = 2000;

  const baseToast = async (title: string, type: ToastOptions['type']) => {
    toast(title, {
      position: 'top-right',
      autoClose,
      closeOnClick: true,
      theme: 'dark',
      type,
    });
  };

  const { mutateAsync: updateProduct, isLoading } = useUpdateProduct({
    onError: () => baseToast('Failed Edit', 'error'),
    onSuccess: () => {
      baseToast('Success Edit', 'success').then(() => {
        setTimeout(() => {
          router.push('/product/6781');
        }, autoClose);
      });
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <strong>{data?.name}</strong>
      <OfferCard
        {...offerCardData}
        _tag="edit"
        onCancel={() => router.push('/product/6781')}
        onSave={updateProduct}
        isLoading={isLoading}
      />

      <ToastContainer />
    </div>
  );
};

export default ProductEditPage;
