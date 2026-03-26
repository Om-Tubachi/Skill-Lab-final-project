import React from "react";
import Header from "./components/Header/Header.jsx";
import {Outlet} from 'react-router-dom';
import ColorBends from "@/components/ColorBends.jsx";

function Layout() {
    return (
        <div
            style={{position: 'relative', overflow:'hidden'}}
            className="flex-col justify-center bg-[#0a0a0a]">
            <div style={{position: 'fixed', inset: 0, zIndex: 0}}>
                <ColorBends
                    style={{position: 'fixed', inset: 0, zIndex: 0}}
                    colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
                    rotation={0}
                    speed={0.2}
                    scale={1}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    parallax={0.5}
                    noise={0.1}
                    transparent
                    autoRotate={0}
                    color=""
                />

            </div>
            <div style={{position: 'relative', zIndex: 1}}>
                <Header/>
                <Outlet/>
            </div>

        </div>
    )

}

export default Layout;