'use client';

import { useMemo } from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbPath } from '@/shared/generateBreadcrumbPath';

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumPath = useMemo(() => {
    return generateBreadcrumbPath(pathname);
  }, [pathname]);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center">
        <li>
          <div className="flex items-center justify-center gap-2 p-2">
            <BiHomeAlt2 />
            <Link href="/" className="hover:text-slate-300">
              <span>{breadcrumPath.length ? '' : 'Home'}</span>
            </Link>
            {!!breadcrumPath.length && <BsChevronRight />}
          </div>
        </li>
        {breadcrumPath.map((path, i) => (
          <li key={i}>
            <div className="flex items-center justify-center gap-2 p-2">
              <Link href={path.href} className="hover:text-slate-300">
                <span className="capitalize">{path.label}</span>
              </Link>
              {breadcrumPath.length > 1 && i !== breadcrumPath.length - 1 && (
                <BsChevronRight />
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
