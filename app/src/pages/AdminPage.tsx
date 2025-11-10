import { useGetGetOrdersPersonal } from "../api/order/order";
import OrderContainer from "../components/OrderContainer";
import Dropdown from "../components/Dropdown";
import AdminMenu from "../components/AdminMenu";
import { useAuth0 } from "@auth0/auth0-react";

function AdminPage() {
  const auth0 = useAuth0();

  const query = useGetGetOrdersPersonal({
    page: 1,
    pageSize: 10,
    orderAscending: true,
    orderByColumn: "date",
    orderByStatus: [],
  });

  return (
    auth0.isAuthenticated && (
      <div className="w-dvw h-dvh bg-main-color flex py-20">
        <AdminMenu selectedOption="personal"></AdminMenu>

        <div className="w-9/10 px-10 h-full overflow-auto">
          <div className="w-full flex py-3 border-black border-b font-semibold sticky top-0 bg-main-color min-w-[1300px]">
            <p className="w-1/6">Imie</p>
            <p className="w-1/6">Nazwisko</p>
            <p className="w-1/6">Adres email</p>
            <p className="w-1/6">Numer zamowienia</p>
            <p className="w-1/6">Data</p>
            <div className="w-1/6">
              <Dropdown text="Status">
                <div className="flex flex-col">
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Przyjęte</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Opłacone</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Gotowe do wysyłki</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Wysłane</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Dostarczone</p>
                  </div>
                  <div className="flex">
                    <input type="checkbox"></input>
                    <p className="ml-3">Anulowane</p>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>

          <div className="w-full h-full overflow-auto">
            {query.isFetched &&
              query.data!.items!.map((o) => (
                <OrderContainer
                  order={o}
                  refetch={() => query.refetch()}
                ></OrderContainer>
              ))}
          </div>
        </div>
      </div>
    )
  );
}

export default AdminPage;
