import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const band = require("../images/band1.jpeg")
const guitar = require("../images/guitar.jpeg")
const karaoke = require("../images/karaoke.jpeg")
const laser = require("../images/laser.jpeg")

const items = [
    {
        src: band,
        caption: 'MusicACT represents and promotes Canberra music culture.'
    },
    {
        src: karaoke,
        caption: 'by providing advice and access to resources.'
    },
    {
        src: karaoke,
        altText: 'Slide 3',
        caption: 'by providing information and professional development and policy development and advocacy to government business and the community.'
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