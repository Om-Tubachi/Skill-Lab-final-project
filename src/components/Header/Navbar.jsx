import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ items = [], initialActiveIndex = 0 }) => {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Desktop pill */}
            <div
                className="hidden md:flex items-center px-6 py-3 rounded-full"
                style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                }}
            >
                <ul className="flex items-center gap-1 list-none m-0 p-0">
                    {items.map((item, index) => {
                        const isActive = activeIndex === index
                        return (
                            <li key={index}>
                                <Link
                                    to={item.link}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative px-7 py-2 rounded-full text-lg font-medium transition-all duration-500 inline-block"
                                    style={{
                                        color: isActive ? '#000' : 'white',
                                        background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            {/* Mobile: hamburger */}
            <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-full"
                style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                }}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
            >
                <span className="block w-4 h-px bg-white transition-all duration-300"
                      style={{ transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none' }} />
                <span className="block w-4 h-px bg-white transition-all duration-300"
                      style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-4 h-px bg-white transition-all duration-300"
                      style={{ transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none' }} />
            </button>

            {/* Mobile: dropdown */}
            {menuOpen && (
                <div
                    className="md:hidden absolute top-16 left-4 right-16 rounded-2xl z-50"
                    style={{
                        background: 'rgba(15,15,15,0.85)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255,255,255,0.10)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                    }}
                >
                    <ul className="flex flex-col list-none m-0 p-2">
                        {items.map((item, index) => {
                            const isActive = activeIndex === index
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        onClick={() => { setActiveIndex(index); setMenuOpen(false) }}
                                        className="flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                                        style={{
                                            color: isActive ? '#000' : 'rgba(255,255,255,0.8)',
                                            background: isActive ? 'rgba(255,255,255,0.08)' : 'transparent',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar