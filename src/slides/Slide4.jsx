import Slide from '../components/Slide';
import Step from '../components/Step';

const items = [
    { label: 'Paliwo (12 000 km rocznie)', amount: '6 240', color: 'text-red-500' },
    { label: 'Eksploatacja i chemia', amount: '600', color: 'text-red-500' },
];

export default function Slide4({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
                    TCO — <span className="text-zinc-300">Rok 1</span>
                </h2>

                <div className="space-y-6">
                    {items.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="flex items-center justify-between px-12 py-8 rounded-xl bg-white/[0.12] border border-white/15">
                                <span className="text-xl md:text-2xl font-semibold text-white">{item.label}</span>
                                <span className={`text-2xl md:text-3xl font-bold ${item.color}`}>
                                    {item.amount} PLN
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 3} className="mt-16">
                    <div className="text-center py-14 px-12 rounded-2xl bg-warn/10 border border-warn/20">
                        <span className="text-lg font-semibold tracking-widest uppercase text-white block mb-4">
                            Łączny koszt zakupu i Roku 1
                        </span>
                        <span className="text-6xl md:text-7xl lg:text-8xl font-black text-warn">
                            28 520 PLN
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}
