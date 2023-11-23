import type { FC } from 'react';
import { Container } from './Container';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { HeaderButtons } from './HeaderButtons';
import { Burger } from './Burger';

export const Header: FC = () => {
    return (
        <header className="pt-6 mb-20 max-lg:mb-6">
            <Container classNameModificator="flex items-center justify-between">
                <Logo />
                <div className="max-lg:hidden">
                    <Nav />
                </div>
                <div className="max-lg:hidden">
                    <HeaderButtons />
                </div>
                <Burger />
            </Container>
        </header>
    );
};
