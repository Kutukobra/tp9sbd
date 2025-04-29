import Navbar from "../components/Navbar";
import PoemData from "../assets/PoemData";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import useSound from "use-sound";
import psyche from "../assets/audio/psyche.mp3"

import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

function Poem() {
    // Index and sfx
    const [index, setIndex] = useState(0);
    const [playbackRate, setPlaybackRate] = useState(0.1);

    // Poem Data, separate file
    const data = new PoemData("Fairuz", "ᓭ̴̡̄ᔑ̴̙͝�̵͉͊�̷̙͐!̶̣̆¡̸͓͊↸̶̙̏");

    const [changeSfx] = useSound(psyche, {
        playbackRate,
        interrupt: false,
    });

    useEffect(() => {
        setPlaybackRate(Math.abs(Math.sin(index / Math.PI) + Math.cos(index * 2) * 0.2));
        changeSfx()
    }, [index]);

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
                    minHeight: 100.00,
                    minWidth: 100.00,
                    highlightColor: 0xFFFFFF,
                    midtoneColor: 0x872B38,
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
        <div ref={vantaRef} 
            className="h-dvh"
            >
            <Navbar />
            
            <main 
                className="
                flex
                items-center justify-center
            ">
                <section className="
                        m-10
                        bg-amber-950/40
                        rounded-xl
                        p-2
                        w-150
                        h-150
                        md:h-150
                        ">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={index}
                            className="
                                p-3
                                items-center justify-left
                                text-justify
                                align-middle
                                w-full
                                h-3/4
                                text-xl
                                md:text-3xl
                                rounded-l
                                overflow-scroll
                                font-mono
                            "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {data.narrative[index]}
                        </motion.p>
                    </AnimatePresence>
                    <div className="
                        gap-10
                        w-full
                        h-1/3
                        shadow-2xl
                        bg-amber-500
                        items-center
                        flex
                        text-8xl
                        relative
                        left-0.5
                        top-0.5
                        text-gray-800
                    ">
                        <button
                            className="
                            hover:animate-pulse
                            hover:cursor-pointer
                            " 
                            onClick={() => setIndex((index) => index - 1 < 0 ? 0 : index - 1)}>
                            {"<"}
                        </button>
                        <p className="text-xl w-4">
                            {index + 1}
                        </p>
                        <button
                            className="
                            hover:animate-pulse
                            hover:cursor-pointer
                            "
                            onClick={() => setIndex((index) => index + 1 >= data.narrative.length ? data.narrative.length : index + 1)}>
                            {">"}
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Poem;