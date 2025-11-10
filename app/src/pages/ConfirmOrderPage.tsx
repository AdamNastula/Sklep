import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BasketCard from "../components/BasketCard";
import Basket from "../components/Basket";
import { useState } from "react";
import { loadMapFromLocalStorage } from "../utils/BasketJson";
import { toast, Toaster } from "react-hot-toast";
import {
  usePostPostCompanyOrder,
  usePostPostPersonalOrder,
} from "../api/order/order";
import type { ProductAndQuantity } from "../api/jInshanBodyShopApi.schemas";

function ConfirmOrderPage() {
  const [basketOpen, setBasketOpen] = useState(false);
  const personalOrder = localStorage.getItem("personal-order") == "true";
  const shippingOption = localStorage.getItem("order-shipping-option");
  const orderEmail = localStorage.getItem("order-email");
  const orderContactNumber = localStorage.getItem("order-contact-number");
  const orderCountry = localStorage.getItem("order-country");
  const orderState = localStorage.getItem("order-state");
  const orderAdress = localStorage.getItem("order-adress");
  const orderCity = localStorage.getItem("order-city");
  const orderPostalCode = localStorage.getItem("order-postal-code");
  const shippingName = localStorage.getItem("shipping-name");
  const shippingSurname = localStorage.getItem("shipping-surname");
  const shippingCountry = localStorage.getItem("shipping-country");
  const shippingAdress = localStorage.getItem("shipping-adress");
  const shippingPostalCode = localStorage.getItem("shipping-postal-code");
  const shippingState = localStorage.getItem("shipping-state");
  const shippingCity = localStorage.getItem("shipping-city");
  const shippingCost = localStorage.getItem("shipping-cost");
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const [byeLawsAccepted, setByeLawsAccepted] = useState(false);
  const [wrongData, setWrongData] = useState(false);

  const navigate = useNavigate();
  let orderName: string | null = "";
  let orderSurname: string | null = "";
  let orderCompanyName: string | null = "";
  let orderCompanyNip: string | null = "";
  if (personalOrder) {
    orderName = localStorage.getItem("order-name");
    orderSurname = localStorage.getItem("order-surname");
  } else {
    orderCompanyName = localStorage.getItem("order-company-name");
    orderCompanyNip = localStorage.getItem("order-company-nip");
  }

  const basket = loadMapFromLocalStorage("basket-data");
  const calculateBasketValue = () => {
    let total = 0;
    basket.forEach((item) => {
      total += item[0].price * item[1];
    });

    return total;
  };

  const showToast = () => {
    toast.error("Przepraszamy, wystąpił błąd! Spróbuj ponownie później.");
  };

  const postPersonalOrderQuery = usePostPostPersonalOrder({
    mutation: {
      onError: () => {
        showToast();
      },
      onSuccess: (data, variables, context) => {
        localStorage.clear();
        navigate(`/order/confirmation/${data}/personal/true`, {
          state: { from: "confirm" },
        });
      },
    },
  });

  const postCompanyOrderQuery = usePostPostCompanyOrder({
    mutation: {
      onError: () => {
        showToast();
      },
      onSuccess: (data, variables, context) => {
        localStorage.clear();
        navigate(`/order/confirmation/${data}/personal/false`, {
          state: { from: "confirm" },
        });
      },
    },
  });

  return (
    <div className="bg-main-color w-full h-fit">
      <NavBar setBasketOpen={setBasketOpen}></NavBar>
      <Basket setBasketOpen={setBasketOpen} isBasketOpen={basketOpen}></Basket>
      <div className="max-w-[600px] mx-auto pt-36 p-3">
        <h1 className="font-bold text-2xl">Dane</h1>
        <h2 className="font-semibold text-lg mt-5">Wysyłka</h2>
        <p>{shippingOption}</p>

        <h2 className="font-semibold text-lg mt-10">Dane do faktury</h2>
        <div className="flex justify-between mb-3">
          {personalOrder && (
            <>
              <p className="italic font-light">Imię</p>
              <p>{orderName}</p>
            </>
          )}

          {!personalOrder && (
            <>
              <p className="italic font-light">Nazwa firmy</p>
              <p>{orderCompanyName}</p>
            </>
          )}
        </div>

        <div className="flex justify-between mb-3">
          {personalOrder && (
            <>
              <p className="italic font-light">Nazwisko</p>
              <p>{orderSurname}</p>
            </>
          )}

          {!personalOrder && (
            <>
              <p className="italic font-light">NIP</p>
              <p>{orderCompanyNip}</p>
            </>
          )}
        </div>

        <div className="flex justify-between mb-3">
          <p className="italic font-light">email</p>
          <p>{orderEmail}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="italic font-light">Numer kontaktowy</p>
          <p>{orderContactNumber}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="italic font-light">Kraj</p>
          <p>{orderCountry}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Adres</p>
          <p>{orderAdress}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Województwo</p>
          <p>{orderState}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Mejscowość</p>
          <p>{orderCity}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Kod pocztowy</p>
          <p>{orderPostalCode}</p>
        </div>

        <h2 className="font-semibold text-lg mt-10">Dane do wysyłki</h2>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Imię</p>
          <p>{shippingName}</p>
        </div>

        <div className="flex justify-between mb-3">
          <p className="italic font-light">Nazwisko</p>
          <p>{shippingSurname}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Kraj</p>
          <p>{shippingCountry}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Adres</p>
          <p>{shippingAdress}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Województwo</p>
          <p>{shippingState}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Mejscowość</p>
          <p>{shippingCity}</p>
        </div>
        <div className="flex justify-between mb-3">
          <p className="italic font-light">Kod pocztowy</p>
          <p>{shippingPostalCode}</p>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mt-10">Twoje produkty</h1>

          {Array.from(basket.entries()).map((entry) => (
            <BasketCard
              key={entry[0]}
              product={entry[1][0]}
              quantity={entry[1][1]}
              activeButtons={false}
            ></BasketCard>
          ))}

          <p className="mt-10">Produkty: {calculateBasketValue()} PLN</p>
          <p>Wysyłka {shippingCost} PLN</p>
          <h2 className="font-semibold text-lg mt-3 w-full border-t border-black">
            Łącznie do zaplaty:
          </h2>
          <h2 className="font-semibold text-lg">
            {calculateBasketValue() + Number(shippingCost)} PLN
          </h2>
        </div>

        <div className="flex mt-10">
          <input
            type="checkbox"
            defaultChecked={byeLawsAccepted}
            className="mr-3"
            onClick={() => setByeLawsAccepted(byeLawsAccepted ? false : true)}
          ></input>
          <label>Przeczytałem i akceptuję regulamin.</label>
        </div>

        <div className="flex">
          <input
            type="checkbox"
            defaultChecked={privacyPolicyAccepted}
            onClick={() =>
              setPrivacyPolicyAccepted(privacyPolicyAccepted ? false : true)
            }
            className="mr-3"
          ></input>
          <label>Zapoznałem się z polityką prywatności.</label>
        </div>

        {wrongData && (
          <p className="text-red-600 mt-3">
            Proszę zaakceptować regulamin i politykę prywatności.
          </p>
        )}
        <button
          type="button"
          className="bg-[#393E46] w-full py-3 text-white rounded-xl hover:brightness-150 hover:cursor-pointer mt-3"
          onClick={async () => {
            if (!byeLawsAccepted || !privacyPolicyAccepted) {
              setWrongData(true);
              return;
            }

            const products: Array<ProductAndQuantity> = [];
            const basket = loadMapFromLocalStorage("basket-data");
            basket.forEach((item) => {
              products.push({
                productId: item[0].productId,
                quantity: item[1],
              });
            });

            if (personalOrder) {
              await postPersonalOrderQuery.mutateAsync({
                data: {
                  orderName: orderName,
                  orderSurname: orderSurname,
                  email: orderEmail,
                  contactNumber: orderContactNumber!.replaceAll(" ", ""),
                  orderCountry: orderCountry,
                  orderState: orderState,
                  orderAddress: orderAdress,
                  orderCity: orderCity,
                  orderPostalCode: orderPostalCode,
                  shippingCountry: shippingCountry,
                  shippingState: shippingState,
                  shippingAddress: shippingAdress,
                  shippingCity: shippingCity,
                  shippingPostalCode: shippingPostalCode,
                  shippingName: shippingName,
                  shippingSurname: shippingSurname,
                  shippingOption: shippingOption,
                  orderValue: calculateBasketValue() + Number(shippingCost),
                  orderProducts: products,
                },
              });
            } else {
              await postCompanyOrderQuery.mutateAsync({
                data: {
                  companyName: orderCompanyName,
                  companyNip: orderCompanyNip,
                  email: orderEmail,
                  contactNumber: orderContactNumber!.replaceAll(" ", ""),
                  orderCountry: orderCountry,
                  orderState: orderState,
                  orderAddress: orderAdress,
                  orderCity: orderCity,
                  orderPostalCode: orderPostalCode,
                  shippingCountry: shippingCountry,
                  shippingState: shippingState,
                  shippingAddress: shippingAdress,
                  shippingCity: shippingCity,
                  shippingPostalCode: shippingPostalCode,
                  shippingName: shippingName,
                  shippingSurname: shippingSurname,
                  shippingOption: shippingOption,
                  orderValue: calculateBasketValue() + Number(shippingCost),
                  orderProducts: products,
                },
              });
            }
          }}
        >
          Potwierdzam zgodność danych - zamawiam
        </button>
      </div>

      <Toaster position="bottom-right"></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default ConfirmOrderPage;
