import { FC } from 'react';
import { Container } from '../layouts/Container';
import { MainButton } from '../ui/MainButton';
import { Titles } from '../ui/Titles';
export const AboutSection: FC = () => {
    return (
        <section className="mb-24 max-md:mb-10">
            <div>
            </div>
            <Container classNameModificator="max-lg:flex-col flex items-center justify-between gap-10 max-lg:gap-5">
                <div>
                    <img src="/images/about-img.png" alt="aboutimg" />
                </div>
                <div className="max-w-[630px] w-full">
                    <Titles
                        title="About"
                        subtitle="Hydra vr"
                        classNameModificator="max-lg:text-center max-lg:hidden mb-10"
                    />
                    <p className="text-sm16 max-sm:text-s14 mb-7">
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
                        mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
                        dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
                        tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
                        purus in massa. Est placerat in egestas erat imperdiet sed.
                        Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet
                        sit amet cursus sit amet. Vel eros donec ac odio tempor orci
                        dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
                        bibendum. Leo a diam sollicitudi n tempor.
                    </p>
                    <div className="max-lg:text-center">
                        <MainButton children={"Let's get in touch"} />
                    </div>
                </div>
            </Container>
        </section>
    );
};
