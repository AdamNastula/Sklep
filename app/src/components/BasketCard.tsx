import { useEffect, useState } from "react";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import Item from "../assets/item.png";
import {
  saveMapToLocalStorage,
  loadMapFromLocalStorage,
} from "../utils/BasketJson";

interface BasketCardProps {
  product: Product;
  quantity: number;
  activeButtons: boolean;
}

function BasketCard(props: BasketCardProps) {
  const getQuantity = () => {
    const basket = loadMapFromLocalStorage("basket-data");
    return basket.get(props.product.productId!)[1];
  };

  const [quantity, setQuantity] = useState(getQuantity());
  window.addEventListener("basket-updated", () => setQuantity(getQuantity));
  useEffect(() => {
    window.addEventListener("storage", () => setQuantity(getQuantity));
    setQuantity(getQuantity);
    return () => {
      window.removeEventListener("storage", () => setQuantity(getQuantity));
    };
  }, []);
  return (
    <div className="my-3 w-full relative z-20">
      <img src={Item} width={100} height={100} className="float-left mr-3" />
      <div>
        <p>{props.product.name}</p>
        <p>{props.product.price} PLN</p>
      </div>
      <div className="flex w-[80px] justify-between text-xl absolute right-0 bottom-0 pr-2">
        {props.activeButtons && (
          <button
            type="button"
            className="hover:cursor-pointer hover:font-extrabold"
            onClick={() => {
              const basket = loadMapFromLocalStorage("basket-data");
              basket.set(props.product.productId!, [
                props.product,
                quantity - 1,
              ]);
              if (quantity - 1 == 0) {
                basket.delete(props.product.productId!);
              }

              saveMapToLocalStorage("basket-data", basket);
              window.dispatchEvent(new Event("basket-updated"));
              setQuantity(quantity - 1);
            }}
          >
            -
          </button>
        )}
        <p>{quantity}</p>
        {props.activeButtons && (
          <button
            type="button"
            className="hover:cursor-pointer hover:font-extrabold"
            onClick={() => {
              const basket = loadMapFromLocalStorage("basket-data");
              basket.set(props.product.productId!, [
                props.product,
                quantity + 1,
              ]);
              saveMapToLocalStorage("basket-data", basket);
              window.dispatchEvent(new Event("basket-updated"));
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}

export default BasketCard;
