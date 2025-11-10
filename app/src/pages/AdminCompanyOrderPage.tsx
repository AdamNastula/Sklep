import { useGetGetOrdersCompany } from "../api/order/order";
import Dropdown from "../components/Dropdown";
import OrderContainerCompany from "../components/OrderContainerCompany";
import AdminMenu from "../components/AdminMenu";
import { useAuth0 } from "@auth0/auth0-react";

function AdminCompanyOrderPage() {
  const auth0 = useAuth0();

  const query = useGetGetOrdersCompany({
    page: 1,
    pageSize: 10,
    orderAscending: true,
    orderByColumn: "date",
    orderByStatus: [],
  });

  return (
    auth0.isAuthenticated && (
      <div className="w-dvw h-dvh bg-main-color flex py-20">
        <AdminMenu selectedOption="company"></AdminMenu>
        <div className="w-9/10 px-10 h-full overflow-auto">
          <div className="w-full flex py-3 border-black border-b font-semibold sticky top-0 bg-main-color min-w-[1300px]">
            <p className="w-1/6">Nazwa</p>
            <p className="w-1/6">Nip</p>
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
                <OrderContainerCompany
                  order={o}
                  refetch={async () => await query.refetch()}
                ></OrderContainerCompany>
              ))}
          </div>
        </div>
      </div>
    )
  );
}

export default AdminCompanyOrderPage;
