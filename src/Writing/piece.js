import { useParams } from "react-router";
import Pieces from "./pieces";
import { useEffect, useState } from "react";
import './index.css';
function Piece() {
    const { piece } = useParams();
    const [pieceObject, setPieceObject] = useState(null);
    useEffect(() => {
        setPieceObject(Pieces().filter((pieceObject) => pieceObject.name === piece)[0]);
    }, [piece]);
    return <div>{pieceObject && <div className="bg-writing-container">
        <h1>{pieceObject.title}</h1>
        <p>{pieceObject.date}</p>
        {pieceObject.component}
        <p><hr/>If you have any comments, if you agree with me, or if you disagree with me, please email bengardner433@gmail.com.
        {pieceObject.note && <p> Note: {pieceObject.note}</p>}</p>
        </div>}</div>
}
export default Piece;