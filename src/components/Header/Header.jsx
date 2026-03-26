import React from 'react'
import GooeyNav from "@/components/GooeyNav.jsx";


const items = [
    {label: "home", link: "/"},
    {label: "Day 1", link: "/1"},
    {label: "Day 2", link: "/2"},
    {label: "Day 3", link: "/3"},
];

const Header = () => {
    return (
        <div style={{height: 'fit-content', position: 'relative'}}
             className='flex justify-center align-center py-5'
        >
            <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
            <span className="material-symbols-outlined text-8xl bg-transparent hover:cursor-pointer hover:rounded-full hover:bg-white/10 hover:backdrop-blur-lg hover:border-white/2 rounded-2xl shadow-2xl transition-all p-3 hover:py-4 text-white absolute right-10">
                login
            </span>
        </div>
    )
}
export default Header
