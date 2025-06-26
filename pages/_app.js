// Application
import { Provider } from "@/components/ui/provider";
import Layout from "@/components/layouts/main";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

export default function App({ Component, pageProps, router }) {
  return (
    <Provider cookies={pageProps.cookies}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Provider>
  );
}
