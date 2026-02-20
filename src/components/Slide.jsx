import { motion } from 'framer-motion';

const scannerVariants = {
    enter: {
        x: '-10%',
        opacity: 0
    },
    center: {
        x: '110%',
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

const contentVariants = {
    enter: {
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        filter: 'blur(10px)',
    },
    center: {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.4 }
        }
    },
    exit: {
        opacity: 0,
        filter: 'blur(10px)',
        transition: { duration: 0.6 }
    },
};

export default function Slide({ children, className = '' }) {
    return (
        <motion.div
            className={`absolute inset-0 flex flex-col items-center justify-center px-20 py-16 ${className}`}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
        >
            {/* The Scanner Bar */}
            <motion.div
                className="absolute top-0 bottom-0 w-[4px] bg-cyan-400 z-50 pointer-events-none"
                style={{
                    boxShadow: '0 0 20px #22d3ee, 0 0 40px #22d3ee',
                    left: 0,
                }}
                variants={scannerVariants}
            />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </motion.div>
    );
}
