import Navbar from "../components/Navbar";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import { useState, useRef, useEffect } from "react";

function Cards() {
    return (
        <>
            <Navbar />
            <main>
                <CardGrid />
            </main>
        </>
    )
}

function CardGrid() {

    const cardList = [
        {
            name: "Kim Kitsuragi",
            image: "https://i.imgur.com/6zSCXzQ.jpeg",
            description: "Lt."
        },
        {
            name: "The Hanged Man",
            image: "https://i.imgur.com/0HXeBc5.jpeg",
            description: "Hanged or enlightened?"
        },
        {
            name: "Kim Kitsuragi",
            image: "https://i.imgur.com/6zSCXzQ.jpeg",
            description: "Lt."
        },
        {
            name: "The Hanged Man",
            image: "https://i.imgur.com/0HXeBc5.jpeg",
            description: "Hanged or enlightened?"
        },
        {
            name: "Kim Kitsuragi",
            image: "https://i.imgur.com/6zSCXzQ.jpeg",
            description: "Lt."
        },
        {
            name: "The Hanged Man",
            image: "https://i.imgur.com/0HXeBc5.jpeg",
            description: "Hanged or enlightened?"
        },
        {
            name: "Kim Kitsuragi",
            image: "https://i.imgur.com/6zSCXzQ.jpeg",
            description: "Lt."
        },
        {
            name: "The Hanged Man",
            image: "https://i.imgur.com/0HXeBc5.jpeg",
            description: "Hanged or enlightened?"
        },
    ]

    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef();

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                FOG({
                    el: vantaRef.current,
                    THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    highlightColor: 0x956FA3,
                    midtoneColor: 0xDDE2DB,
                    lowlightColor: 0x892E3A,
                    baseColor: 0x00000,
                    blurFactor: 0.5,
                    speed: 1.0,
                    zoom: 1.0
                })
            );
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect, vantaRef.current]);

    return (
        <>
        <section
            ref={vantaRef}
            className="
            fixed
            top-0
            left-0
            w-full
            h-dvh
            -z-20
            "
        ></section>

        <section
            className="
            relative
            -z-10
            min-h-screen
            p-6
            grid
            gap-6
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            "
        >
            {cardList.map((card) => (
            <Card
                key={card.name + card.description}
                name={card.name}
                image={card.image}
                description={card.description}
            />
            ))}
        </section>
        </>
    )
}

function Card({name, image, description}) {
    return (
        <div className="
                rounded-xl
                bg-amber-950/20
                shadow-2xl
            ">
            <h2 className="
                text-center
                text-4xl
                m-2 p-1
                font-bold
            ">
                {name}
            </h2>
            <figure>
                <img src={image} alt={name}/>
                <figcaption className="
                    text-center
                    text-xl
                    text-amber-100/70
                    m-2 p-1
                    italic
                    "
                >
                    {description}
                </figcaption>
            </figure>
        </div>
    )
}

export default Cards;