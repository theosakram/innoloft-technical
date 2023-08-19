import type { Metadata } from 'next';
import '../globals.css';
import type { PropsWithChildren } from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { QueryProvider } from '@/providers/queryProvider';
import { Header } from '@/uikit/components/Header';
import type { SidebarItem } from '@/uikit/components/Sidebar';
import { Sidebar } from '@/uikit/components/Sidebar';

export const metadata: Metadata = {
  title: 'Innoloft Technical',
  description: 'Innoloft Frontend Technical Test',
};

const sidebarMenu: Array<SidebarItem> = [
  {
    icon: <BiHomeAlt2 />,
    label: 'Home',
    href: '/',
  },
  {
    icon: <MdOutlineProductionQuantityLimits />,
    label: 'Product',
    href: '/product',
  },
];

export default function RootLayout(props: PropsWithChildren) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className="h-full overflow-hidden bg-slate-200">
          <Header src="https://bit.ly/dan-abramov" />

          <main className="flex w-full justify-center">
            <div className="flex w-4/5 gap-6 p-4">
              <div className="w-1/5">
                <Sidebar
                  menu={sidebarMenu}
                  withProfile={{
                    src: 'https://bit.ly/dan-abramov',
                    company: 'Meta',
                    name: 'Dan Abramov',
                  }}
                />
              </div>

              <div className="w-4/5">{props.children}</div>
            </div>
          </main>
        </body>
      </html>
    </QueryProvider>
  );
}
