import { Link, useParams } from "react-router";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import InstagramIcon from "../assets/brand-instagram-black.svg";
import EmailIcon from "../assets/mail.svg";
import PhoneIcon from "../assets/phone.svg";
import {
  useGetGetOrderCompany,
  useGetGetOrderPersonal,
} from "../api/order/order";

function ConfirmationPage() {
  const { id, isPersonal } = useParams<{ id: string; isPersonal: string }>();
  const personalQuery = useGetGetOrderPersonal({ id: id });
  const companyQuery = useGetGetOrderCompany({ id: id });
  const order = isPersonal == "true" ? personalQuery.data : companyQuery.data;
  const trackingRoute = isPersonal == "true" ? "personal" : "company";

  return (
    <div className="bg-main-color min-h-dvh flex flex-col">
      <NavBar setBasketOpen={() => {}}></NavBar>
      <div className="max-w-dvw bg-main-color pt-32">
        <div className="max-w-[1000px] mx-auto h-fit text-center overflow-clip">
          <h1 className="text-4xl font-semibold">
            Dziękujemy za złożenie zamówienia!
          </h1>
          <div className="w-[350px] mx-auto text-left font-medium p-10 border border-black mt-10 rounded-xl">
            <h2 className="text-xl">Numer zamówienia:</h2>
            <p className="font-extrabold">{order?.number}</p>
            <h2 className="text-xl mt-5">Płatność</h2>
            <p>Prosimy o przelew na numer konta:</p>
            <p className="font-extrabold">89 1010 2020 3030 4040</p>
            <p className="mt-3">Tytuł przelewu:</p>
            <p className="font-extrabold">Zamówienie - {order?.number}</p>
            <p className="mt-3">Kwota:</p>
            <p className="font-extrabold">{order?.orderValue} PLN</p>
          </div>
          <h1 className="mt-10 text-2xl mb-3 font-semibold">
            W razie pytań - czekamy na twój kontakt!
          </h1>

          <div className="flex flex-col md:flex-row mx-auto max-w-[600px] justify-between text-xl font-normal">
            <Link to="https://www.instagram.com/jinshan.bodyshop/">
              <div className="flex justify-center">
                <img src={InstagramIcon} className="float-left"></img>
                Instagram
              </div>
            </Link>

            <div className="flex justify-center">
              <img src={EmailIcon} className="float-left"></img>
              jinshanbodyshop@gmail.com
            </div>

            <div className="flex justify-center">
              <img src={PhoneIcon} className="float-left"></img>111 222 333
            </div>
          </div>

          <p className="mt-14">
            O postępach w realizacji Twojego zamówienia będziemy Cię informować
            mailowo.
          </p>
          <p>
            Status swojego zamówienia możesz sprawdzić pod tym{" "}
            <Link to={`/order/${trackingRoute}/status/${order?.orderId}`}>
              <span className="border-b border-black">adresem</span>
            </Link>
            .
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ConfirmationPage;
