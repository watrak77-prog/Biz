import { motion } from 'framer-motion';
import Slide from '../components/Slide';
import Step from '../components/Step';

const points = [
    { label: 'Zakup', value: '16 000', year: 'Dziś', color: 'accent' },
    { label: 'Po 1. roku', value: '14 500', year: '+1 rok', color: 'warn-warm' },
    { label: 'Po 2. roku', value: '13 000', year: '+2 lata', color: 'warn' },
];

const colorMap = {
    accent: { text: 'text-accent', bg: 'bg-accent', border: 'border-accent', shadow: 'shadow-accent/30' },
    'warn-warm': { text: 'text-warn-warm', bg: 'bg-warn-warm', border: 'border-warn-warm', shadow: 'shadow-warn-warm/30' },
    warn: { text: 'text-warn', bg: 'bg-warn', border: 'border-warn', shadow: 'shadow-warn/30' },
};

export default function Slide6({ step }) {
    return (
        <Slide>
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-20 text-center text-white">
                    Utrata wartości
                </h2>

                {/* Timeline wrapper — dots are the anchor, line positioned through them */}
                <div className="relative w-full">
                    {/* Top row: values */}
                    <div className="flex items-end justify-around px-4 mb-14">
                        {points.map((point, i) => (
                            <Step key={`val-${i}`} visible={step >= i + 1} className="flex-1 max-w-[300px]">
                                <div className="flex flex-col items-center">
                                    <span className={`text-5xl md:text-6xl lg:text-7xl font-black ${colorMap[point.color].text}`}>
                                        {point.value}
                                    </span>
                                    <span className="text-xl text-zinc-300 mt-2">PLN</span>
                                </div>
                            </Step>
                        ))}
                    </div>

                    {/* Middle row: line + dots */}
                    <div className="relative flex items-center justify-around px-4">
                        {/* The line goes through the center of the dots */}
                        <div className="absolute left-[8%] right-[8%] top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-zinc-700/60" />

                        {points.map((point, i) => (
                            <div key={`dot-${i}`} className="flex-1 max-w-[300px] flex justify-center relative z-10">
                                <motion.div
                                    className={`w-6 h-6 rounded-full border-[3px] ${colorMap[point.color].bg} ${colorMap[point.color].border} shadow-lg ${colorMap[point.color].shadow}`}
                                    initial={{ scale: 0 }}
                                    animate={step >= i + 1 ? { scale: 1 } : { scale: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom row: year labels + deltas */}
                    <div className="flex items-start justify-around px-4 mt-14">
                        {points.map((point, i) => (
                            <Step key={`label-${i}`} visible={step >= i + 1} className="flex-1 max-w-[300px]">
                                <div className="flex flex-col items-center gap-3">
                                    <span className="text-lg font-semibold tracking-wide text-zinc-300 uppercase">
                                        {point.year}
                                    </span>
                                    {i > 0 && (
                                        <span className="text-2xl font-bold text-red-400">
                                            −{(parseInt(points[i - 1].value.replace(/\s/g, '')) - parseInt(point.value.replace(/\s/g, ''))).toLocaleString('pl-PL')} PLN
                                        </span>
                                    )}
                                </div>
                            </Step>
                        ))}
                    </div>
                </div>
            </div>
        </Slide>
    );
}
