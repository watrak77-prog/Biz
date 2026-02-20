import { useMemo } from 'react';
import { motion } from 'framer-motion';

const generateStars = (n) => {
    let value = "";
    for (let i = 0; i < n; i++) {
        value += `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF${i < n - 1 ? "," : ""}`;
    }
    return value;
};

const StarLayer = ({ size, duration, count }) => {
    const shadows = useMemo(() => generateStars(count), [count]);

    return (
        <div
            className="absolute top-0 left-0"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                background: 'transparent',
                boxShadow: shadows,
                animation: `animStar ${duration}s linear infinite`,
            }}
        >
            <div
                className="absolute"
                style={{
                    top: '2000px',
                    width: `${size}px`,
                    height: `${size}px`,
                    background: 'transparent',
                    boxShadow: shadows,
                }}
            />
        </div>
    );
};

export default function StellarBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-stellar-gradient overflow-hidden pointer-events-none">
            {/* Shifting Gradient Overlays for "Color Transformation" */}
            <motion.div
                className="absolute inset-0 opacity-40 mix-blend-screen"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 30%, #431407 0%, transparent 70%)',
                        'radial-gradient(circle at 80% 70%, #1e1b4b 0%, transparent 70%)',
                        'radial-gradient(circle at 50% 50%, #7c2d12 0%, transparent 70%)',
                        'radial-gradient(circle at 20% 30%, #431407 0%, transparent 70%)',
                    ]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <StarLayer size={1} duration={50} count={700} />
            <StarLayer size={2} duration={100} count={200} />
            <StarLayer size={3} duration={150} count={100} />

            {/* Radial mask to focus attention */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,6,8,0.5)_100%)]" />
        </div>
    );
}
