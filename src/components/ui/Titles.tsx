import clsx from 'clsx';
import { FC } from 'react';

type TitlesProps = {
    title: string;
    subtitle: string;
    classNameModificator?: string;
};
export const Titles: FC<TitlesProps> = ({
    subtitle,
    title,
    classNameModificator,
}) => {
    return (
        <div className={clsx(classNameModificator)}>
            <p className="text-l36 max-sm:text-sm16 font-bold mb-2.5 max-lg:text-md26 uppercase">
                {title}
            </p>
            <p className="text-l36 max-sm:text-md24 font-thin max-lg:text-md26 uppercase">
                {subtitle}
            </p>
        </div>
    );
};
