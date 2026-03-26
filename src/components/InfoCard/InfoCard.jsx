import React from 'react'
import rakshithImg from '../../assets/Rakshit H k.jpg'

const InfoCard = () => {
    return (
        <div className='m-3 my-5 flex-col justify-center align-middle bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden'
             style={{ maxWidth: '280px' }}
        >
            {/* Image — full bleed top, square crop */}
            <div className='w-full aspect-square overflow-hidden relative'>
                <img
                    src={rakshithImg}
                    alt="Rakshith H K"
                    className='w-full h-full object-cover object-top'
                    style={{ filter: 'brightness(0.92) contrast(1.05)' }}
                />
                {/* subtle gradient fade into card body */}
                <div className='absolute bottom-0 left-0 right-0 h-16'
                     style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.55))' }}
                />
            </div>

            {/* Content */}
            <div className='p-5 flex flex-col gap-2'>
                <h3 className='text-white font-bold text-xl leading-tight tracking-tight'>
                    Rakshith H K
                </h3>
                <p className='text-sm font-normal leading-relaxed'
                   style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                    Resource Person
                </p>

                {/* Divider */}
                <div className='my-1' style={{
                    height: '1px',
                    background: 'linear-gradient(to right, rgba(255,255,255,0.12), transparent)'
                }} />

                {/* LinkedIn link */}
                <a
                    href="https://www.linkedin.com/in/rakshith-h-k-166301286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 text-sm font-medium w-fit group'
                    style={{ color: 'rgba(96,165,250,0.85)', textDecoration: 'none' }}
                >
                    {/* LinkedIn icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className='group-hover:underline underline-offset-2 transition-all'>
                        LinkedIn
                    </span>
                </a>
            </div>
        </div>
    )
}

export default InfoCard