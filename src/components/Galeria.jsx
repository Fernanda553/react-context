import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const { data, selector, setSelector } = useContext(DataContext);

  const changeLiked = (image) => {
    image.liked = true;
    setSelector([...data, image]);
    console.log(selector);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((image) => (
        <div
          onClick={changeLiked}
          value={selector}
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
