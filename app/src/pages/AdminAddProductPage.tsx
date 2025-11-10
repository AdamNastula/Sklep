import { useState } from "react";
import AdminMenu from "../components/AdminMenu";
import ImageUploader from "../components/ImageUploader";
import { usePostProduct } from "../api/product/product";
import { usePostOvh } from "../api/ovh/ovh";
import { toast, Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function AdminAddProductPage() {
  const auth0 = useAuth0();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(0);
  const [shop, setShop] = useState(0);
  const [wrongData, setWrongData] = useState(false);
  const postProductQuery = usePostProduct();
  const urlQuery = usePostOvh();
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);

  const handleUpload = async (id: string) => {
    if (!file1) return;
    if (!file2) return;
    if (!file3) return;
    if (!file4) return;

    const presignUrl1 = await urlQuery.mutateAsync({
      data: { fileName: id + "_1", contentType: file1.type },
    });

    const presignUrl2 = await urlQuery.mutateAsync({
      data: { fileName: id + "_2", contentType: file2.type },
    });

    const presignUrl3 = await urlQuery.mutateAsync({
      data: { fileName: id + "_3", contentType: file3.type },
    });

    const presignUrl4 = await urlQuery.mutateAsync({
      data: { fileName: id + "_4", contentType: file4.type },
    });

    await axios.put(presignUrl1, file1, {
      headers: {
        "Content-Type": file1.type,
      },
    });

    await axios.put(presignUrl2, file2, {
      headers: {
        "Content-Type": file2.type,
      },
    });

    await axios.put(presignUrl3, file3, {
      headers: {
        "Content-Type": file3.type,
      },
    });

    await axios.put(presignUrl4, file4, {
      headers: {
        "Content-Type": file4.type,
      },
    });

    const publicUrl1 = presignUrl1.split("?")[0];
    const publicUrl2 = presignUrl2.split("?")[0];
    const publicUrl3 = presignUrl3.split("?")[0];
    const publicUrl4 = presignUrl4.split("?")[0];

    console.log(publicUrl1);
    console.log(publicUrl2);
    console.log(publicUrl3);
    console.log(publicUrl4);
  };

  if (postProductQuery.status == "success") {
    toast.dismissAll();
    toast.success("Dodano produkt!");
  } else if (postProductQuery.status == "error") {
    toast.dismissAll();
    toast.error("Nie udało się dodać produktu.");
  }

  return (
    auth0.isAuthenticated && (
      <div className="w-dvw h-dvh flex py-20 bg-main-color overflow-clip">
        <Toaster position="bottom-right"></Toaster>
        <AdminMenu selectedOption="addproduct"></AdminMenu>
        <div className="w-9/10 h-full px-5 overflow-auto">
          <div className="flex flex-col justify-between">
            <p className="w-1/4 mx-auto font-bold">Nazwa</p>
            <input
              placeholder="Produkt 1"
              className="border border-b rounded-lg px-1 h-[40px] w-1/4 mx-auto"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>

            <p className="w-1/4 mx-auto font-bold mt-3">Cena</p>
            <input
              placeholder="100"
              className="border border-b rounded-lg px-1 h-[40px] w-1/4 mx-auto"
              type="number"
              onChange={(e) => {
                setPrice(Number(e.target.value));
              }}
            ></input>

            <p className="w-1/4 mx-auto font-bold mt-3">Ilość</p>
            <input
              placeholder="100"
              className="border border-b rounded-lg px-1 h-[40px] w-1/4 mx-auto"
              type="number"
              onChange={(e) => {
                setQuantity(Number(e.target.value));
              }}
            ></input>

            <p className="w-1/4 mx-auto font-bold mt-3">Opis</p>
            <textarea
              placeholder="Lorem Ipsum"
              className="border border-b rounded-lg px-1 w-1/4 mx-auto"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={8}
            ></textarea>

            <p className="w-1/4 mx-auto font-bold mt-3">Kategoria</p>
            <div className="flex flex-col w-1/4 mx-auto">
              <div className="flex">
                <p>Felgi</p>
                <input
                  type="radio"
                  name="category"
                  className="ml-auto"
                  defaultChecked={true}
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
                  onChange={(e) => {
                    if (e.target.value) setCategory(3);
                  }}
                ></input>
              </div>

              <div className="flex">
                <p>Carbon</p>
                <input
                  type="radio"
                  name="category"
                  className="ml-auto"
                  onChange={(e) => {
                    if (e.target.value) setCategory(4);
                  }}
                ></input>
              </div>
            </div>
          </div>

          <div className="w-1/4 mx-auto mt-3">
            <p className="font-bold">Sklep</p>
            <div className="flex">
              <p>Jinshan</p>
              <input
                defaultChecked={true}
                type="radio"
                name="shop"
                className="ml-auto"
                onChange={(e) => {
                  if (e.target.value) setShop(0);
                }}
              ></input>
            </div>

            <div className="flex">
              <p>Tecnica</p>
              <input
                type="radio"
                name="shop"
                className="ml-auto"
                onChange={(e) => {
                  if (e.target.value) setShop(1);
                }}
              ></input>
            </div>

            <div className="flex">
              <p>Third</p>
              <input
                type="radio"
                name="shop"
                className="ml-auto"
                onChange={(e) => {
                  if (e.target.value) setShop(2);
                }}
              ></input>
            </div>
          </div>

          <div className="flex flex-col justify-between mt-20">
            <ImageUploader
              setFile={setFile1}
              title="Wybierz miniaturke"
            ></ImageUploader>
            <ImageUploader
              setFile={setFile2}
              title="Wybierz pierwsze zdjęcie"
            ></ImageUploader>
            <ImageUploader
              setFile={setFile3}
              title="Wybierz drugie zdjęcie"
            ></ImageUploader>
            <ImageUploader
              setFile={setFile4}
              title="Wybierz trzecie zdjęcie"
            ></ImageUploader>
          </div>

          {wrongData && (
            <p className="text-red-600 mt-10 block mx-auto">
              Proszę podać wszystkie wymagane informacje.
            </p>
          )}

          <button
            type="button"
            onClick={async () => {
              if (
                name == "" ||
                price == 0 ||
                description == "" ||
                quantity == 0
              ) {
                setWrongData(true);
                return;
              }

              if (!file1) return;
              if (!file2) return;
              if (!file3) return;
              if (!file4) return;

              const id = await postProductQuery.mutateAsync({
                data: {
                  name: name,
                  price: price,
                  description: description,
                  category: category,
                  shop: shop,
                  quantity: quantity,
                },
              });

              setWrongData(false);
              handleUpload(id);
              toast.loading("Trwa dodawanie");
            }}
            className="w-1/4 block mx-auto py-3 bg-footer rounded-lg text-white mt-5 hover:brightness-150 hover:cursor-pointer"
          >
            Dodaj produkt
          </button>
        </div>
      </div>
    )
  );
}

export default AdminAddProductPage;
