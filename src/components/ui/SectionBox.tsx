import type { FC } from 'react';
import { Container } from '../layouts/Container';

type SectionBoxProps = {
    title: string;
    subtitle: string;
    desc: string;
    id?: string;
};

export const SectionBox: FC<SectionBoxProps> = ({
    desc,
    subtitle,
    title,
    id,
}) => {
    return (
        <section id={id} className="mb-24 max-lg:mb-10">
            <Container classNameModificator="flex items-center justify-between max-lg:justify-center">
                <div className="max-lg:text-center">
                    <p className="text-l36 font-bold mb-2.5 max-lg:text-md26 uppercase">
                        {title}
                    </p>
                    <div className="relative">
                        <p className="text-l36 font-thin max-lg:text-md26 uppercase">
                            {subtitle}
                        </p>
                        <img
                            className="absolute h-[40px] max-lg:hidden"
                            src="/icons/long-arrow.svg"
                            alt="long"
                        />
                    </div>
                </div>
                <div className="max-w-description w-full max-lg:hidden">
                    <p className="text-sm16">{desc}</p>
                </div>
            </Container>
        </section>
    );
};
