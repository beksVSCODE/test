import type { FC } from 'react';
import { Container } from '../layouts/Container';
import { MainButton } from '../ui/MainButton';

export const Main: FC = () => {
    return (
        <section className="relative">
            <Container classNameModificator="flex relative justify-between items-center gap-10 max-lg:flex-col-reverse max-md:flex-col-reverse max-md:text-center mb-20 max-md:mb-10">
                <div className="main-left-line" />
                <div className="main-top-line" />
                <div className="main-right-line" />
                <div className="max-w-mainSectionBox1 w-full py-5">
                    <h1 className="text-xL40 font-bold mb-9 max-md:text-md24">
                        <span>
                            <span className="text-gradient max-md:text-l36">Dive</span> Into
                            The Depths
                        </span>
                        <br />
                        <span>
                            Of{' '}
                            <span className="text-gradient max-md:text-l36">
                                Virtual Reality
                            </span>
                        </span>
                    </h1>
                    <p className="text-sm16 mb-16 max-md:hidden max-lg:mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
                        Lectus mauris eros in vitae .
                    </p>
                    <div className="cursor-pointer flex items-center gap-2.5 animate-pulse">
                        <MainButton
                            children={'build your world'}
                            classNameModificator="max-lg:w-full"
                        />
                        <img
                            className="max-lg:hidden"
                            src="/icons/arrow-right.svg"
                            alt="arrow"
                        />
                    </div>
                </div>
                <div className="relative rounded-mainImg bg-mainImgBg px-2.5 pt-3 pb-1">
                    <img src="/images/main-img.png" alt="main-img" />
                </div>
            </Container>
        </section>
    );
};
