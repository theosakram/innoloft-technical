import GoogleMapReact, { Coords } from 'google-map-react';
import { IconContext } from 'react-icons';
import { CiLocationOn } from 'react-icons/ci';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import DOMPurify from 'dompurify';
import { Profile, ProfileProps } from './Profile';

export type OfferCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  offeredBy: {
    logo: string;
    profile: ProfileProps;
    location: {
      street: string;
      city: string;
      coords?: Coords;
    };
  };
};

export const OfferCard = (props: OfferCardProps) => {
  return (
    <div className=" flex rounded-md bg-white">
      <div className="border-brand-border flex w-8/12 flex-col gap-5 border p-6">
        <Image
          alt="patent-image"
          src={props.imageUrl}
          width={300}
          height={100}
        />
        <b>{props.title}</b>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.description),
          }}
        />
      </div>

      <div className="flex w-4/12 flex-col gap-4 border border-l-0 p-6">
        <b>Offered By</b>

        <Image
          alt="company-logo-image"
          src={props.offeredBy.logo}
          width={200}
          height={100}
        />

        <Profile {...props.offeredBy.profile} />

        <div className="flex items-center gap-2">
          <CiLocationOn />

          <div className="flex flex-col">
            <span>{props.offeredBy.location.street}</span>
            <span>{props.offeredBy.location.city}</span>
          </div>
        </div>

        <div className="h-60">
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            center={
              props.offeredBy.location.coords && {
                lat: props.offeredBy.location.coords.lat,
                lng: props.offeredBy.location.coords.lng,
              }
            }
            yesIWantToUseGoogleMapApiInternals
            zoom={11}
          >
            <IconContext.Provider value={{ color: 'red', size: '3em' }}>
              <MdLocationPin />
            </IconContext.Provider>
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};
