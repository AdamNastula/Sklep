import { useState, type ReactNode } from "react";
import DropdownIcon from "../assets/chevron-compact-down.svg";
import classNames from "classnames";

interface DropdownProps {
  children: ReactNode;
  text: string;
}

function Dropdown(props: DropdownProps) {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setToggled(toggled ? false : true)}
        className="group relative hover:cursor-pointer w-fit text-left z-20"
      >
        {props.text}
        <img src={DropdownIcon} className="float-right"></img>
        <div
          className={
            "lg:absolute lg:top-full lg:left-[-20px] z-20 lg:pt-[20px] w-[170px] scale-y-0 h-0 lg:group-hover:scale-y-100 lg:group-hover:h-fit origin-top duration-200 bg-main-color " +
            classNames({ "scale-y-100 h-fit": toggled })
          }
        >
          <div className="lg:border lg:border-t-0 lg:border-black w-full flex justify-start px-[20px] pb-[20px]">
            {props.children}
          </div>
        </div>
      </button>
    </>
  );
}

export default Dropdown;
