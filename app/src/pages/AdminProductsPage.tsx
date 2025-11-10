import AdminMenu from "../components/AdminMenu";
import { useGetGetProducts } from "../api/product/product";
import ProductContainer from "../components/ProductContainer";
import { useAuth0 } from "@auth0/auth0-react";

function AdminProductsPage() {
  const auth0 = useAuth0();
  const getProductsQuery = useGetGetProducts();

  return (
    auth0.isAuthenticated && (
      <div className="w-dvw h-dvh bg-main-color flex py-20">
        <AdminMenu selectedOption="products"></AdminMenu>
        <div className="w-9/10 px-10 h-full overflow-auto">
          <div className="w-full flex py-3 border-black border-b font-semibold sticky top-0 bg-main-color min-w-[1300px]">
            <p className="w-1/5">Nazwa</p>
            <p className="w-1/5">Cena</p>
            <p className="w-1/5">Opis</p>
            <p className="w-1/5">Kategoria</p>
            <p className="w-1/5">Sklep</p>
          </div>

          <div className="w-full h-full overflow-auto">
            {getProductsQuery.isFetched &&
              getProductsQuery.data!.items!.map((p) => (
                <ProductContainer
                  product={p}
                  refetch={() => getProductsQuery.refetch()}
                ></ProductContainer>
              ))}
          </div>
        </div>
      </div>
    )
  );
}

export default AdminProductsPage;
