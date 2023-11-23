import { Montserrat } from 'next/font/google';
import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTop } from '../ui/ScrollTop';

const montserrat = Montserrat({ subsets: ['latin'] });

type MainLayoutProps = {
    children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={clsx(montserrat.className, 'flex flex-col min-h-full')}>
            <ScrollTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};
