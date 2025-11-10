import SliderPhoto1 from "../assets/slider1.png";
import SliderPhoto2 from "../assets/slider2.png";
import SliderPhoto3 from "../assets/slider3.png";
import OfferCard from "./OfferCard";

function Slider() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between font-medium font-[Barlow Condensed]">
      <OfferCard
        title="86Tecnica"
        position={1}
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        photo={SliderPhoto1}
        linkTo="/tecnica"
      ></OfferCard>
      <OfferCard
        title="Jinshan Body Shop"
        position={2}
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        photo={SliderPhoto2}
        linkTo="/jinshan"
      ></OfferCard>
      <OfferCard
        title={"Third"}
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
        position={3}
        photo={SliderPhoto3}
        linkTo="/third"
      ></OfferCard>
    </div>
  );
}

export default Slider;
