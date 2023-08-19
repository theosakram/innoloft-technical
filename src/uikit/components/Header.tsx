import { BsBell, BsChatDots, BsChevronDown } from 'react-icons/bs';
import Image from 'next/image';

export type HeaderProps = {
  src: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="flex w-full items-center justify-center bg-brand-blue p-4">
      <div className="grid h-full w-4/5 grid-cols-4 gap-10">
        <Image
          alt="brand-logo"
          src="/brandLogoWhite.svg"
          width={150}
          height={300}
        />
        <input
          type="text"
          className="col-span-2 h-7 w-96 rounded-sm p-2 text-sm placeholder:text-black"
          placeholder="Enter interests, keyword, company name, etc."
        />

        <div className="flex items-center gap-6 self-stretch text-white">
          <BsChatDots />
          <div className="flex items-center gap-2">
            <label htmlFor="cars">EN</label>
            <BsChevronDown />
          </div>
          <BsBell />
          <div className="items-center flex h-8 w-8 gap-2 overflow-hidden rounded-full">
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
