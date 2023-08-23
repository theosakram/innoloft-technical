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
    href: '/product/6781',
  },
];

export default function RootLayout(props: PropsWithChildren) {
  return (
    <QueryProvider>
      <html lang="en">
        <head>
          <script
            src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"
            referrerPolicy="origin"
          />
        </head>
        <body className="h-full bg-slate-200">
          <Header src="https://bit.ly/dan-abramov" />

          <main className="flex w-full md:justify-center">
            <div className="flex w-full gap-6 p-2 md:w-4/5 md:p-4">
              <div className="hidden w-1/5 md:block">
                <Sidebar
                  menu={sidebarMenu}
                  withProfile={{
                    src: 'https://bit.ly/dan-abramov',
                    company: 'Meta',
                    name: 'Dan Abramov',
                  }}
                />
              </div>

              <div className="w-full md:w-4/5">{props.children}</div>
            </div>
          </main>
        </body>
      </html>
    </QueryProvider>
  );
}
