import { Open_Sans } from 'next/font/google';
import Image from 'next/image';

const openSans = Open_Sans({ subsets: ['latin'] });

export type ProfileProps = {
  src: string;
  name: string;
  company: string;
};

export const Profile = (props: ProfileProps) => {
  return (
    <div className="flex gap-4">
      <div className="h-20 w-20 overflow-hidden rounded-full">
        <Image alt={props.name} src={props.src} width={80} height={80} />
      </div>

      <div className="flex flex-col justify-center">
        <strong className={`${openSans.className} text-lg`}>
          {props.name}
        </strong>
        <span>{props.company}</span>
      </div>
    </div>
  );
};
