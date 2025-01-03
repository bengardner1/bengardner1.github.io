import Pieces from './pieces';
import { Link } from 'react-router-dom';
function Writing() {
    const pieces = Pieces();
    return (
        <div>
        <div className="bg-title">  
            <h1>Writing</h1>
            <p>When I'm not coding I like to write about music and sometimes other things. </p>
            <div className='container bg-writing-container'>
            {pieces.map((piece, index) => (
                <div key={index} className='bg-piece'>
                    <h2>{piece.title}</h2>
                    <p>{piece.date}</p>
                    <img src={piece.image} className='bg-writing-image'></img>
                    <Link to={`/writing/${piece.name}`}>Read</Link>
                </div>
            ))}
            </div>
        </div>
    </div>
    );
}
export default Writing;