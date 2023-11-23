import { FC } from 'react';
import { HowBuildType } from '../../../types';

type HowBuildItemProps = {
    howBuiltItem: HowBuildType;
};
export const HowWeBuildItem: FC<HowBuildItemProps> = ({
    howBuiltItem: { id, link },
}) => {
    return (
        <div className="relative max-w-[240px] w-full mx-auto text-left" key={id}>
            <div className="w-[180px] h-[180px] bg-services mb-6 rounded-full p-3.5 mx-auto">
                <div className="w-full h-full button-gradient rounded-full flex justify-center items-center text-blue-80 font-bold text-lg64">
                    0{id}
                </div>
            </div>
            <div className="flex">
                <img className="w-[50px]" src="/icons/arrow-right.svg" alt="arrow" />
                <a href="#" target="_blank" className="text-md24 font-bold">
                    {link}
                </a>
            </div>
        </div>
    );
};
