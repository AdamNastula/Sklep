import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useGetGetOrderPersonalStatus } from "../api/order/order";
import { useGetPersonalProducts } from "../api/order/order";
import { useState } from "react";
import { useParams } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import AdminPageCard from "../components/AdminPageCard";

function CheckPersonalOrderPage() {
  const statusMap = {
    0: [
      "Przyjęte",
      "Przyjęliśmy Twoje zamówienie do realizacji. Oczekujemy na płatność.",
    ],
    1: ["Opłacone", "Otrzymaliśmy płatność. Szykujemy produkt do wysyłki."],
    2: [
      "Gotowe do wysyłki",
      "Twoje zamówienie zostało skompletowane i oczekuje na kuriera.",
    ],
    3: ["Wysłane", "Twoje zamówienie zostało wysłane z naszego magazynu."],
    4: ["Dostarczone", "Zamówienie zostało dostarczone."],
    5: ["Anulowane", "Zamówienie zostało anulowane."],
  };

  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState(0);
  const [emptyForm, setEmptyForm] = useState(false);
  const getOrderDataQuery = useGetGetOrderPersonalStatus(
    { id: id, email: email, number: orderNumber },
    {
      query: { enabled: false },
    },
  );
  const getProductsQuery = useGetPersonalProducts({ orderId: id });
  const showToast = () => {
    toast.loading("Weryfikujemy dane");
  };

  if (getOrderDataQuery.isFetched) {
    toast.dismiss();
  }

  if (getOrderDataQuery.isError) {
    toast.error("Wystąpił błąd.");
  }

  return (
    <div className="max-w-dvw min-h-dvh h-fit flex flex-col bg-main-color">
      <NavBar setBasketOpen={() => {}}></NavBar>
      <div>
        {!getOrderDataQuery.isSuccess && (
          <div className="pt-32 mx-auto max-w-[1000px] text-center flex flex-col mb-[212px]">
            <h1 className="text-3xl md:text-4xl">
              Sprawdź status swojego zamówienia
            </h1>

            <label className="text-left w-[300px] mx-auto italic mt-5">
              Numer zamówienia
            </label>
            <input
              className="border border-black mx-auto w-[300px] mt-1"
              onChange={(event) => setOrderNumber(Number(event.target.value))}
            ></input>

            <label className="w-[300px] mx-auto text-left italic mt-3">
              Email
            </label>
            <input
              className="border border-black mx-auto w-[300px] mt-1"
              onChange={(event) => setEmail(event.target.value)}
            ></input>

            {getOrderDataQuery.isError && (
              <p className="text-red-600 mt-5">
                Prosimy sprawdzić poprawność podanych informacji.
              </p>
            )}

            {emptyForm && (
              <p className="text-red-600 mt-5">
                Prosimy o podanie wszystkich wymaganych informacji.
              </p>
            )}

            <button
              type="button"
              className="bg-footer rounded-xl py-1 px-12 text-white w-1/3 mx-auto mt-5 hover:cursor-pointer hover:brightness-150"
              onClick={() => {
                if (orderNumber == 0 || email == "") {
                  setEmptyForm(true);
                  return;
                }

                setEmptyForm(false);
                getOrderDataQuery.refetch();
                showToast();
              }}
            >
              Sprawdź
            </button>
          </div>
        )}

        {getOrderDataQuery.isFetched &&
          getOrderDataQuery.isSuccess &&
          !getOrderDataQuery.isError && (
            <div className="pt-32 mx-auto max-w-[1000px] text-center flex flex-col">
              <h1 className="text-3xl md:text-4xl">Szczegóły zamówienia</h1>
              <h2 className="font-bold mt-5 text-xl">Status</h2>
              <p className="italic text-xl">
                {statusMap[getOrderDataQuery.data!.status!][0]}
              </p>
              <p className="mt-5 text-lg font-medium">
                {statusMap[getOrderDataQuery.data!.status!][1]}
              </p>
              <div className="w-[300px] mx-auto mt-10 mb-5 text-left">
                <h1 className="text-2xl bold">Produkty w zamówieniu</h1>
                {getProductsQuery.data?.map((p) => (
                  <AdminPageCard product={p}></AdminPageCard>
                ))}

                <h1 className="my-5 font-medium">
                  Łączna wartość zamówienia: {getOrderDataQuery.data.orderValue}
                </h1>

                <p>O zmianach statusu będziemy informować mailowo.</p>
              </div>
            </div>
          )}
      </div>

      <Footer></Footer>
      <Toaster position="bottom-right"></Toaster>
    </div>
  );
}

export default CheckPersonalOrderPage;
