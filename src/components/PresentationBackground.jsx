import { motion } from 'framer-motion';

const LavaBlob = ({ color, size, initialX, initialY, duration, delay = 0, scaleRange = [1, 1.4] }) => {
    return (
        <motion.div
            className="absolute rounded-full opacity-[0.8] mix-blend-screen"
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                left: initialX,
                top: initialY,
                filter: 'blur(40px)', // Pre-blur for smoother blending
            }}
            animate={{
                x: [0, 100, -80, 0],
                y: [0, -120, 90, 0],
                scale: [1, ...scaleRange, 1],
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
            {/* Dark background base with a very subtle radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a0a0f_0%,#060608_100%)]" />

            {/* SVG Filter for the "Gooey" effect */}
            <svg className="hidden">
                <defs>
                    <filter id="lava-goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
                            result="lava"
                        />
                        <feComposite in="SourceGraphic" in2="lava" operator="atop" />
                    </filter>
                </defs>
            </svg>

            {/* Blob Container with Filter Applied */}
            <div className="absolute inset-0" style={{ filter: 'url(#lava-goo)' }}>
                {/* Vibrant Lava Blobs - Using requested color palette */}
                <LavaBlob color="#FF9F21" size="45vw" initialX="-15%" initialY="-10%" duration={20} scaleRange={[1.2, 1.5]} />
                <LavaBlob color="#FF0303" size="55vw" initialX="50%" initialY="20%" duration={25} delay={2} scaleRange={[1.1, 1.4]} />
                <LavaBlob color="#fb923c" size="40vw" initialX="10%" initialY="60%" duration={22} delay={5} />
                <LavaBlob color="#ef4444" size="50vw" initialX="65%" initialY="75%" duration={18} delay={1} />
                <LavaBlob color="#f59e0b" size="35vw" initialX="30%" initialY="40%" duration={30} delay={3} />
            </div>

            {/* Center legibility overlay - smooths out the middle for text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(6,6,8,0.5)_80%)]" />

            {/* Noise/Grain Overlay for Premium Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grain-y.com/images/grain-blue.png')]" />
        </div>
    );
}

