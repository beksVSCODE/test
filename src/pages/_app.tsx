// _app.tsx
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { MainLayout } from '@/components/layouts/MainLayout';
import '@/styles/globals.css';
import '@/styles/swiper-restyle.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import i18n from '../i18n';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function MyApp({ Component, pageProps }) {
  // Синхронизация с i18n
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <>
      <Head>
        <title>Hydra</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
        <ToastContainer position="bottom-left" autoClose={2000} />
      </MainLayout>
    </>
  );
}

export default appWithTranslation(MyApp);
