import Slide from '../components/Slide';
import Step from '../components/Step';

const items = [
    { label: 'Inflacja i rosnące ceny paliwa/części', amount: '6 500', color: 'text-warn' },
    { label: 'Awaria (np. rozrząd/zawieszenie)', amount: '2 500', color: 'text-warn' },
];

export default function Slide5({ step }) {
    return (
        <Slide>
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    TCO — <span className="text-warn-warm">Rok 2</span>
                </h2>
                <p className="text-xl text-warn-warm/70 font-medium mb-16">Atak inflacji</p>

                <div className="space-y-6">
                    {items.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="flex items-center justify-between px-12 py-8 rounded-xl bg-warn/[0.14] border border-warn/20">
                                <span className="text-xl md:text-2xl font-medium text-white">{item.label}</span>
                                <span className={`text-2xl md:text-3xl font-bold ${item.color}`}>
                                    {item.amount} PLN
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>

                <Step visible={step >= 3} className="mt-16">
                    <div className="text-center py-14 px-12 rounded-2xl bg-warn/10 border border-warn/20">
                        <span className="text-lg font-medium tracking-widest uppercase text-text-muted block mb-4">
                            Koszt samego 2. roku
                        </span>
                        <span className="text-6xl md:text-7xl lg:text-8xl font-black text-warn">
                            12 000 PLN
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}
