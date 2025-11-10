import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import classNames from "classnames";
import { useNavigate } from "react-router";
import Basket from "../components/Basket";

function PlaceOrderPage() {
  const [personalOrder, setPersonalOrder] = useState(true);
  const [shippingOption, setShippingOption] = useState("");
  const [shippingAdresSameAsInvoice, setShippingAdresSameAsInvoice] =
    useState(true);
  const [wrongData, setWrongData] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/order/confirm", { state: { from: "place" } });
  };

  const [orderName, setOrderName] = useState("");
  const [orderSurname, setOrderSurname] = useState("");

  const [orderCompanyName, setOrderCompanyName] = useState("");
  const [orderCompanyNip, setOrderCompanyNip] = useState("");

  const [orderEmail, setOrderEmail] = useState("");
  const [orderContactNumber, setOrderContactNumber] = useState("");
  const [orderCountry, setOrderCountry] = useState("");
  const [orderAdress, setOrderAdress] = useState("");
  const [orderPostalCode, setOrderPostalCode] = useState("");
  const [orderState, setOrderState] = useState("");
  const [orderCity, setOrderCity] = useState("");

  const [deliveryName, setDeliveryName] = useState("");
  const [deliverySurname, setDeliverySurname] = useState("");
  const [deliveryCountry, setDeliveryCountry] = useState("");
  const [deliveryAdress, setDeliveryAdress] = useState("");
  const [deliveryPostalCode, setDeliveryPostalCode] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [shippingCost, setShippingCost] = useState(0);

  return (
    <div className="bg-main-color h-full pt-36">
      <NavBar setBasketOpen={setBasketOpen}></NavBar>
      <Basket isBasketOpen={basketOpen} setBasketOpen={setBasketOpen}></Basket>
      <div className={"max-w-[800px] mx-auto p-3"}>
        <h1 className="font-bold text-2xl">Wysyłka</h1>
        <h2 className="font-semibold text-lg mt-5">Kurier</h2>
        <button
          onClick={() => {
            setShippingOption("inpost");
            setShippingCost(20);
          }}
          className={
            "w-full border-y border-black py-5 my-2 px-3 hover:rounded-xl hover:bg-[#393E46] hover:text-white hover:cursor-pointer transition-all duration-200 text-left" +
            classNames({
              " rounded-xl bg-[#393E46] text-white": shippingOption == "inpost",
            })
          }
        >
          <p>InPost Kurier - 20 PLN</p>
        </button>

        <button
          onClick={() => {
            setShippingOption("dpd");
            setShippingCost(30);
          }}
          className={
            "w-full border-y border-black py-5 my-2 px-3 hover:rounded-xl hover:bg-[#393E46] hover:text-white hover:cursor-pointer transition-all duration-200 text-left" +
            classNames({
              " rounded-xl bg-[#393E46] text-white": shippingOption == "dpd",
            })
          }
        >
          <p>DPD - 30 PLN</p>
        </button>
        <h1 className="font-bold text-2xl mt-10">Dane do faktury</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex mt-2">
            <div className="flex">
              <label className="mt-2 font-light italic block">
                Osoba prywatna
              </label>
              <input
                type="radio"
                defaultChecked={personalOrder}
                onClick={() => {
                  setPersonalOrder(true);
                }}
                name="personal-company-group"
                className="block ml-3 mt-2"
              ></input>
            </div>

            <div className="flex ml-10">
              <label className="mt-2 font-light italic block">Firma</label>
              <input
                type="radio"
                defaultChecked={!personalOrder}
                onClick={() => {
                  setPersonalOrder(false);
                }}
                name="personal-company-group"
                className="block ml-3 mt-2"
              ></input>
            </div>
          </div>

          {personalOrder && (
            <div>
              <label className="mt-2 font-light italic block">Imię</label>
              <input
                onChange={(event) => {
                  setOrderName(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="Jan"
                maxLength={30}
                inputMode="text"
                required
              ></input>

              <label className="mt-2 font-light italic block">Nazwisko</label>
              <input
                onChange={(event) => {
                  setOrderSurname(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="Kowalski"
                maxLength={60}
                inputMode="text"
                required
              ></input>

              <label className="mt-2 font-light italic block">
                Adres e-mail
              </label>
              <input
                onChange={(event) => {
                  setOrderEmail(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="example@example.com"
                maxLength={50}
                type="email"
                required
              ></input>

              <label className="mt-2 font-light italic block">
                Numer kontaktowy
              </label>
              <input
                onChange={(event) => {
                  setOrderContactNumber(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="123 456 789"
                pattern="^[0-9]{3} [0-9]{3} [0-9]{3}$"
                maxLength={11}
                inputMode="decimal"
                required
              ></input>
            </div>
          )}

          {!personalOrder && (
            <div>
              <label className="mt-2 font-light italic block">Nazwa</label>
              <input
                onChange={(event) => {
                  setOrderCompanyName(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="86Tecnica"
                maxLength={50}
                required
              ></input>

              <label className="mt-2 font-light italic block">Nip</label>
              <input
                onChange={(event) => {
                  setOrderCompanyNip(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="1234567899"
                maxLength={10}
                pattern="^[0-9]{10}$"
                inputMode="decimal"
                required
              ></input>

              <label className="mt-2 font-light italic block">
                Adres e-mail
              </label>
              <input
                onChange={(event) => {
                  setOrderEmail(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="example@example.com"
              ></input>

              <label className="mt-2 font-light italic block">
                Numer kontaktowy
              </label>
              <input
                onChange={(event) => {
                  setOrderContactNumber(event.target.value);
                }}
                className="border-b border-black w-full sm:w-70"
                placeholder="123 456 789"
                maxLength={9}
                pattern="^[0-9]{9}$"
                inputMode="decimal"
                required
              ></input>
            </div>
          )}

          <div className="mt-10">
            <div>
              <div className="flex justify-between flex-col sm:flex-row">
                <div className="flex flex-col">
                  <label className="mt-2 font-light italic block mr-3">
                    Kraj
                  </label>
                  <input
                    onChange={(event) => {
                      setOrderCountry(event.target.value);
                    }}
                    className="border-b border-black w-full sm:w-70"
                    placeholder="Polska"
                    maxLength={30}
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="mt-2 font-light italic block mr-3">
                    Województwo
                  </label>
                  <input
                    onChange={(event) => {
                      setOrderState(event.target.value);
                    }}
                    className="border-b border-black w-full sm:w-70"
                    placeholder="Mazowieckie"
                    maxLength={30}
                    required
                  ></input>
                </div>
              </div>

              <div className="flex justify-between flex-col sm:flex-row">
                <div className="flex flex-col">
                  <label className="mt-2 font-light italic block mr-3">
                    Adres
                  </label>
                  <input
                    onChange={(event) => {
                      setOrderAdress(event.target.value);
                    }}
                    className="border-b border-black w-full sm:w-70"
                    placeholder="Ulica numer domu/numer mieszkania"
                    maxLength={60}
                    required
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="mt-2 font-light italic block mr-3">
                    Miejscowość
                  </label>
                  <input
                    onChange={(event) => {
                      setOrderCity(event.target.value);
                    }}
                    className="border-b border-black w-full sm:w-70"
                    placeholder="Warszawa"
                    maxLength={60}
                    required
                  ></input>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="mt-2 font-light italic block mr-3">
                  Kod pocztowy
                </label>
                <input
                  onChange={(event) => {
                    setOrderPostalCode(event.target.value);
                  }}
                  className="border-b border-black w-full sm:w-70"
                  placeholder="00-000"
                  required
                  pattern="^[0-9]{2}-[0-9]{3}$"
                  maxLength={6}
                ></input>
              </div>
            </div>
          </div>

          {
            <div>
              <h1 className="font-bold text-2xl mt-10">Adres do wysyłki</h1>
              <div className="flex">
                <label className="mt-2 font-light italic block mr-3">
                  Taki sam jak do faktury
                </label>
                <input
                  type="checkbox"
                  onClick={() =>
                    setShippingAdresSameAsInvoice(
                      shippingAdresSameAsInvoice ? false : true,
                    )
                  }
                  className="mt-2"
                  defaultChecked={shippingAdresSameAsInvoice}
                ></input>
              </div>

              <div
                className={
                  "transition-all duration-150 origin-top " +
                  classNames({
                    " scale-y-0 h-0": shippingAdresSameAsInvoice,
                    " scale-y-100 h-fit": !shippingAdresSameAsInvoice,
                  })
                }
              >
                <label className="mt-2 font-light italic block">Imię</label>
                <input
                  onChange={(event) => {
                    setDeliveryName(event.target.value);
                  }}
                  className="border-b border-black w-full sm:w-70"
                  placeholder="Jan"
                  maxLength={30}
                ></input>

                <label className="mt-2 font-light italic block">Nazwisko</label>
                <input
                  onChange={(event) => {
                    setDeliverySurname(event.target.value);
                  }}
                  className="border-b border-black w-full sm:w-70"
                  placeholder="Kowalski"
                  maxLength={60}
                ></input>

                <div className="mt-10">
                  <div className="flex justify-between flex-col sm:flex-row">
                    <div className="flex flex-col">
                      <label className="mt-2 font-light italic block mr-3">
                        Kraj
                      </label>
                      <input
                        onChange={(event) => {
                          setDeliveryCountry(event.target.value);
                        }}
                        className="border-b border-black w-full sm:w-70"
                        placeholder="Polska"
                        maxLength={30}
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label className="mt-2 font-light italic block mr-3">
                        Województwo
                      </label>
                      <input
                        onChange={(event) => {
                          setDeliveryState(event.target.value);
                        }}
                        className="border-b border-black w-full sm:w-70"
                        placeholder="Mazowieckie"
                        maxLength={30}
                      ></input>
                    </div>
                  </div>

                  <div className="flex justify-between flex-col sm:flex-row">
                    <div className="flex flex-col">
                      <label className="mt-2 font-light italic block mr-3">
                        Adres
                      </label>
                      <input
                        onChange={(event) => {
                          setDeliveryAdress(event.target.value);
                        }}
                        className="border-b border-black w-full sm:w-70"
                        placeholder="Ulica numer domu/numer mieszkania"
                        maxLength={60}
                      ></input>
                    </div>
                    <div className="flex flex-col">
                      <label className="mt-2 font-light italic block mr-3">
                        Miejscowość
                      </label>
                      <input
                        onChange={(event) => {
                          setDeliveryCity(event.target.value);
                        }}
                        className="border-b border-black w-full sm:w-70"
                        placeholder="Warszawa"
                        maxLength={60}
                      ></input>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="mt-2 font-light italic block mr-3">
                      Kod pocztowy
                    </label>
                    <input
                      onChange={(event) => {
                        setDeliveryPostalCode(event.target.value);
                      }}
                      className="border-b border-black w-full sm:w-70"
                      placeholder="00-000"
                      maxLength={6}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          }

          {wrongData && (
            <p className="text-red-500">
              Prosimy o podanie wszystkich wymaganych informacji!
            </p>
          )}

          <div>
            <button
              type="submit"
              onClick={() => {
                if (shippingOption == "") {
                  setWrongData(true);
                  return;
                }
                if (
                  (personalOrder && (orderName == "" || orderSurname == "")) ||
                  (!personalOrder &&
                    (orderCompanyName == "" || orderCompanyNip == "")) ||
                  orderEmail == "" ||
                  orderContactNumber == ""
                ) {
                  console.log("Brak podstawowych informacji");
                  setWrongData(true);
                  return;
                }

                if (
                  orderCountry == "" ||
                  orderState == "" ||
                  orderAdress == "" ||
                  orderCity == "" ||
                  orderPostalCode == ""
                ) {
                  console.log("brak danych kupujacego");
                  setWrongData(true);
                  return;
                }

                console.log(shippingAdresSameAsInvoice);

                if (
                  !shippingAdresSameAsInvoice &&
                  (deliveryName == "" ||
                    deliverySurname == "" ||
                    deliveryCountry == "" ||
                    deliveryAdress == "" ||
                    deliveryPostalCode == "" ||
                    deliveryState == "" ||
                    deliveryCity == "")
                ) {
                  setWrongData(true);
                  return;
                }

                if (personalOrder) {
                  localStorage.setItem("order-name", orderName);
                  localStorage.setItem("order-surname", orderSurname);
                } else {
                  localStorage.setItem("order-company-name", orderCompanyName);
                  localStorage.setItem("order-company-nip", orderCompanyNip);
                }

                localStorage.setItem(
                  "personal-order",
                  personalOrder.toString(),
                );
                localStorage.setItem("order-shipping-option", shippingOption);
                localStorage.setItem("order-email", orderEmail);
                localStorage.setItem(
                  "order-contact-number",
                  orderContactNumber,
                );
                localStorage.setItem("order-country", orderCountry);
                localStorage.setItem("order-state", orderState);
                localStorage.setItem("order-adress", orderAdress);
                localStorage.setItem("order-city", orderCity);
                localStorage.setItem("order-postal-code", orderPostalCode);
                localStorage.setItem("shipping-cost", shippingCost.toString());
                console.log(shippingCost);
                console.log(shippingCost.toString());

                localStorage.setItem(
                  "shipping-name",
                  shippingAdresSameAsInvoice ? orderName : deliveryName,
                );
                localStorage.setItem(
                  "shipping-surname",
                  shippingAdresSameAsInvoice ? orderSurname : deliverySurname,
                );
                localStorage.setItem(
                  "shipping-country",
                  shippingAdresSameAsInvoice ? orderCountry : deliveryCountry,
                );
                localStorage.setItem(
                  "shipping-adress",
                  shippingAdresSameAsInvoice ? orderAdress : deliveryAdress,
                );
                localStorage.setItem(
                  "shipping-postal-code",
                  shippingAdresSameAsInvoice
                    ? orderPostalCode
                    : deliveryPostalCode,
                );
                localStorage.setItem(
                  "shipping-state",
                  shippingAdresSameAsInvoice ? orderState : deliveryState,
                );
                localStorage.setItem(
                  "shipping-city",
                  shippingAdresSameAsInvoice ? orderCity : deliveryCity,
                );
                handleNavigation();
              }}
              className="py-3 w-full mt-10 bg-[#393E46] text-white rounded-xl hover:cursor-pointer hover:brightness-150"
            >
              Przejdź do podsumownia
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PlaceOrderPage;
