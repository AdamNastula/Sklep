import { useEffect, useState } from "react";
import Basket from "../assets/basket.svg";
import { loadMapFromLocalStorage } from "../utils/BasketJson";
interface BasketButtonProps {
  setBasketOpen: (param: boolean) => void;
}

function BasketButton(props: BasketButtonProps) {
  const [count, setCount] = useState(0);
  const updateBasket = () => {
    const json = localStorage.getItem("basket-data");
    if (!json) return setCount(0);

    const basket = loadMapFromLocalStorage("basket-data");
    let sum = 0;
    basket.forEach((val) => {
      sum += val[1];
    });

    setCount(sum);
  };

  useEffect(() => {
    window.addEventListener("storage", updateBasket);
    updateBasket();
    return () => {
      window.removeEventListener("storage", updateBasket);
    };
  }, []);

  window.addEventListener("basket-updated", updateBasket);

  return (
    <button
      type="button"
      onClick={() => props.setBasketOpen(true)}
      className="flex hover:cursor-pointer"
    >
      <img src={Basket} className="float-left" />
      <p>Koszyk [{count}]</p>
    </button>
  );
}

export default BasketButton;
