import { MONA } from "../article-mock";
import "./Painting.css"

function Painting() {
    return (
        <div>
            <h1>Найпопулярніший твір Леонардо да Вінчі</h1>
            <div className="text-photo">
                <div>
                    <h2>{MONA.name}</h2>
                    <p>{MONA.name} - {MONA.description}</p>
                </div>
                <img src={MONA.img} alt="Mona Liza" />
            </div>

            <hr />

            <h5>Історія</h5>
            <p>{MONA.history}</p>

            <hr />

            <h5>Детективна історія «Мони Лізи»</h5>
            <p>{MONA.detective}</p>
        </div>
    );
}

export default Painting;