import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
const [count, setCount] = useState(0);

const increaseCount = () => {
if (count < 2) {
    setCount(count + 1);
} else {
    setCount(0);
}
};

const decreaseCount = () => {
if (count > 0) {
    setCount(count - 1);
} else {
    setCount(2);
}
};

return (
<div>
    <div onClick={decreaseCount} className="prev">
    <ArrowBackIosIcon />
    </div>
    <div></div>
    <div className="container">
    <img
        className="image"
        src={images[count].img}
        alt={images[count].title}
    />
    <h1 className="title">{images[count].title}</h1>
    <p className="subtitle">{images[count].subtitle}</p>
    </div>
    <div onClick={increaseCount} className="next">
    <ArrowForwardIosIcon />
    </div>
</div>
);
}

export default Carousel;
