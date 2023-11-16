import { useState } from "react";
import LIKE from '../images/like.png';
import PLIKE from '../images/plike.png';
import DISLIKE from '../images/dislike.png';
import PDISLIKE from '../images/pdislike.png';

function Liker() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [countl, setCountl] = useState(0);
    const [countd, setCountD] = useState(0);

    const likes = () => {
        if (like === 0) {
            setLike(1);
            setCountl(countl + 1);
        }
        else {
            setLike(0);
            setCountl(countl - 1);
        }
    }

    const dislikes = () => {
        if (dislike === 0) {
            setDislike(1);
            setCountD(countd + 1);
        }
        else {
            setDislike(0);
            setCountD(countd - 1);
        }
    }

    return (
        <>
            {like === 0 ? (
                <button onClick={likes}><img src={LIKE} alt="like" /></button>
            ) : (
                <button onClick={likes}><img src={PLIKE} alt="like" /></button>
            )}
            {dislike === 0 ? (
                <button onClick={dislikes}><img src={DISLIKE} alt="like" /></button>
            ) : (
                <button onClick={dislikes}><img src={PDISLIKE} alt="like" /></button>
            )}
            <p>Likes: [{countl}]</p>
            <p>Dislikes: [{countd}]</p>
        </>
    )
}

export default Liker;