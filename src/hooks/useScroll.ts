export const useScroll = () => {
    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return { handleClick };
};
