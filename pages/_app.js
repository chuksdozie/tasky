import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ToastContainer />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
