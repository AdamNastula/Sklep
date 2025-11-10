import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import NavBar from "../components/NavBar";
import ControlBar from "../components/ControlBar";
import Basket from "../components/Basket";
import { useEffect, useState } from "react";
import { useGetGetProducts } from "../api/product/product";
import { toast, Toaster } from "react-hot-toast";
import { ProductType } from "../api/jInshanBodyShopApi.schemas";
import Paginator from "../components/Paginator";

function ShopTecnica() {
  const [isBasketOpen, setBasketOpen] = useState(false);
  const [filters, setFilters] = useState<ProductType[]>([]);
  const [sortAscending, setSortAscending] = useState(true);
  const [nameFilter, setNameFilter] = useState("");
  const [deboucedName, setDebouncedName] = useState("");
  const [page, setPage] = useState(1);
  const query = useGetGetProducts({
    "filterByCategories[]": filters,
    filterByWithdrawn: false,
    orderByColumn: "price",
    orderAscending: sortAscending,
    filterByName: deboucedName,
    page: page,
    shop: 1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(nameFilter);
    }, 500);

    return () => clearTimeout(timer);
  }, [nameFilter]);

  useEffect(() => {
    if (deboucedName.trim() === "") return;
    query.refetch();
  }, [deboucedName, query]);

  const showToast = () => {
    toast.success("Dodano do koszyka!");
  };

  const setFiltersFromControlBar = (
    filter: ProductType,
    filterActive: boolean,
  ) => {
    if (filterActive) {
      filters.push(filter);
    } else {
      filters.splice(
        filters.findIndex((element) => {
          return element == filter;
        })!,
        1,
      );
    }

    setFilters([...filters]);
  };

  return (
    <div className="bg-main-color flex flex-col h-fit min-h-dvh mx-0 pt-32 overflow-clip">
      <NavBar setBasketOpen={setBasketOpen}></NavBar>
      <Basket
        isBasketOpen={isBasketOpen}
        setBasketOpen={setBasketOpen}
      ></Basket>
      <div className="w-2/3 max-w-[1200px] h-[400px] bg-black mx-auto"></div>
      <div className="max-w-[1000px] min-h-[300px] mx-auto mb-2">
        <ControlBar
          setSortingOrder={setSortAscending}
          sortingOrder={sortAscending}
          setFilter={setFiltersFromControlBar}
          setNameFilter={setNameFilter}
        ></ControlBar>
        <div className="flex mt-20 flex-row flex-wrap justify-center min-h-[300px] min-w-[]">
          {query.isFetched &&
            query.data != undefined &&
            query.data.items != null &&
            query.data.items != undefined &&
            query.data?.items.map((product) => (
              <ItemCard
                key={product.productId}
                product={product}
                showToast={showToast}
              ></ItemCard>
            ))}

          {query.isLoading && (
            <div className="flex justify-center p-4">
              <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        <Paginator
          pages={query.data?.maxPages}
          onChangePage={setPage}
          startingPage={1}
        ></Paginator>
      </div>
      <Toaster position="bottom-right"></Toaster>
      <Footer></Footer>
    </div>
  );
}

export default ShopTecnica;
