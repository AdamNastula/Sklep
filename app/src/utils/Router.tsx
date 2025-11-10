import { Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import ItemPage from "../pages/ItemPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";
import ConfirmOrderPage from "../pages/ConfirmOrderPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import ProtectedRoute from "./ProtectedRoute";
import CheckPersonalOrderPage from "../pages/CheckPersonalOrderPage";
import AdminPage from "../pages/AdminPage";
import AdminCompanyOrderPage from "../pages/AdminCompanyOrderPage";
import AdminAddProductPage from "../pages/AdminAddProductPage";
import AdminProductsPage from "../pages/AdminProductsPage";
import AuthorizedRoute from "./AuthorizedRoute";
import CheckCompanyOrderPage from "../pages/CheckCompanyOrderPage";
import ShopJinshan from "../pages/ShopJinshan";
import ShopTecnica from "../pages/ShopTecnica";
import ShopThird from "../pages/ShopThird";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage></LandingPage>}></Route>
      <Route path="/jinshan" element={<ShopJinshan></ShopJinshan>}></Route>
      <Route path="/tecnica" element={<ShopTecnica></ShopTecnica>}></Route>
      <Route path="/third" element={<ShopThird></ShopThird>}></Route>

      <Route element={<AuthorizedRoute></AuthorizedRoute>}>
        <Route path="/admin" element={<AdminPage></AdminPage>}></Route>
      </Route>

      <Route element={<AuthorizedRoute></AuthorizedRoute>}>
        <Route
          path="/admin/products"
          element={<AdminProductsPage></AdminProductsPage>}
        ></Route>
      </Route>

      <Route element={<AuthorizedRoute></AuthorizedRoute>}>
        <Route
          path="/admin/add-product"
          element={<AdminAddProductPage></AdminAddProductPage>}
        ></Route>
      </Route>

      <Route element={<AuthorizedRoute></AuthorizedRoute>}>
        <Route
          path="/admin/company"
          element={<AdminCompanyOrderPage></AdminCompanyOrderPage>}
        ></Route>
      </Route>

      <Route
        path="/order/personal/status/:id"
        element={<CheckPersonalOrderPage></CheckPersonalOrderPage>}
      ></Route>

      <Route
        path="/order/company/status/:id"
        element={<CheckCompanyOrderPage></CheckCompanyOrderPage>}
      ></Route>

      <Route path="/item/:id" element={<ItemPage></ItemPage>}></Route>

      <Route
        element={
          <ProtectedRoute allowedFrom="place" redirectTo="/"></ProtectedRoute>
        }
      >
        <Route
          path="/order/confirm"
          element={<ConfirmOrderPage></ConfirmOrderPage>}
        ></Route>
      </Route>

      <Route
        element={
          <ProtectedRoute allowedFrom="confirm" redirectTo="/"></ProtectedRoute>
        }
      >
        <Route
          path="/order/confirmation/:id/personal/:isPersonal"
          element={<ConfirmationPage></ConfirmationPage>}
        ></Route>
      </Route>

      <Route
        element={
          <ProtectedRoute allowedFrom="basket" redirectTo="/"></ProtectedRoute>
        }
      >
        <Route
          path="/order/place"
          element={<PlaceOrderPage></PlaceOrderPage>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default Router;
