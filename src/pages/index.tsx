import React from 'react';
import { AboutSection } from '@/components/home/AboutSection';
import { Contact } from '@/components/home/Contact';
import { Main } from '@/components/home/Main';
import { ServicesSection } from '@/components/home/ServicesSection';
import { Technologies } from '@/components/home/Technologies';
import { SectionBox } from '@/components/ui/SectionBox';
import { HowWeBuild } from '@/components/home/HowWeBuild';
import { Form } from '@/components/form/Form';

const Home: React.FC = () => {
    return (
        <>
            <Main />
            <Contact />
            <SectionBox
                id="about"
                title="Introduction"
                subtitle="To hydra vr"
                desc="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />
            <AboutSection />
            <SectionBox
                id="services"
                title="why build"
                subtitle="with hydra"
                desc="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />
            <ServicesSection />
            <Technologies />
            <SectionBox
                id="how to"
                title="how we build"
                subtitle="with hydra vr"
                desc="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
            />
            <HowWeBuild />
            <Form />
        </>
    );
};

export default Home;
