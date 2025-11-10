import BasketCard from "./BasketCard";
import Arrow from "../assets/arrow-right.svg";
import classNames from "classnames";
import { Link } from "react-router";
import { useGetGetProductsByIds } from "../api/product/product";
import { useState } from "react";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import {
  saveMapToLocalStorage,
  loadMapFromLocalStorage,
} from "../utils/BasketJson";

interface BasketProps {
  isBasketOpen: boolean;
  setBasketOpen: (value: boolean) => void;
}

function Basket(props: BasketProps) {
  let basket = loadMapFromLocalStorage("basket-data");

  const calculateBasketValue = () => {
    basket = loadMapFromLocalStorage("basket-data");
    let total = 0;

    for (const basketItems of basket.entries()) {
      total += basketItems[1][0].price * basketItems[1][1];
    }

    return total;
  };
  const [total, setTotal] = useState(calculateBasketValue());

  const onBasketChange = () => {
    setTotal(calculateBasketValue());
  };

  window.addEventListener("basket-updated", onBasketChange);
  return (
    <div
      className={
        "w-[450px] max-w-dvw fixed top-0 z-30 right-0 flex flex-col h-full bg-main-color border-s origin-right border-black  p-8 transition duration-200 " +
        classNames({ "scale-x-0": !props.isBasketOpen })
      }
    >
      <div className="flex justify-between mb-16">
        <h1 className="text-xl">Koszyk</h1>
        <button
          className="hover:cursor-pointer"
          onClick={() => {
            props.setBasketOpen(false);
          }}
        >
          <img src={Arrow} />
        </button>
      </div>
      <div className="flex flex-col h-9/10 max-h-9/10 overflow-scroll">
        {Array.from(basket.entries()).map((entry) => (
          <BasketCard
            key={entry[0]}
            product={entry[1][0]}
            quantity={entry[1][1]}
            activeButtons={true}
          ></BasketCard>
        ))}
      </div>
      <div className="flex justify-between">
        <p className="text-lg mt-5">Wartość koszyka</p>
        <p className="font-bold text-lg mt-5">{total} PLN</p>
      </div>
      <Link to="/order/place" state={{ from: "basket" }}>
        <button
          type="button"
          className="w-100 p-3 my-5 bg-[#393E46] text-white rounded-xl hover:cursor-pointer"
        >
          Zloz zamowienie
        </button>
      </Link>
    </div>
  );
}

export default Basket;
