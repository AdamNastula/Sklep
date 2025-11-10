import { useState } from "react";
import type { CompanyOrder } from "../api/jInshanBodyShopApi.schemas";
import { usePutPutCompanyOrder } from "../api/order/order";
import Modal from "./Modal";

interface EditCompanyStateModalProps {
  order: CompanyOrder;
  setIsOpen: () => void;
  refetch: () => void;
}

function EditCompanyStateModal(props: EditCompanyStateModalProps) {
  const [orderStatus, setOrderStatus] = useState(props.order.status);
  const updateStatusQuery = usePutPutCompanyOrder();

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        props.setIsOpen();
      }}
    >
      <p>Zmień status zamówienia {props.order.number}</p>
      <div className="flex w-[200px] justify-between mt-5">
        <p>Złożone</p>
        <input
          name="status"
          defaultChecked={props.order.status == 0}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(0);
          }}
        ></input>
      </div>

      <div className="flex w-[200px] justify-between">
        <p>Opłacone</p>
        <input
          name="status"
          defaultChecked={props.order.status == 1}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(1);
          }}
        ></input>
      </div>

      <div className="flex w-[200px] justify-between">
        <p>Gotowe do wysyłki</p>
        <input
          name="status"
          defaultChecked={props.order.status == 2}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(2);
          }}
        ></input>
      </div>

      <div className="flex w-[200px] justify-between">
        <p>Wysłane</p>
        <input
          name="status"
          defaultChecked={props.order.status == 3}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(3);
          }}
        ></input>
      </div>

      <div className="flex w-[200px] justify-between">
        <p>Dostarczone</p>
        <input
          name="status"
          defaultChecked={props.order.status == 4}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(4);
          }}
        ></input>
      </div>

      <div className="flex w-[200px] justify-between">
        <p>Anulowane</p>
        <input
          name="status"
          defaultChecked={props.order.status == 5}
          type="radio"
          onChange={(e) => {
            if (e.target.value) setOrderStatus(5);
          }}
        ></input>
      </div>

      <button
        type="button"
        className="mt-auto bg-footer w-full text-white py-3 rounded-xl hover:brightness-150 hover:cursor-pointer"
        onClick={async () => {
          await updateStatusQuery.mutateAsync({
            params: { id: props.order.orderId, status: orderStatus },
          });

          props.refetch();
          props.setIsOpen();
        }}
      >
        Zapisz
      </button>
    </Modal>
  );
}

export default EditCompanyStateModal;
