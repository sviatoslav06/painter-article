import { COLLECTION } from "../article-mock";
import { useState } from "react";
import "./Paintings.css"

function Paintings() {
    const [counter, setCount] = useState(1);
    const [painting, setPainting] = useState(COLLECTION[counter]);

    const next = () => {
        setCount(counter + 1);
        if (counter === 4) setCount(0);
        setPainting(COLLECTION[counter])
    }

    const previous = () => {
        setCount(counter - 1);
        if (counter === 0) setCount(3);
        setPainting(COLLECTION[counter]);
    }

    return (
        <div>
            <div className="images">
                <button onClick={previous}>Previous</button>
                <img src={painting} alt="painting" />
                <button onClick={next}>Next</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Paintings;