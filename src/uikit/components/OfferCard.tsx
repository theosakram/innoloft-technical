import { Editor } from '@tinymce/tinymce-react';
import GoogleMapReact, { Coords } from 'google-map-react';
import { useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdCheckmark } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import Image from 'next/image';
import { UpdateProductRequest } from '@/modules/product/productTypes';
import { ADT, matchPI } from '@/shared/match';
import DOMPurify from 'dompurify';
import { Profile, ProfileProps } from './Profile';
import { Spinner } from './Spinner';

type BaseProps = {
  title: string;
  description: string;
  imageUrl: string;
  offeredBy?: {
    logo: string;
    profile: ProfileProps;
    location: {
      street: string;
      city: string;
      coords?: Coords;
    };
  };
  id: number;
};

export type OfferCardProps = ADT<{
  view: BaseProps;
  edit: BaseProps & {
    onCancel: () => void;
    onSave: (data: UpdateProductRequest) => void;
    isLoading?: boolean;
  };
}>;
export const OfferCard = (props: OfferCardProps) => {
  const editorRef = useRef<any>(null);
  const { register, handleSubmit } = useForm<UpdateProductRequest['body']>({
    defaultValues: useMemo(() => {
      return {
        title: props.title,
      };
    }, [props]),
  });

  return (
    <div className="flex flex-col rounded-md bg-white md:flex-row">
      <div
        className={`flex flex-col gap-5 border-brand-border p-6 ${
          props.offeredBy ? 'md:w-8/12' : 'md-w-full'
        } md:border`}
      >
        <Image
          alt="patent-image"
          src={props.imageUrl}
          width={300}
          height={100}
        />
        {matchPI(props)({
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
          edit: ({ onCancel, onSave, id, isLoading }) => (
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              onSubmit={handleSubmit((e) => {
                return onSave({
                  id,
                  body: e,
                });
              })}
            >
              <input
                type="text"
                defaultValue={props.title}
                className="rounded-md border border-slate-300 p-1"
                {...register('title')}
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

              <div className="flex justify-end gap-6">
                <button type="button" onClick={onCancel}>
                  Cancel
                </button>

                <button
                  className="flex items-center gap-2 rounded-md bg-purple-500 px-2 py-1 text-white"
                  type="submit"
                >
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <IoMdCheckmark style={{ color: 'white' }} />
                  )}
                  Save
                </button>
              </div>
            </form>
          ),
          _: () => null,
        })}
      </div>

      {props.offeredBy && (
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

          {matchPI(props)({
            view: () => (
              <div className="h-60">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  center={
                    props.offeredBy?.location.coords && {
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
            _: () => null,
          })}
        </div>
      )}
    </div>
  );
};
