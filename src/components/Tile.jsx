import React from "react";
import { useState } from "react";

const Tile = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <div className={`tile ${isFlipped ? 'flipped' : ''}`}>
            <div className='tileInner'>

                {/* front of the tile */}
                <div className="tileFront">
                    <div className="imgContainer">
                    <img className='tileImg' src={props.img}/>
                    </div>
                    <h3>{props.name}</h3>
                    <p className='tileDescription'>{props.desc}</p>
                    <button className='tileButton' onClick={handleFlip}>more information</button>
                </div>

                {/* back of the tile */}
                <div className="tileBack">
                    <div className="detailsContainer">
                        <h3>Details</h3>
                        <p className="tileMoreInfo">{props.more}</p>
                        <p className="tileMoreInfo">{props.cost}</p>
                    </div>
                    <button className="tileButton" onClick={handleFlip}>go back</button>
                </div>
            </div>
        </div>
    )
}

export default Tile;