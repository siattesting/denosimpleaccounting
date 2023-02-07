import { AppProps } from "$fresh/server.ts";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import NavComponent from "../components/NavComponent.tsx";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <NavComponent />
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Component />
      </section>
    </>
  );
}
