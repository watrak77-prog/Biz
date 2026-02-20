import Slide from '../components/Slide';
import Step from '../components/Step';

export default function Slide2({ step }) {
    return (
        <Slide>
            <div className="text-center space-y-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-300">
                    Podział budżetu
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                    <Step visible={step >= 1}>
                        <div className="flex flex-col items-center gap-6 px-16 py-14 rounded-2xl bg-white/[0.12] border border-white/15 min-w-[380px]">
                            <span className="text-lg font-medium tracking-widest uppercase text-zinc-300">
                                Zakup auta
                            </span>
                            <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white">
                                16 000
                            </span>
                            <span className="text-xl text-zinc-300">PLN</span>
                            <span className="text-lg font-semibold text-blue-400">BMW Serii 1</span>
                        </div>
                    </Step>

                    <Step visible={step >= 2}>
                        <div className="flex flex-col items-center gap-6 px-16 py-14 rounded-2xl bg-white/[0.12] border border-white/15 min-w-[380px]">
                            <span className="text-lg font-medium tracking-widest uppercase text-zinc-300">
                                Utrzymanie
                            </span>
                            <span className="text-6xl md:text-7xl lg:text-8xl font-black text-white">
                                14 000
                            </span>
                            <span className="text-xl text-zinc-300">PLN</span>
                            <span className="text-lg font-semibold text-amber-400">Żelazna rezerwa</span>
                        </div>
                    </Step>
                </div>
            </div>
        </Slide>
    );
}
