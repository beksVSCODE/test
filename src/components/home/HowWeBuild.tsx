import type { FC } from 'react';
import { Container } from '../layouts/Container';
import { howWeBuildList } from '@/utils/howWeBuildList';
import { HowWeBuildItem } from './HowWeBuildItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const HowWeBuild: FC = () => {
    return (
        <section className="relative mb-24 max-md:mb-12">
            <div className="build-bg" />
            <Container>
                <div className="grid grid-cols-4 items-center place-items-center max-lg:grid-cols-2 max-lg:gap-10 max-sm:hidden">
                    {howWeBuildList.map((link) => (
                        <HowWeBuildItem key={link.id} howBuiltItem={link} />
                    ))}
                </div>
                <div className="sm:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {howWeBuildList.map((link) => (
                            <SwiperSlide key={link.id}>
                                <HowWeBuildItem key={link.id} howBuiltItem={link} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};
