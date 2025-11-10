import { Link } from "react-router";
import { useGetDownload } from "../api/ovh/ovh";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import NotFoundIcon from "../assets/not-found.jpeg";
import {
  saveMapToLocalStorage,
  loadMapFromLocalStorage,
} from "../utils/BasketJson";
import Spinner from "./Spinner";

interface ItemCardProps {
  product: Product;
  showToast: () => void;
}

function ItemCard(props: ItemCardProps) {
  const imgDownloadQuery = useGetDownload({
    key: props.product.productId + "_1",
  });

  if (imgDownloadQuery.isFetched) {
    console.log(imgDownloadQuery.data);
  }

  return (
    <div className="w-[200px] mx-auto md:mx-3 mb-16 bg-main-color hover:bg-black relative">
      <Link to={`/item/${props.product.productId}`}>
        {imgDownloadQuery.isLoading && <Spinner></Spinner>}
        {imgDownloadQuery.isFetched && imgDownloadQuery.data != "" && (
          <img src={imgDownloadQuery.data} className="hover:brightness-110" />
        )}
        {imgDownloadQuery.isFetched && imgDownloadQuery.data == "" && (
          <div className="border border-black rounded-xl">
            <img src={NotFoundIcon} className="rounded-xl"></img>
          </div>
        )}
      </Link>
      <p className="font-semibold">{props.product.name}</p>
      <div className="flex justify-between">
        <p>{props.product.price} PLN</p>
        <button
          type="button"
          onClick={() => {
            const basketData = localStorage.getItem("basket-data");

            if (basketData == null) {
              const basket = new Map<string, [Product, number]>();
              basket.set(props.product.productId!, [props.product, 1]);
              saveMapToLocalStorage("basket-data", basket);
              props.showToast();
              window.dispatchEvent(new Event("basket-updated"));
            } else {
              const basket: Map<string, [Product, number]> =
                loadMapFromLocalStorage("basket-data");
              if (basket.has(props.product.productId!)) {
                basket.set(props.product.productId!, [
                  props.product,
                  basket.get(props.product.productId!)![1] + 1,
                ]);
              } else {
                basket.set(props.product.productId!, [props.product, 1]);
              }

              saveMapToLocalStorage("basket-data", basket);
              props.showToast();
              window.dispatchEvent(new Event("basket-updated"));
            }
          }}
          className="hover:font-extrabold cursor-pointer text-xl"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
