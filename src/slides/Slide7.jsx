import Slide from '../components/Slide';
import Step from '../components/Step';

const conclusions = [
    {
        number: '1',
        text: 'Ubezpieczenie dla młodych to często 15–20% wartości całego auta.',
    },
    {
        number: '2',
        text: 'Koszty ukryte pożerają budżet szybciej niż samo paliwo.',
    },
    {
        number: '3',
        text: 'Gotówka na zakup auta to zaledwie 55% pełnego sukcesu.',
    },
];

export default function Slide7({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="w-full max-w-5xl mx-auto text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-20">
                    Co nas <span className="text-accent">zaskoczyło</span>?
                </h2>

                <div className="space-y-12">
                    {conclusions.map((item, i) => (
                        <Step key={i} visible={step >= i + 1}>
                            <div className="flex items-center gap-10 px-14 py-10 rounded-xl bg-white/[0.12] border border-white/15 text-left">
                                <span className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-2xl font-black text-accent">
                                    {item.number}
                                </span>
                                <span className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                                    {item.text}
                                </span>
                            </div>
                        </Step>
                    ))}
                </div>
            </div>
        </Slide>
    );
}
