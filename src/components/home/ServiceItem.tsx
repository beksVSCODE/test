import { FC } from 'react';
import type { ServiceListType } from '../../../types';
import { MainButton } from '../ui/MainButton';

type ServiceItemProps = {
    service: ServiceListType;
};

export const ServiceItem: FC<ServiceItemProps> = ({
    service: { desc, img, service },
}) => {
    return (
        <div className="why-hydra-gradient pt-5 px-6 pb-10 flex flex-col justify-center">
            <div className="mb-5 bg-services rounded-full mx-auto p-2.5">
                <img src={img} alt="service" />
            </div>
            <h3 className="text-md24 uppercase font-bold text-center pb-4">
                {service}
            </h3>
            <span className="max-w-[154px] w-full mx-auto h-[2px] bg-stroke mb-5" />
            <div className="max-w-[320px] w-full mx-auto text-center">
                <p className="text-xs12 mb-8">{desc}</p>
            </div>
            <div className="max-w-[154px] w-full mx-auto">
                <MainButton children={'Try it out'} />
            </div>
        </div>
    );
};
