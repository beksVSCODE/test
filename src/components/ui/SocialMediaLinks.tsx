import { socialMediaList } from '@/utils/socialMediaList';
import { FC } from 'react';

export const SocialMediaLinks: FC = () => {
    return (
        <ul className="flex items-center gap-5 mb-10 max-lg:mb-5 max-lg:gap-2.5">
            {socialMediaList.map((link) => (
                <li key={link.logo}>
                    <a href={link.link}>
                        <img src={link.logo} alt="logo" />
                    </a>
                </li>
            ))}
        </ul>
    );
};
