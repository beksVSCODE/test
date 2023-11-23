import type { FC } from 'react';

export const Logo: FC = () => {
    return (
        <div className="flex items-center gap-3.5">
            <img
                className="max-lg:w-[80px]"
                src="/icons/hydra-logo.svg"
                alt="hydra-logo"
            />
            <img
                className="max-lg:w-[60px]"
                src="/icons/hydra-text.svg"
                alt="hydra-text"
            />
        </div>
    );
};
