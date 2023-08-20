import { Editor } from '@tinymce/tinymce-react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { IconContext } from 'react-icons';
import { CiLocationOn } from 'react-icons/ci';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import { matchLI } from '@/shared/match';
import DOMPurify from 'dompurify';
import { Profile, ProfileProps } from './Profile';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';

type Variant = 'view' | 'edit';

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
  variant?: Variant;
};

export const OfferCard = ({ variant = 'view', ...props }: OfferCardProps) => {
  const editorRef = useRef<any>(null);

  return (
    <div className="flex flex-col rounded-md bg-white md:flex-row">
      <div className="flex flex-col gap-5 border-brand-border p-6 md:w-8/12 md:border">
        <Image
          alt="patent-image"
          src={props.imageUrl}
          width={300}
          height={100}
        />
        {matchLI(variant)({
          view: () => (
            <>
              <b>{props.title}</b>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(props.description),
                }}
              />
            </>
          ),
          edit: () => (
            <>
              <input
                type="text"
                defaultValue={props.title}
                className="rounded-md border border-slate-300 p-1"
              />
              <Editor
                onInit={(_, editor) => (editorRef.current = editor)}
                initialValue={props.description}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                }}
              />
            </>
          ),
        })}
      </div>

      <div className="flex w-full flex-col gap-4 border-l-0 p-6 md:w-4/12 md:border">
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

        {matchLI(variant)({
          view: () => (
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
          ),
          edit: () => null,
        })}
      </div>
    </div>
  );
};
