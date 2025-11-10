import { useState } from "react";
import type { Product } from "../api/jInshanBodyShopApi.schemas";
import Modal from "./Modal";
import { usePutProduct } from "../api/product/product";

interface EditProductModalProps {
  product: Product;
  setIsOpen: () => void;
  refetch: () => void;
}

function EditProductModal(props: EditProductModalProps) {
  const [name, setName] = useState(props.product.name);
  const [price, setPrice] = useState(props.product.price);
  const [quantity, setQuantity] = useState(props.product.quantity);
  const [description, setDescription] = useState(props.product.description);
  const putProductQuery = usePutProduct();
  const [category, setCategory] = useState(props.product.category);
  const [shop, setShop] = useState(props.product.shop);

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        props.setIsOpen();
      }}
    >
      <h1 className="text-xl font-bold">Edytuj produkt</h1>
      <br />
      <div className="flex w-full">
        <div className="w-1/3">
          <p>Nazwa</p>
        </div>
        <div className="w-2/3">
          <input
            value={name!}
            onChange={(e) => setName(e.target.value)}
            className="border border-black rounded-md px-1 w-full"
          ></input>
        </div>
      </div>

      <div className="flex w-full mt-5">
        <div className="w-1/3">
          <p>Cena</p>
        </div>
        <div className="w-2/3">
          <input
            value={price!}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border border-black rounded-md px-1 w-full"
          ></input>
        </div>
      </div>

      <div className="flex w-full mt-5">
        <div className="w-1/3">
          <p>Ilość</p>
        </div>
        <div className="w-2/3">
          <input
            value={quantity!}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-black rounded-md px-1 w-full"
          ></input>
        </div>
      </div>

      <div className="flex w-full mt-5">
        <div className="w-1/3">
          <p>Opis</p>
        </div>
        <div className="w-2/3">
          <textarea
            value={description!}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-black rounded-md px-1 w-full"
          ></textarea>
        </div>
      </div>

      <div className="w-full flex mt-5">
        <div className="w-1/3">
          <p>Kategoria</p>
        </div>
        <div className="w-2/3">
          <div className="flex">
            <p>Felgi</p>
            <input
              type="radio"
              name="category"
              className="ml-auto"
              defaultChecked={category == 0}
              onChange={(e) => {
                if (e.target.value) setCategory(0);
              }}
            ></input>
          </div>

          <div className="flex">
            <p>Zawieszenie</p>
            <input
              type="radio"
              name="category"
              className="ml-auto"
              defaultChecked={category == 1}
              onChange={(e) => {
                if (e.target.value) setCategory(1);
              }}
            ></input>
          </div>

          <div className="flex">
            <p>Układ wydechowy</p>
            <input
              type="radio"
              name="category"
              className="ml-auto"
              defaultChecked={category == 2}
              onChange={(e) => {
                if (e.target.value) setCategory(2);
              }}
            ></input>
          </div>

          <div className="flex">
            <p>Nadwozie</p>
            <input
              type="radio"
              name="category"
              className="ml-auto"
              defaultChecked={category == 3}
              onChange={(e) => {
                if (e.target.value) setCategory(3);
              }}
            ></input>
          </div>

          <div className="flex w-full justify-start">
            <p>Carbon</p>
            <input
              type="radio"
              name="category"
              className="ml-auto"
              defaultChecked={category == 4}
              onChange={(e) => {
                if (e.target.value) setCategory(4);
              }}
            ></input>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-5">
        <div className="w-1/3">
          <p>Kategoria</p>
        </div>
        <div className="w-2/3">
          <div className="flex">
            <p>Jinshan</p>
            <input
              type="radio"
              name="shop"
              className="ml-auto"
              defaultChecked={shop == 0}
              onChange={(e) => {
                if (e.target.value) setShop(0);
              }}
            ></input>
          </div>

          <div className="flex">
            <p>86Tecnica</p>
            <input
              type="radio"
              name="shop"
              className="ml-auto"
              defaultChecked={shop == 1}
              onChange={(e) => {
                if (e.target.value) setShop(1);
              }}
            ></input>
          </div>

          <div className="flex">
            <p>Trzeci</p>
            <input
              type="radio"
              name="shop"
              className="ml-auto"
              defaultChecked={shop == 2}
              onChange={(e) => {
                if (e.target.value) setShop(2);
              }}
            ></input>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center mt-5">
        <button
          type="button"
          className="w-1/3 bg-footer text-white rounded-md mr-3"
          onClick={() => props.setIsOpen()}
        >
          Odrzuć
        </button>
        <button
          className="w-1/3 border border-black rounded-md ml-3"
          onClick={async () => {
            await putProductQuery.mutateAsync({
              data: {
                name: name!,
                description: description!,
                price: price,
                category: category,
                shop: shop,
                quantity: quantity,
              },
              params: { id: props.product.productId },
            });

            props.refetch();
            props.setIsOpen();
          }}
        >
          Zapisz
        </button>
      </div>
    </Modal>
  );
}

export default EditProductModal;
