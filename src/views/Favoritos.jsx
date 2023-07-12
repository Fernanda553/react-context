import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Favoritos() {
  const { setData, selector } = useContext(DataContext);

  const likedImage = () => {
    const filterLiked = selector.filter((image) => image.liked === true);
    setData(filterLiked);
  };
  return (
    <>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">{likedImage}</div>
    </>
  );
}
