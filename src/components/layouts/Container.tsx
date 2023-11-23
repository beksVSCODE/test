import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    classNameModificator?: string;
};

export const Container: FC<ContainerProps> = ({
    children,
    classNameModificator,
}) => {
    return (
        <div
            className={clsx(
                'max-w-mainContainer w-full mx-auto px-container',
                classNameModificator,
            )}
        >
            {children}
        </div>
    );
};
