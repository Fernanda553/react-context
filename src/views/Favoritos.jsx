import { useContext } from "react";
import DataProvider from "../context/DataContext";

export default function Favoritos() {
  const { data } = useContext(DataProvider);

  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {data
          .filter(({ liked }) => liked)
          .map((image) => (
            <div
              key={image.id}
              className="foto"
              style={{ backgroundImage: `url(${image.src.original})` }}
            ></div>
          ))}
      </div>
    </>
  );
}
