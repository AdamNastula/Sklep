import { useState } from "react";
import Logo from "../assets/logo.png";
import Dropdown from "./Dropdown";
import { Link } from "react-router";
import BasketButton from "./BasketButton";
import classNames from "classnames";

interface NavBarProps {
  setBasketOpen: (value: boolean) => void;
}

function NavBar(props: NavBarProps) {
  const [navbarToggled, setNavbarToggled] = useState(false);

  return (
    <nav className="bg-main-color fixed w-full z-30 top-0 start-0 border-b border-black max-h-dvh">
      <div className="max-w-[1920px] flex flex-wrap items-center justify-between mx-auto px-5 xl:px-20 py-4">
        <Link to="/">
          <img src={Logo} className="h-8" alt="JinshanLogo" />
        </Link>

        <div className="hidden lg:flex justify-between lg:w-[600px] xl:w-[750px] 2xl:w-[900px] font-medium">
          <Dropdown text="86Tecnica">
            <ul>
              <li>Felgi</li>
              <li>Zawieszenie</li>
              <li>Układ wydechowy</li>
              <li>Nadwozie</li>
              <li>Carbon</li>
            </ul>
          </Dropdown>

          <Dropdown text="Jinshan Body Shop">
            <ul>
              <li>Miata</li>
              <li>Is200</li>
              <li>E46</li>
            </ul>
          </Dropdown>

          <Dropdown text="Dropdown #1">
            <ul>
              <li>Pozycja 1</li>
              <li>Pozycja 2</li>
              <li>Pozycja 3</li>
              <li>Pozycja 4</li>
            </ul>
          </Dropdown>
          <Link>
            <p>Kontakt</p>
          </Link>
          <Link>
            <p>O Nas</p>
          </Link>
        </div>

        <div
          className={
            "absolute top-[60px] flex flex-col z-20 left-0 w-full bg-main-color transition duration-150 origin-top p-5 " +
            classNames({
              "scale-y-100": navbarToggled,
              "scale-y-0": !navbarToggled,
            })
          }
        >
          <Dropdown text="86Tecnica">
            <ul>
              <li>item 11</li>
              <li>item 22</li>
              <li>item 33</li>
              <li>item 44</li>
              <li>item 55</li>
            </ul>
          </Dropdown>

          <Dropdown text="Jinshan Body Shop">
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </Dropdown>

          <Dropdown text="Dropdown #1">
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </Dropdown>

          <Link>
            <p className="pl-5 text-left">Link 1</p>
          </Link>
          <Link>
            <p className="pl-5">Kontakt</p>
          </Link>
          <Link>
            <p className="pl-5">O nas</p>
          </Link>
        </div>

        <div className="flex">
          <BasketButton setBasketOpen={props.setBasketOpen}></BasketButton>
          <button
            onClick={() => setNavbarToggled(navbarToggled ? false : true)}
            className="lg:hidden ml-10"
          >
            ham
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
