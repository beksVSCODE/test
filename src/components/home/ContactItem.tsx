import { FC } from 'react';
import { ContactListType } from '../../../types';
import clsx from 'clsx';

type ContactItemProps = {
    contact: ContactListType;
};
export const ContactItem: FC<ContactItemProps> = ({
    contact: { title, logo, subtitle },
}) => {
    return (
        <div className={clsx('flex items-center px-10 max-lg:justify-center')}>
            <img
                className="max-lg:w-[100px] max-lg:h-[100px] max-sm:w-[70px] max-sm:h-[70px]"
                src={logo}
                alt="logo"
            />
            <div className="ml-2.5">
                <p className="text-md24 mb-2.5 font-bold text-left max-sm:text-s14 max-sm:font-normal">
                    {title}
                </p>
                <p className="text-s14 text-left max-sm:text-s14 max-sm:font-normal">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
