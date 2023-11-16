import { STIVEN } from "../article-mock"
import './Painter.css';
import Like from './Like';
import { LEONARDO } from "../article-mock";

function Painter() {
    return (
        <div className="main">
            <h1>{LEONARDO.name}</h1>
            <div>
                <div className="description">
                    <div>
                        <p>{LEONARDO.name} - {LEONARDO.description}</p>
                    </div>
                    <div>
                        <img src={LEONARDO.img} alt="Stiven King" />
                    </div>
                </div>
                <div>
                    <h3>Життєпис</h3>

                    <hr />

                    <h5>Дитинство</h5>
                    <p>{LEONARDO.childhood}</p>

                    <h5>Творче життя</h5>
                    <p>{LEONARDO.creative_life}</p>
                    <p>{LEONARDO.creative_life2}</p>
                    <p>{LEONARDO.creative_life3}</p>
                    <p>{LEONARDO.creative_life4}</p>
                    <p>{LEONARDO.creative_life5}</p>

                    <hr />

                    <h5>Мистецтво</h5>
                    <p>{LEONARDO.art}</p>
                    <p>{LEONARDO.art2}</p>
                </div>
                <Like />
            </div>
        </div >
    );
}

export default Painter;