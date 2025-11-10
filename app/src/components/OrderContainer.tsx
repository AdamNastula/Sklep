import { useState } from "react";
import type { PersonalOrder } from "../api/jInshanBodyShopApi.schemas";
import { useGetPersonalProducts } from "../api/order/order";
import AdminPageCard from "./AdminPageCard";
import DropdownIcon from "../assets/chevron-compact-down.svg";
import EditStateModal from "./EditStateModal";
import EditIcon from "../assets/edit.svg";

interface OrderContainerProps {
  order: PersonalOrder;
  refetch: () => void;
}

function OrderContainer(props: OrderContainerProps) {
  const [toggled, setToggled] = useState(false);
  const [toggleEditStateModal, setToggleEditStateModal] = useState(false);
  const getProductsQuery = useGetPersonalProducts({
    orderId: props.order.orderId,
  });

  const orderStatesMap = {
    "0": "Złożone",
    "1": "Opłacone",
    "2": "Gotowe do wysyłki",
    "3": "Wysłane",
    "4": "Dostarczone",
    "5": "Anulowane",
  };

  return (
    <div className={"flex flex-col min-w-[1300px] px-1 border-b border-black"}>
      {toggleEditStateModal && (
        <EditStateModal
          order={props.order}
          setIsOpen={() => {
            setToggleEditStateModal(false);
          }}
          refetch={props.refetch}
        ></EditStateModal>
      )}
      <div className="py-5 flex">
        <p className="w-1/6">{props.order.orderName}</p>
        <p className="w-1/6">{props.order.orderSurname}</p>
        <p className="w-1/6">{props.order.email}</p>
        <p className="w-1/6">
          {props.order.number + "/" + props.order.orderId}
        </p>
        <p className="w-1/6">{props.order.createdAt?.slice(0, 10)}</p>
        <p className="w-1/6">
          {orderStatesMap[props.order.status!]}{" "}
          <button
            type="button"
            onClick={() =>
              setToggleEditStateModal(toggleEditStateModal ? false : true)
            }
            className="hover:cursor-pointer float-left"
          >
            <img src={EditIcon}></img>
          </button>
          <button
            type="button"
            className="float-right hover:cursor-pointer"
            onClick={() => {
              setToggled(toggled ? false : true);
            }}
          >
            <img src={DropdownIcon}></img>
          </button>
        </p>
      </div>

      {toggled && (
        <div className="flex w-full">
          <div className="w-1/3 flex">
            <div className="flex flex-col mr-10 italic">
              <p className="text-xl font-medium mb-5">Dane zamawiającego</p>
              <p>Imię</p>
              <p>Nazwisko</p>
              <p>Email</p>
              <p>Województwo</p>
              <p>Miasto</p>
              <p>Kod pocztowy</p>
              <p>Adres</p>
              <p></p>
            </div>
            <div>
              <p className="mb-5">.</p>
              <p>{props.order.orderName}</p>
              <p>{props.order.orderSurname}</p>
              <p>{props.order.email}</p>
              <p>{props.order.orderState}</p>
              <p>{props.order.orderCity}</p>
              <p>{props.order.orderPostalCode}</p>
              <p>{props.order.orderAddress}</p>
            </div>
          </div>
          <div className="w-1/3 flex">
            <div className="flex flex-col mr-10 italic">
              <p className="text-xl font-medium mb-5">Dane do wysyłki</p>
              <p>Imię</p>
              <p>Nazwisko</p>
              <p>Województwo</p>
              <p>Miasto</p>
              <p>Kod pocztowy</p>
              <p>Adres</p>
              <p>Przewoźnik</p>
            </div>
            <div>
              <p className="mb-5">.</p>
              <p>{props.order.shippingName}</p>
              <p>{props.order.shippingSurname}</p>
              <p>{props.order.shippingState}</p>
              <p>{props.order.shippingCity}</p>
              <p>{props.order.shippingPostalCode}</p>
              <p>{props.order.shippingAddress}</p>
              <p>{props.order.shippingOption}</p>
            </div>
          </div>
          <div className="w-1/3">
            <p className="font-medium text-xl">Produkty w zamówieniu</p>
            <div className="overflow-auto h-[200px]">
              {getProductsQuery.data?.map((product) => (
                <AdminPageCard product={product} />
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="font-medium mt-5 text-xl">
        Łączna wartość zamówienia: {props.order.orderValue}
      </p>
    </div>
  );
}

export default OrderContainer;
