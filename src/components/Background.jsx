import { motion } from 'framer-motion';

const Orb = ({ color, size, initialX, initialY, duration }) => {
    return (
        <motion.div
            className="absolute rounded-full blur-[120px] opacity-30 pointer-events-none"
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                left: initialX,
                top: initialY,
            }}
            animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    );
};

export default function Background() {
    return (
        <div className="fixed inset-0 z-0 bg-[#0a0a0f] overflow-hidden pointer-events-none">
            <Orb color="#3b82f6" size="40vw" initialX="10%" initialY="20%" duration={20} />
            <Orb color="#2563eb" size="50vw" initialX="60%" initialY="50%" duration={25} />
            <Orb color="#1d4ed8" size="45vw" initialX="30%" initialY="70%" duration={22} />
            <Orb color="#60a5fa" size="30vw" initialX="80%" initialY="10%" duration={18} />
        </div>
    );
}
