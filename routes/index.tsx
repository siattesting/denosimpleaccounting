import { Head } from "$fresh/runtime.ts";
// import { HeadElement } from "../components/HeadElement.tsx";
// import { Header } from "../components/Header.tsx";
// import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App | To try with Pocketbase or PouchDB</title>
      </Head>
      {
        /* <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <p>
          <em>
            To try with Pocketbase or PouchDB
          </em>
        </p>
        {/* <Counter start={3} /> */
      }
      {/* </div> */}

      <div class="w-full h-full mt-5">
        <h1>
          Index page
        </h1>
      </div>
    </>
  );
}
