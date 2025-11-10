import type { Product } from "../api/jInshanBodyShopApi.schemas";
import Modal from "./Modal";
import { useDeleteProduct } from "../api/product/product";

interface EditProductModalProps {
  product: Product;
  setIsOpen: () => void;
  refetch: () => void;
}

function DeleteModal(props: EditProductModalProps) {
  const deleteQuery = useDeleteProduct();

  return (
    <Modal
      isOpen={true}
      onClose={() => {
        props.setIsOpen();
      }}
    >
      <h1 className="text-xl font-bold">
        Czy jestes pewien ze chcesz usunać ten produkt?
      </h1>
      <br />

      <div className="flex w-full justify-center mt-auto">
        <button
          type="button"
          className="w-1/3 bg-footer text-white rounded-md mr-3"
          onClick={() => props.setIsOpen()}
        >
          Nie
        </button>
        <button
          className="w-1/3 border border-black rounded-md ml-3"
          onClick={async () => {
            await deleteQuery.mutateAsync({
              params: { id: props.product.productId },
            });

            props.refetch();
            props.setIsOpen();
          }}
        >
          Tak
        </button>
      </div>
    </Modal>
  );
}

export default DeleteModal;
