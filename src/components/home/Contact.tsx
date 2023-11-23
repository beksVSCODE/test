import { FC, Fragment } from 'react';
import { Container } from '../layouts/Container';
import { contactList } from '@/utils/contactList';
import { ContactItem } from './ContactItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export const Contact: FC = () => {
    return (
        <section className="mb-20 relative max-md:mb-10">
            <Container>
                <div className="contact-gradient py-10 pl-4 pr-10 flex justify-between items-center max-lg:hidden">
                    {contactList.map((contact) => (
                        <Fragment key={contact.subtitle}>
                            {contact.title === 'Give Us a Call' ? (
                                <div className="h-[100px] w-[2px] bg-stroke" />
                            ) : null}
                            <ContactItem contact={contact} />
                            {contact.title === 'Give Us a Call' ? (
                                <div className="h-[100px] w-[2px] bg-stroke" />
                            ) : null}
                        </Fragment>
                    ))}
                </div>
                <div className="lg:hidden contact-gradient max-w-[550px] w-full py-10 mx-auto justify-center items-center">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {contactList.map((contact) => (
                            <SwiperSlide key={contact.title}>
                                <ContactItem contact={contact} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};
