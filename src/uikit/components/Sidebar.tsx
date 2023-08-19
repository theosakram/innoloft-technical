import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ProfileProps } from './Profile';
import { Profile } from './Profile';

export type SidebarItem = {
  label: string;
  icon: ReactNode;
  href: LinkProps['href'];
  isActive?: boolean;
};

export type SidebarProps = {
  menu: Array<SidebarItem>;
  withProfile?: ProfileProps;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className="flex flex-col gap-3">
      {props.withProfile && <Profile {...props.withProfile} />}

      {props.menu.map((item, i) => (
        <Link href={item.href} key={i} passHref>
          <div
            className={`${
              item.isActive ? 'bg-slate-300' : ''
            } flex cursor-pointer items-center gap-4 rounded-md p-2 hover:bg-slate-300`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        </Link>
      ))}
    </aside>
  );
};
