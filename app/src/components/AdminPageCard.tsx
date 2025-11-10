import type { Product } from "../api/jInshanBodyShopApi.schemas";
import Item from "../assets/item.png";

interface AdminPageCard {
  product: Product;
}

function AdminPageCard(props: AdminPageCard) {
  return (
    <div className="my-3 w-full relative z-20">
      <img src={Item} width={100} height={100} className="float-left mr-3" />
      <div>
        <p className="font-semibold">{props.product.name}</p>
        <p>{props.product.price} PLN</p>
        <p>Ilość: {props.product.quantity}</p>
        <p>Łącznie: {props.product.quantity! * props.product.price!}</p>
      </div>
    </div>
  );
}

export default AdminPageCard;
