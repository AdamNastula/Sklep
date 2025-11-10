import classNames from "classnames";
import { Link } from "react-router";
import Logo from "../assets/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

interface AdminMenuProps {
  selectedOption: string;
}

function AdminMenu(props: AdminMenuProps) {
  const auth0 = useAuth0();

  return (
    <div className="w-1/10 min-w-[173px] h-full flex flex-col justify-between border-r border-black">
      <img className="mx-5" src={Logo}></img>
      <div className="h-fit mx-auto flex flex-col w-full text-center">
        <Link to="/admin">
          <p
            className={classNames({
              "font-bold": props.selectedOption == "personal",
              " w-full": true,
            })}
          >
            Zamowienia prywatne
          </p>
        </Link>
        <Link to="/admin/company">
          {" "}
          <p
            className={classNames({
              "font-bold": props.selectedOption == "company",
              " w-full": true,
            })}
          >
            Zamowienia firmowe
          </p>
        </Link>
        <Link to="/admin/products">
          {" "}
          <p
            className={classNames({
              "font-bold": props.selectedOption == "products",
              " w-full": true,
            })}
          >
            Produkty
          </p>
        </Link>
        <Link to="/admin/add-product">
          {" "}
          <p
            className={classNames({
              "font-bold": props.selectedOption == "addproduct",
              " w-full": true,
            })}
          >
            Dodaj produkt
          </p>
        </Link>
      </div>
      <button
        type="button"
        className="bg-footer p-3 rounded-xl mx-3 text-white hover:brightness-150 hover:cursor-pointer"
        onClick={() =>
          auth0.logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Wyloguj sie
      </button>
    </div>
  );
}

export default AdminMenu;
