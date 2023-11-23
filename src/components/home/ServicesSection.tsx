import { servicesList } from '@/utils/servicesList';
import { FC } from 'react';
import { Container } from '../layouts/Container';
import { ServiceItem } from './ServiceItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const ServicesSection: FC = () => {
    return (
        <section className="mb-24">
            <Container>
                <div className="grid grid-cols-4 gap-2.5 max-lg:grid-cols-2 max-sm:hidden">
                    {servicesList.map((service) => (
                        <ServiceItem key={service.service} service={service} />
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
                        {servicesList.map((service) => (
                            <SwiperSlide key={service.service}>
                                <ServiceItem key={service.service} service={service} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};
