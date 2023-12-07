import type { FC } from 'react';

export const Logo: FC = () => {
    return (
        <div className="flex items-center gap-3.5">
            <img
                className="w-40 h-40 max-lg:w-[80px] rounded-full"
                src="/icons/LOGO.jpg"
                alt="hydra-logo"
            />
        </div>
    );
};
