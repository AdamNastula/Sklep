import Reserved from "../assets/registered.svg";
import Facebook from "../assets/brand-facebook.svg";
import Instagram from "../assets/brand-instagram.svg";
import YTLogo from "../assets/brand-youtube.svg";

function Footer() {
  return (
    <div className="w-full py-10 bg-footer h-fit text-lg mt-auto">
      <div className="mx-auto max-w-[1000px] text-white flex-col md:flex-row flex justify-between md:px-5">
        <div className="font-light mx-auto md:mx-0 pb-5 border-b border-white md:border-none">
          <p className="font-bold">Polityka</p>
          <p>Regulamin</p>
          <p>Polityka prywatności</p>
          <p>Zwroty</p>
          <p>Wysyłka</p>
        </div>
        <div className="font-light mx-auto min-w-[162px] py-5 md:py-0 border-b border-white md:border-none">
          <p className="font-bold">Kontakt</p>
          <p>jinshanbodyshop86@gmail.com</p>
          <p>123 456 789</p>
        </div>
        <div className="font-light mx-auto min-w-[162px] py-5 md:py-0 border-b border-white md:border-none">
          <p className="font-bold">Znajdz nas</p>
          <a href="https://www.instagram.com/jinshan.bodyshop/" target="_blank">
            <img src={Instagram} className="float-left mr-3"></img>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={Facebook} className="float-left mr-3"></img>
          </a>
          <a
            href="https://youtube.com/@jinshan5495?si=thPNuB6gAgfJKEWf"
            target="_blank"
          >
            <img src={YTLogo} className="float-left"></img>
          </a>
        </div>
        <div className="mx-auto pt-5 md:pt-0">
          <p className="font-bold">
            <img src={Reserved} className="float-left"></img>All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
