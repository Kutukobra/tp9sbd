import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import Navbar from "../components/Navbar";


import { useState, useRef, useEffect } from "react";

function Home() {

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
                    highlightColor: 0xFFFFFF,
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
        <div ref={vantaRef} className="fixed
            top-0
            left-0
            w-full
            h-dvh
            -z-20">
            <Navbar />
            <main className="bg-amber-700">
                
            </main>
        </div>
    )
}

export default Home;