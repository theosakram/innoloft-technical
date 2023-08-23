import { BsBell, BsChatDots, BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export type HeaderProps = {
  src: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="flex w-full items-center justify-center bg-brand-blue p-4">
      <div className="grid h-full grid-cols-4 gap-10 md:w-4/5">
        <Link href="/">
          <div className="w-40">
            <img
              src="/brandLogoWhite.svg"
              alt="brand-logo"
              className="object-cover"
            />
          </div>
        </Link>
        <input
          type="text"
          className="col-span-2 hidden h-7 w-96 rounded-sm p-2 text-sm placeholder:text-black md:block"
          placeholder="Enter interests, keyword, company name, etc."
        />

        <div className="hidden items-center justify-end gap-6 text-white md:flex">
          <BsChatDots />
          <div className="flex items-center gap-2">
            <label htmlFor="cars">EN</label>
            <BsChevronDown />
          </div>
          <BsBell />
          <div className="flex h-8 w-8 items-center gap-2 overflow-hidden rounded-full">
            <Image
              alt="header-profile"
              src={props.src}
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
