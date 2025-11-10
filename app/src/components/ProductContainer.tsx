import { useState } from "react";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import TrashIcon from "../assets/trash.svg";
import EditIcon from "../assets/edit.svg";
import DropdownIcon from "../assets/chevron-compact-down.svg";
import EditProductModal from "./EditProductModal";
import DeleteModal from "./DeleteModal";
import {
  useGetGetAdditionalInformation,
  usePostAdditionalInformation,
  useDeleteAdditionalInformation,
} from "../api/additional-information/additional-information";

import { usePutProduct } from "../api/product/product";

interface OrderContainerCompanyProps {
  product: Product;
  refetch: () => void;
}

function OrderContainerCompany(props: OrderContainerCompanyProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const aditionalInformationQuery = useGetGetAdditionalInformation({
    productId: props.product.productId,
  });
  const deleteAditionalInformationQuery = useDeleteAdditionalInformation();
  const [name, setName] = useState("");
  const [information, setInformation] = useState("");
  const postAditionalInformationQuery = usePostAdditionalInformation();
  const putProductQuery = usePutProduct();
  const productCategoriesMap = {
    0: "Felgi",
    1: "Zawieszenie",
    2: "Wydech",
    3: "Nadwozie",
    4: "Włókno węglowe",
  };

  const shopsMap = {
    0: "Jinshan",
    1: "86Tecnica",
    2: "Third",
  };

  return (
    <>
      {modalOpen && (
        <EditProductModal
          setIsOpen={() => setModalOpen(false)}
          product={props.product}
          refetch={props.refetch}
        ></EditProductModal>
      )}

      {deleteModalOpen && (
        <DeleteModal
          setIsOpen={() => setDeleteModalOpen(false)}
          product={props.product}
          refetch={props.refetch}
        ></DeleteModal>
      )}
      <div
        className={"flex flex-col min-w-[1300px] px-1 border-b border-black"}
      >
        <div className="py-5 flex">
          <p className="w-1/5">{props.product.name}</p>
          <p className="w-1/5">{props.product.price}</p>
          <p className="w-1/5">{props.product.description}</p>
          <p className="w-1/5">
            {productCategoriesMap[props.product.category]}
          </p>
          <p className="w-1/5">
            {shopsMap[props.product.shop]}{" "}
            <div className="float-right">
              <button
                type="button"
                className="mr-5 w-fit hover:cursor-pointer"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <img src={EditIcon}></img>
              </button>
              <button
                type="button"
                className="w-fit hover:cursor-pointer ml-5"
                onClick={() => setDeleteModalOpen(true)}
              >
                <img src={TrashIcon}></img>
              </button>

              <button
                className="ml-5 hover:cursor-pointer"
                onClick={() => setToggled(toggled ? false : true)}
              >
                <img src={DropdownIcon}></img>
              </button>
            </div>
          </p>
        </div>

        {toggled && (
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">Dodatkowe informacje</h1>
            {aditionalInformationQuery.data?.length == 0 && (
              <p>Brak dodatkowych informacji.</p>
            )}
            {aditionalInformationQuery.data?.map((i) => (
              <div className="flex">
                <p className="mr-5 w-1/10">{i.informationName}</p>
                <p className="w-1/10">{i.information}</p>
                <button
                  className="hover:cursor-pointer"
                  onClick={async () => {
                    await deleteAditionalInformationQuery.mutateAsync({
                      params: { infoId: i.id },
                    });

                    aditionalInformationQuery.refetch();
                  }}
                >
                  <img src={TrashIcon}></img>
                </button>
              </div>
            ))}

            <h1 className="mt-10 text-lg font-bold">Dodaj nową informację</h1>
            <div className="flex mt-3">
              <p className="w-1/10">Nazwa</p>
              <p className="w-1/10 ml-5">Informacja</p>
            </div>

            <div className="flex mt-1">
              <input
                className="px-1 border border-black rounded-md w-1/10"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
              <input
                className="px-1 border border-black rounded-md w-1/10 ml-5"
                onChange={(e) => {
                  setInformation(e.target.value);
                }}
              ></input>
            </div>
            <button
              type="button"
              className="bg-footer text-white rounded-md w-2/10 mt-3 mb-3 hover:brightness-150 hover:cursor-pointer py-1"
              onClick={async () => {
                if (name == "" || information == "") {
                  return;
                }

                await postAditionalInformationQuery.mutateAsync({
                  params: {
                    name: name,
                    information: information,
                    productId: props.product.productId,
                  },
                });

                aditionalInformationQuery.refetch();
              }}
            >
              Dodaj
            </button>

            {props.product.withdrawn && (
              <p className="mt-5 font-bold">
                Produkt jest obecnie wycofany ze sprzedaży.
              </p>
            )}

            {!props.product.withdrawn && (
              <p className="mt-5 font-bold">
                Produkt jest dostępny w sprzedaży.
              </p>
            )}

            <button
              className="bg-footer text-white rounded-md w-2/10 mt-3 mb-3 hover:brightness-150 hover:cursor-pointer py-1"
              onClick={async () => {
                await putProductQuery.mutateAsync({
                  params: { id: props.product.productId },
                  data: {
                    name: null,
                    description: null,
                    category: undefined,
                    withdrawn: props.product.withdrawn ? false : true,
                  },
                });

                props.refetch();
              }}
            >
              Zmień
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default OrderContainerCompany;
