import classNames from "classnames";
import { Link } from "react-router";

interface OfferCardProps {
  photo: string;
  position: number;
  title: string;
  description: string;
  linkTo: string;
}

function OfferCard(props: OfferCardProps) {
  return (
    <div
      className={
        "bg-black w-10/12 mx-auto md:mx-5 mb-5 relative rounded-4xl md:rounded-none max-h-dvh overflow-clip" +
        classNames({
          " md:rounded-s-4xl": props.position == 1,
          " md:rounded-e-4xl": props.position == 3,
        })
      }
    >
      <img
        className="d-block opacity-65 object-fill w-full"
        src={props.photo}
      />
      <div className="absolute bottom-0 left-0 w-full p-7">
        <h2 className="text-white  text-4xl font-[Orbitron] font-semibold">
          {props.title}
        </h2>
        <p className="text-white text my-3">{props.description}</p>
        <Link to={props.linkTo}>
          <p className="text-white text-3xl font-light">Oferta...</p>
        </Link>
      </div>
    </div>
  );
}

export default OfferCard;
