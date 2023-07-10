import { useContext } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import { DataContext } from "../context/DataContext";
import { Card } from "react-bootstrap";

export default function Home() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="galeria grid-columns-5 p-3">
      {data.map((image) => (
        <Card key={image.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image.src.original} />
          <Card.Body>
            <Card.Title>{image.alt}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
