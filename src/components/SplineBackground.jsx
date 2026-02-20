import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineBackground() {
    const canvasRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!canvasRef.current) return;

        const app = new Application(canvasRef.current);
        app.load('https://prod.spline.design/oj3DGDMxFeTFY34k/scene.splinecode')
            .then(() => {
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error loading Spline scene:', err);
                setIsLoading(false);
            });

        return () => {
            // Cleanup if necessary (Application doesn't have a direct destroy, but we can stop any loops if exposed)
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#0a0a0f] overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                id="canvas3d"
                className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
}
