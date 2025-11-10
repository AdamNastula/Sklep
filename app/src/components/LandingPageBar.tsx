import BarImage from "../assets/Supra.png";
import Separator from "../assets/point.svg";

interface landingPageBarProps {
  scrollToOffer: () => void;
}

function LandingPageBar(props: landingPageBarProps) {
  return (
    <div className="max-w-[1920px] min-h-[570px] max-h-[1080px] w-fit mx-auto bg-[#393E46] text-white">
      <div className="mx-auto relative min-h-[570px]">
        <img
          src={BarImage}
          className="object-fill min-h-[570px] opacity-0 lg:opacity-60"
        ></img>
        <div className="absolute top-0 start-0 w-full h-full">
          <div className="mx-auto text-center w-fit h-fit align-middle">
            <h1 className="text-7xl lg:text-8xl mt-36 mb-12 font-[Bebas Neue] font-bold">
              86TECHNIKA
            </h1>
            <div className="flex text-4xl justify-between mb-12 font-thin">
              <p>Części</p>
              <img src={Separator}></img>
              <p>Bodykity</p>
              <img src={Separator}></img>
              <p>Akcesoria</p>
            </div>
            <button
              onClick={() => {
                props.scrollToOffer();
              }}
              className="px-20 py-3 border-white border hover:cursor-pointer font-light"
            >
              Oferta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageBar;
