import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            maxWidth: {
                mainContainer: '1272px',
                description: '652px',
                mainSectionBox1: '450px',
            },
            padding: {
                container: '15px',
                'button-x': '36px',
                'button-y': '16px',
            },
            borderRadius: {
                button: '40px',
                mainImg: '100px 100px 100px 240px',
            },
            fontSize: {
                xs12: ['12px', '16px'],
                s14: ['14px', '20px'],
                sm16: ['16px', '28px'],
                md24: ['24px', '32px'],
                md26: ['26px', '36px'],
                l32: ['32px', '38px'],
                l36: ['36px', '40px'],
                xL40: ['40px', '52px'],
                xxL46: ['46px', 'normal'],
                lg64: ['64px', 'normal'],
            },
            letterSpacing: {
                tight: '1.82px',
            },
            colors: {
                blue: {
                    80: '#2f2c42',
                    70: '#343045',
                },
                inputFocus: '#8176af',
            },
            backgroundColor: {
                mainImgBg: 'rgba(0, 0, 0, 0.13)',
                stroke: 'rgba(192, 183, 232, 0.33)',
                services: 'rgba(14, 14, 14, 0.32)',
            },
        },
    },
    plugins: [],
};
export default config;
