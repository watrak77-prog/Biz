import Slide from '../components/Slide';
import Step from '../components/Step';

export default function Slide1({ step, direction }) {
    return (
        <Slide direction={direction}>
            <div className="text-center space-y-24">
                <div className="space-y-4">
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight">
                        Pierwsza Bryka
                    </h1>
                    <p className="text-4xl md:text-5xl font-light text-zinc-300 tracking-wide">
                        Pułapka każdego BMW
                    </p>
                </div>

                <Step visible={step >= 1} className="mt-24">
                    <div className="flex flex-col items-center gap-8">
                        <span className="text-xl font-semibold tracking-widest uppercase text-zinc-300">
                            Kapitał startowy
                        </span>
                        <span className="text-7xl md:text-8xl lg:text-9xl font-black text-accent">
                            30 000 PLN
                        </span>
                    </div>
                </Step>
            </div>
        </Slide>
    );
}
