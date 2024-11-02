import { useState } from 'react';

const useToggleLike = (initialLiked = false) => {
    const [liked, setLiked] = useState(initialLiked);

    const toggleLike = () => {
        setLiked((prevLiked) => !prevLiked);
    };

    return { liked, toggleLike };
};

export default useToggleLike;
