import { CiClock2, CiSettings } from 'react-icons/ci';
import { FaChessKnight } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';

export type OfferDetailsProps = {
  technology: Array<string>;
  bussinessModel: Array<string>;
  trl: Array<string>;
  costs: Array<string>;
};

export const OfferDetails = (props: OfferDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-6">
      <b>Offer details</b>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CiSettings />
            <span>Technology</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.technology.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-300 p-1 text-sm text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaChessKnight />
            <span>Bussiness Model</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.bussinessModel.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-300 p-1 text-sm text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CiClock2 />
            <span>TRL</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.trl.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-300 p-1 text-sm text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <TbMoneybag />
            <span>Costs</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {props.costs.map((tech, i) => (
              <span
                key={i}
                className="rounded-md bg-slate-300 p-1 text-sm text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
