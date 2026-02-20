import Slide from '../components/Slide';
import Step from '../components/Step';
import AnimatedNumber from '../components/AnimatedNumber';

const costs = [
    { label: 'Rejestracja i podatek PCC', amount: 480 },
    { label: 'Ubezpieczenie OC (młody kierowca)', amount: 2500 },
    { label: 'Podstawowy serwis (olej, filtry, klocki)', amount: 1500 },
    { label: 'Komplet nowych opon', amount: 1200 },
];

function getReserve(step) {
    let reserve = 14000;
    for (let i = 0; i < Math.min(step, costs.length); i++) {
        reserve -= costs[i].amount;
    }
    return reserve;
}

export default function Slide3({ step, direction }) {
    const reserve = getReserve(step);

    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex items-baseline justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Dzień 1: <span className="text-zinc-300">Pakiet startowy</span>
                    </h2>
                    <div className="text-right">
                        <span className="text-sm font-semibold tracking-widest uppercase text-zinc-300 block mb-1">
                            Rezerwa
                        </span>
                        <AnimatedNumber
                            value={reserve}
                            className={`text-5xl md:text-6xl font-black transition-colors duration-500 ${reserve < 10000 ? 'text-warn' : 'text-accent'
                                }`}
                            suffix=" PLN"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {costs.map((cost, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="flex items-center justify-between px-12 py-8 rounded-xl bg-white/[0.12] border border-white/15">
                                <span className="text-xl md:text-2xl font-semibold text-white">{cost.label}</span>
                                <span className="text-2xl md:text-3xl font-bold text-warn">
                                    -{cost.amount.toLocaleString('pl-PL')} PLN
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 5} className="mt-16">
                    <div className="text-center py-14 px-12 rounded-2xl bg-accent/10 border border-accent/20">
                        <span className="text-lg font-semibold tracking-widest uppercase text-white block mb-4">
                            Zostało
                        </span>
                        <span className="text-6xl md:text-7xl lg:text-8xl font-black text-accent">
                            8 320 PLN
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}
