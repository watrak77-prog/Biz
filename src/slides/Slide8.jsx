import Slide from '../components/Slide';
import Step from '../components/Step';

const sources = [
    'Otomoto',
    'OLX Motoryzacja',
    'Rankomat',
    'mfind',
];

export default function Slide8({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full gap-20">
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-text-muted mb-12">
                        Źródła
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {sources.map((source, i) => (
                            <span
                                key={i}
                                className="px-8 py-4 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-lg text-zinc-300 font-medium tracking-wide"
                            >
                                {source}
                            </span>
                        ))}
                    </div>
                </div>

                <Step visible={step >= 1}>
                    <div className="mt-4">
                        <span className="text-5xl md:text-6xl lg:text-7xl font-black text-white">
                            Dziękujemy za uwagę
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}
