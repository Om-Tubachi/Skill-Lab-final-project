import React from 'react'
import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div id='box-1' className='w-full m-3 p-3 my-20'>
            <div
                ref={containerRef}
                style={{ position: 'relative' }}
                className='text-8xl text-white my-5 mb-20 font-extrabold'
            >
                <VariableProximity
                    label={'Skill - lab, React.js'}
                    className={'variable-proximity-demo'}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                />
            </div>

            {/* Sub-hero */}
            <div className="flex flex-col gap-3 max-w-xl text-left m-auto justify-center align-middle">
                <div className="flex items-center gap-2 text-xs font-mono font-normal uppercase tracking-widest"
                     style={{ color: 'rgba(134,239,172,0.7)' }}
                >
                    <span>3 Days</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span>23rd March 2026</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
                    <span>React.js</span>
                </div>

                {/* Body lines */}
                <p className="text-[1.05rem] font-medium leading-relaxed"
                   style={{ color: 'rgba(255,255,255,0.78)' }}
                >
                    The skill lab lasted for the duration of{' '}
                    <span style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>3 days</span>{' '}
                    from 23rd March 2026.
                </p>
                <p className="text-[1.05rem] font-medium leading-relaxed"
                   style={{ color: 'rgba(255,255,255,0.78)' }}
                >
                    Guided by resource people, the students learnt basics of the{' '}
                    <span style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>React.js</span>{' '}
                    UI library.
                </p>
            </div>
        </div>
    );
};

export default Hero;