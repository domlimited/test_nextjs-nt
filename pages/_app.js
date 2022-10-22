import "../styles/globals.css";
import { SWRConfig } from "swr";
import http from "../services/http";
// import AppLayout from '../components/layout'
// import 'bootstrap/dist/css/bootstrap.css'
import "startbootstrap-sb-admin-2/css/sb-admin-2.css";
import "startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
// import 'startbootstrap-sb-admin/dist/css/styles.css'
import { SessionProvider } from "next-auth/react";


const fetcher = url => http.get(url).then(res => res.data);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <SWRConfig value={{
        fetcher: fetcher,
        refreshInterval: 0
      }}>
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </SessionProvider>
  );

  // return (
  //   <AppLayout>
  //     <Component {...pageProps} />
  //   </AppLayout>
  // );
}

export default MyApp;
