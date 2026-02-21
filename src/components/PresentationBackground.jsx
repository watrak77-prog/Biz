import { motion } from 'framer-motion';

export default function PresentationBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-surface overflow-hidden pointer-events-none">
            {/* Base layer */}
            <div className="absolute inset-0 bg-[#020205]" />

            {/* SVG Filter for the Liquid Effect */}
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -20"
                            result="goo"
                        />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {/* Liquid Blobs Container */}
            <div className="absolute inset-0 opacity-40 blur-[80px] mix-blend-screen" style={{ filter: 'url(#goo)' }}>
                <motion.div
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 100, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-accent/40 rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, -120, 120, 0],
                        y: [0, 80, -80, 0],
                        scale: [1, 0.9, 1.1, 1],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute bottom-[20%] right-[30%] w-[450px] h-[450px] bg-indigo-500/30 rounded-full"
                />
                <motion.div
                    animate={{
                        x: [0, 80, -140, 0],
                        y: [0, 150, -150, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 1 }}
                    className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-purple-600/20 rounded-full"
                />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")', filter: 'contrast(150%) brightness(100%)' }}
            />

            {/* Radial Overlay for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,5,0.7)_80%)]" />
        </div>
    );
}

