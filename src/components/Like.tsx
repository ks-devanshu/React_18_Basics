import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

interface LikeProps{
    handleClick : () => void;
}

function Like({handleClick} : LikeProps) {
    const [isLiked, setIsLiked] = useState(false);

    const toggle = () => {
        setIsLiked(!isLiked);
        handleClick();
    }

    if(!isLiked)
        return <GoHeart size={100} onClick={toggle} cursor={'pointer'}></GoHeart>
    return <GoHeartFill size={100} color="red" onClick={toggle} cursor={'pointer'}></GoHeartFill>
}

export default Like;