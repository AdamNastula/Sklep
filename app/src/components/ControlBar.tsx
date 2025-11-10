import SearchIcon from "../assets/search.svg";
import classNames from "classnames";
import { useState } from "react";
import SortAscIcon from "../assets/sort-ascending.svg";
import SortDescIcon from "../assets/sort-descending.svg";
import { ProductType } from "../utils/Types";

interface ControlBarProps {
  setSortingOrder: (ascending: boolean) => void;
  sortingOrder: boolean;
  setFilter: (filter: ProductType, filterActive: boolean) => void;
  setNameFilter: (name: string) => void;
}

function ControlBar(props: ControlBarProps) {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortingVisible, setSortingVisible] = useState(false);

  return (
    <div
      className={
        "max-w-[1000px] mx-auto flex flex-col px-5" +
        classNames({
          " h-[100px]": !filtersVisible && !sortingVisible,
          " h-fit": filtersVisible || sortingVisible,
        })
      }
    >
      <div className="flex flex-col md:flex-row mt-16 overflow-clip items-start">
        <div className="relative border border-black rounded-xl flex p-1 w-full md:w-fit">
          <input
            placeholder="Wyszukaj..."
            className="active:border-none w-full"
            onChange={(e) => {
              props.setNameFilter(e.target.value);
            }}
          ></input>
          <img className="" src={SearchIcon} />
        </div>
        <button
          className="ml-0 md:ml-16 mt-3 md:mt-0 hover:cursor-pointer"
          onClick={() => {
            setFiltersVisible(filtersVisible ? false : true);
          }}
        >
          Filtry
        </button>
        <button
          className="ml:0 md:ml-16 mt-3 md:mt-0 hover:cursor-pointer"
          onClick={() => {
            setSortingVisible(sortingVisible ? false : true);
          }}
        >
          Sortuj według
        </button>
      </div>

      <div
        className={
          "mt-10 border-b border-black " +
          classNames({ hidden: !filtersVisible, "d-block": filtersVisible })
        }
      >
        <h2 className="text-xl">Filtry</h2>
        <div className="flex my-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => {
              props.setFilter(ProductType.Rims, e.target.checked);
            }}
          ></input>
          <p>Felgi</p>
        </div>
        <div className="flex my-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => {
              props.setFilter(ProductType.Suspension, e.target.checked);
            }}
          ></input>
          <p>Zawieszenie</p>
        </div>
        <div className="flex my-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => {
              props.setFilter(ProductType.Exhaust, e.target.checked);
            }}
          ></input>
          <p>Układ wydechowy</p>
        </div>
        <div className="flex my-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => {
              props.setFilter(ProductType.Body, e.target.checked);
            }}
          ></input>
          <p>Nadwozie</p>
        </div>
        <div className="flex my-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={(e) => {
              props.setFilter(ProductType.Carbon, e.target.checked);
            }}
          ></input>
          <p>Carbon</p>
        </div>
      </div>

      <div
        className={
          "mt-10 border-b border-black " +
          classNames({
            hidden: !sortingVisible,
            "d-block": sortingVisible,
          })
        }
      >
        <h2 className="text-xl">Opcje sortowania</h2>
        <div className="flex my-2">
          <button
            className="mr-2"
            onClick={() => {
              props.setSortingOrder(props.sortingOrder ? false : true);
            }}
          >
            Cena
            <img
              className="float-right pt-1"
              src={props.sortingOrder ? SortAscIcon : SortDescIcon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlBar;
