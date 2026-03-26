import React from 'react'
import { content } from "@/content/content.js";

const WITTY_PHRASES = {
    1: [
        "type-coerce you either to heaven or hell",
        "haunt you",
        "flaccid type coercion",
    ],
    2: [
        "don't get lost in the abstractions of React",
        "the richness of an app is limited only by your imagination",
    ],
    3: [
        "pushed the boundaries of beginner React",
        "perfect stepping stone",
    ],
};

const CODE_TOKENS = [
    "useState()",
    "filter()",
    "map()",
    "reduce()",
    "useContext()",
    "contextAPI",
    "Node.js",
    "&&",
    "props",
];

function parseText(text, dayIdx) {
    if (!text) return null;
    const witty = WITTY_PHRASES[dayIdx] || [];

    const allPatterns = [
        ...witty.map(p => ({ type: 'witty', pattern: p })),
        ...CODE_TOKENS.map(p => ({ type: 'code', pattern: p })),
    ].sort((a, b) => b.pattern.length - a.pattern.length);

    const combinedRe = new RegExp(
        `(${allPatterns.map(p => p.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
        'g'
    );

    return text.split(combinedRe).map((part, i) => {
        if (!part) return null;
        const match = allPatterns.find(p => p.pattern === part);

        if (match?.type === 'witty') {
            return (
                <mark
                    key={i}
                    style={{
                        background: 'linear-gradient(120deg, rgba(251,191,36,0.25) 0%, rgba(251,146,60,0.18) 100%)',
                        borderRadius: '3px',
                        padding: '0 3px',
                        color: 'inherit',
                        fontStyle: 'italic',
                    }}
                >
                    {part}
                </mark>
            );
        }

        if (match?.type === 'code') {
            return (
                <code
                    key={i}
                    className="font-mono text-sm px-1.5 py-0.5 rounded"
                    style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(167,243,208,0.9)',
                        letterSpacing: '0.01em',
                    }}
                >
                    {part}
                </code>
            );
        }

        return <React.Fragment key={i}>{part}</React.Fragment>;
    });
}

const DayX = ({ idx }) => {
    const { heading, subheading, body } = content[idx] ?? {};

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
            {/* Glass card */}
            <article
                className="w-full max-w-2xl rounded-2xl px-10 py-12"
                style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(24px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                    border: '1px solid rgba(255, 255, 255, 0.10)',
                    boxShadow: '0 8px 48px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
            >
                {/* Eyebrow */}
                <span
                    className="block text-xs font-mono uppercase mb-8"
                    style={{
                        letterSpacing: '0.35em',
                        color: 'rgba(255,255,255,0.65)',
                        textShadow: '0 0 12px rgba(255,255,255,0.3)',
                    }}
                >
                    Day {idx}
                </span>

                {/* Heading */}
                <h1 className="text-4xl font-bold text-white leading-snug tracking-tight mb-4">
                    {parseText(heading, idx)}
                </h1>

                {/* Divider */}
                <div
                    className="mb-8"
                    style={{
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255,255,255,0.18), transparent)',
                    }}
                />

                {/* Subheading */}
                <div className="text-[1.2rem] font-semibold leading-relaxed my-20">
                <p

                    style={{
                        color: 'rgba(255,255,255,0.82)',
                        letterSpacing: '0.02em',
                        borderLeft: '2.5px solid rgba(134,239,172,0.6)',
                        borderRight: '2.5px solid rgba(134,239,172,0.6)',
                        paddingLeft: '14px',
                    }}
                >
                    {parseText(subheading, idx)}
                </p>
                </div>

                {/* Body — main intent, green marker vibe */}
                <p
                    className="text-[1.0625rem] leading-[1.95] font-normal"
                    style={{
                        color: 'rgba(255,255,255,0.88)',
                        background: 'linear-gradient(180deg, rgba(134,239,172,0.07) 0%, rgba(52,211,153,0.04) 100%)',
                        borderRadius: '10px',
                        padding: '20px 22px',
                        border: '1px solid rgba(134,239,172,0.10)',
                        boxShadow: 'inset 0 1px 0 rgba(134,239,172,0.08)',
                    }}
                >
                    {parseText(body, idx)}
                </p>
            </article>
        </div>
    );
};

export default DayX;