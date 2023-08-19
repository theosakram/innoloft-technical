import Link from 'next/link';
import { Breadcrumbs } from '@/uikit/components/Breadcrumbs';

const ProductPage = () => {
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

      <h1>Produk</h1>
    </main>
  );
};

export default ProductPage;
