import { motion } from 'framer-motion';

const GlowOrb = ({ color, size, initialX, initialY, duration, delay = 0 }) => {
    return (
        <motion.div
            className="absolute rounded-full blur-[160px] opacity-[0.18] pointer-events-none"
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                left: initialX,
                top: initialY,
            }}
            animate={{
                x: [0, 80, -80, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.3, 0.8, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        />
    );
};

export default function PresentationBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-[#060608] overflow-hidden pointer-events-none">
            {/* Dark background base */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#060608] via-[#0a0a0f] to-[#060608]" />

            {/* Animated Glows - Matching the orange/red/blue theme */}
            <GlowOrb color="#f87171" size="50vw" initialX="-10%" initialY="-10%" duration={25} />
            <GlowOrb color="#fb923c" size="60vw" initialX="60%" initialY="20%" duration={30} delay={2} />
            <GlowOrb color="#3b82f6" size="55vw" initialX="10%" initialY="60%" duration={28} delay={5} />
            <GlowOrb color="#ef4444" size="40vw" initialX="70%" initialY="70%" duration={22} delay={1} />

            {/* Static spotlight effect for center legibility */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,6,8,0.4)_70%)]" />

            {/* No noise, No grain - Just smooth gradients */}
        </div>
    );
}
