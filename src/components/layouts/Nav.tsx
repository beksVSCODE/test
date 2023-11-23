import type { FC } from 'react';
import { HeaderButtons } from './HeaderButtons';
import { NavList } from './NavList';

type NavProps = {
    handleOpenMenu?: () => void;
};

export const Nav: FC<NavProps> = ({ handleOpenMenu }) => {
    return (
        <nav>
            <div className="lg:hidden">
                <img
                    className="mx-auto mb-2.5"
                    src="/icons/hydra-logo.svg"
                    alt="logo"
                />
            </div>
            <NavList
                classNameModificator="flex items-center max-lg:flex-col max-lg:mb-5"
                handleOpenMenu={handleOpenMenu}
            />
            <div className="lg:hidden">
                <HeaderButtons
                    handleOpenMenu={handleOpenMenu}
                />
            </div>
        </nav>
    );
};
