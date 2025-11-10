import { useState } from "react";
import ItemPhoto from "../assets/item.png";
import ItemPhoto1 from "../assets/slider1.png";
import ItemPhoto2 from "../assets/slider2.png";
import ItemPhoto3 from "../assets/slider3.png";
import NavBar from "../components/NavBar";
import Basket from "../components/Basket";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router";
import { useGetProduct } from "../api/product/product";
import { useGetGetAdditionalInformation } from "../api/additional-information/additional-information";
import { useGetGetSimilarProducts } from "../api/similar-products/similar-products";
import {
  loadMapFromLocalStorage,
  saveMapToLocalStorage,
} from "../utils/BasketJson";

function ItemPage() {
  const [basketOpen, setBasketOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(ItemPhoto);
  const [leftPhoto, setLeftPhoto] = useState(ItemPhoto1);
  const [middlePhoto, setMiddlePhoto] = useState(ItemPhoto2);
  const [rightPhoto, setRightPhoto] = useState(ItemPhoto3);
  const { id } = useParams<{ id: string }>();
  const query = useGetProduct({ id: id });
  const getAdditionalInformationQuery = useGetGetAdditionalInformation({
    productId: id,
  });
  const getGetSimilarProductsQuery = useGetGetSimilarProducts({
    productId: id,
  });
  const showToast = () => {
    toast.success("Dodano do koszyka!");
  };

  return (
    <div className="min-h-dvh bg-main-color flex flex-col">
      <NavBar setBasketOpen={setBasketOpen}></NavBar>
      <Basket isBasketOpen={basketOpen} setBasketOpen={setBasketOpen}></Basket>
      <div className="mx-auto max-w-[1000px] pt-32">
        <div className="flex md:flex-row flex-col">
          <div className="md:max-w-1/2 px-3">
            <img src={currentPhoto} className="object-fill"></img>
            <div className="flex justify-between pt-6">
              <button
                onClick={() => {
                  const tmp = currentPhoto;
                  setCurrentPhoto(leftPhoto);
                  setLeftPhoto(tmp);
                }}
                className="hover:cursor-pointer"
              >
                <img src={leftPhoto} className="w-[150px] h-[150px]"></img>
              </button>
              <button
                onClick={() => {
                  const tmp = currentPhoto;
                  setCurrentPhoto(middlePhoto);
                  setMiddlePhoto(tmp);
                }}
                className="hover:cursor-pointer mx-2 md:mx-0"
              >
                <img src={middlePhoto} className="w-[150px] h-[150px]"></img>
              </button>
              <button
                onClick={() => {
                  const tmp = currentPhoto;
                  setCurrentPhoto(rightPhoto);
                  setRightPhoto(tmp);
                }}
                className="hover:cursor-pointer"
              >
                <img src={rightPhoto} className="w-[150px] h-[150px]"></img>
              </button>
            </div>
          </div>

          <div className="md:max-w-1/2 md:px-5 flex flex-col w-full px-3">
            <h2 className="font-semibold text-4xl mt-3 mb-1 md:font-bold md:text-lg md:mt-0 md:mb-0">
              {query.data?.name}
            </h2>
            <p className="w-full">{query.data?.price} PLN</p>
            <p className="w-full font-light text-xs">
              {(query.data?.price / 1.23).toFixed(2)} PLN (Netto)
            </p>
            <p className="mt-5 md:mt-16 text-wrap">{query.data?.description}</p>
            <button
              type="button"
              disabled={query.data?.withdrawn}
              className="bg-[#393E46] px-16 py-3 text-white rounded-lg w-full block mt-5 md:mt-auto hover:cursor-pointer hover:brightness-150"
              onClick={() => {
                const basketData = localStorage.getItem("basket-data");

                if (basketData == null) {
                  const basket = new Map<string, [Product, number]>();
                  basket.set(id!, [query.data!, 1]);
                  saveMapToLocalStorage("basket-data", basket);
                  saveMapToLocalStorage("basket-data", basket);
                  showToast();
                  window.dispatchEvent(new Event("basket-updated"));
                } else {
                  const basket: Map<string, [Product, number]> =
                    loadMapFromLocalStorage("basket-data");
                  if (basket.has(id!)) {
                    basket.set(id!, [query.data!, basket.get(id!)![1] + 1]);
                  } else {
                    basket.set(id!, [query.data!, 1]);
                  }

                  saveMapToLocalStorage("basket-data", basket);
                  showToast();
                  window.dispatchEvent(new Event("basket-updated"));
                }
              }}
            >
              Dodaj do koszyka
            </button>
          </div>
        </div>

        <div className="mt-20 px-3 mb-20">
          <h2 className="font-bold">Dodatkowe informacje</h2>
          <div className="flex justify-between flex-wrap">
            {getAdditionalInformationQuery.isFetched &&
              getAdditionalInformationQuery.data!.map((information) => (
                <div className="flex justify-between w-[260px] mt-5">
                  <p className="font-semibold">{information.informationName}</p>
                  <p>{information.information}</p>
                </div>
              ))}

            {getAdditionalInformationQuery.isFetched &&
              getAdditionalInformationQuery.data?.length == 0 && (
                <p className="mt-3">Brak dodatkowych informacji.</p>
              )}
          </div>
        </div>
      </div>
      <Toaster position="bottom-right"></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default ItemPage;
