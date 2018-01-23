import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const band = require("../images/band1.jpeg")
const guitar = require("../images/guitar.jpeg")
const karaoke = require("../images/karaoke.jpeg")
const laser = require("../images/laser.jpeg")

const items = [
    {
        src: band,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: karaoke,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: karaoke,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Example = () => {
    return (
        <div>
            {/* <img src={band} /> */}
            <UncontrolledCarousel style={{ height: "40vh" }} items={items} />
        </div>
    )
};

export default Example;