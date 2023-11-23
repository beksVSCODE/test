import type { FC } from 'react';
import { MainButton } from '../ui/MainButton';
import { useScroll } from '@/hooks/useScroll';

type HeaderButtonsProps = {
    handleOpenMenu?: () => void;
};
export const HeaderButtons: FC<HeaderButtonsProps> = ({ handleOpenMenu }) => {
    const { handleClick } = useScroll();
    return (
        <div className="flex gap-6 items-center max-sm:flex-col">
            <MainButton
                onClick={() => {
                    handleOpenMenu ? handleOpenMenu() : null;
                    handleClick('form');
                }}
                mainButton={false}
            >
                contact us
            </MainButton>
            <MainButton>Join hydra</MainButton>
        </div>
    );
};
