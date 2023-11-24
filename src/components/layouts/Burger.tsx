import clsx from 'clsx';
import React,{ useState } from 'react';
import { Nav } from './Nav';

export const Burger: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className="lg:hidden">
            <button onClick={handleOpenMenu}>
                <img src="/icons/burger-icon.svg" alt="burger" />
            </button>
            <div
                className={clsx(
                    isMenuOpen ? 'translate-y-[0%]' : 'translate-y-[-100%]',
                    'fixed z-50 inset-0 translate-y-0 bg-blue-80 bg-opacity-80 transition-all duration-200 flex justify-center',
                )}
            >
                <button
                    className="absolute top-8 right-4 w-10 h-10"
                    onClick={handleOpenMenu}
                >
                    <span className="w-[3px] h-8 absolute top-3 left-4 block rotate-45 button-gradient" />
                    <span className="w-[3px] h-8 absolute top-3 right-5 block -rotate-45 button-gradient" />
                </button>
                <div className="max-h-[80vh] bg-blue-80 flex justify-center items-center w-full">
                    <Nav handleOpenMenu={handleOpenMenu} />
                </div>
            </div>
        </div>
    );
};
