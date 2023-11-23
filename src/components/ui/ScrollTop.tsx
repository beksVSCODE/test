import { FC, useState, useEffect } from 'react';

export const ScrollTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-7 right-7 z-20 p-1 animate-pulse cursor-pointer ${isVisible ? 'block' : 'hidden'
                }`}
            onClick={scrollToTop}
        >
            <img
                className="w-12 h-12 button-gradient overflow-hidden rounded-full"
                src="/icons/scroll-top.svg"
                alt="scroll"
            />
        </div>
    );
};
