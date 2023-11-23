import type { FC } from 'react';
import { Container } from './Container';
import { NavList } from './NavList';
import { SocialMediaLinks } from '../ui/SocialMediaLinks';
import { MainButton } from '../ui/MainButton';

const emulatedMenu: string[] = ['f.a.q', 'sitemap', 'conditions', 'licenses'];

export const Footer: FC = () => {
    return (
        <footer className="relative">
            <div className="footer-top-line" />
            <div className="footer-center-line" />
            <Container>
                <div className="flex justify-between items-center mb-16 max-md:flex-col max-md:justify-center">
                    <img
                        className="w-[180px] h-[180px] -mb-8 max-lg:w-[140px] max-lg:h-[140px] max-md:mb-2.5"
                        src="/icons/hydra-logo.svg"
                        alt="hydra"
                    />
                    <div className="footer-vertical w-[4px] h-[180px] max-md:hidden" />
                    <div className="max-md:hidden">
                        <NavList />
                    </div>
                    <div className="footer-vertical w-[4px] h-[180px] max-md:hidden" />
                    <ul className="max-md:hidden">
                        {emulatedMenu.map((link) => (
                            <li
                                key={link}
                                className="uppercase text-sm16 font-bold cursor-pointer py-2.5 px-4 max-lg:text-xs12 hover:shadow-md"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                    <div className="footer-vertical w-[4px] h-[180px] max-md:hidden" />
                    <div className="max-md:text-center">
                        <h3 className="uppercase text-sm16 font-bold mb-10 max-lg:mb-5 max-md:text-center">
                            Socialize with hydra
                        </h3>
                        <SocialMediaLinks />
                        <MainButton children={'build your world'} />
                    </div>
                </div>
                <div className="footer-line w-full h-[1px] mb-10" />
                <div className="text-center mb-10 text-s14 font-bold tracking-tight">
                    <h5>
                        2023 © HYDRA LANDING PAGE - BY BEKSULTAN. ALL RIGHTS
                        RESERVED
                    </h5>
                </div>
            </Container>
        </footer>
    );
};
