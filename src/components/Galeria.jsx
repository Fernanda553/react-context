import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import DataProvider from "../context/DataContext";

export default function Galeria() {
  const { data, setData } = useContext(DataProvider);

  const changeLiked = (id) => {
    const likedPhoto = data.findIndex((image) => image.id === id);
    data[likedPhoto].liked = !data[likedPhoto].liked;

    setData([...data]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((image) => (
        <div
          onClick={() => changeLiked(image.id)}
          key={image.id}
          className="foto"
          style={{ backgroundImage: `url(${image.src.original})` }}
        >
          <Heart filled={image.liked} />
          <h4>{image.alt}</h4>
        </div>
      ))}
    </div>
  );
}
