import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
