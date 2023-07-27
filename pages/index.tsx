import { Details } from "@/components/Details";
import { SearchBar } from "@/components/SearchBar";
import Head from "next/head";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>Frontend Mentor | IP Address Tracker</title>
      </Head>

      <main className={`flex min-h-screen flex-col`}>
        <section id="topSection" className="pb-8">
          <header className="flex w-full mt-8 justify-center items-center">
            <h1 className="font-Rubik font-medium text-white text-2xl">
              {" "}
              IP Address Tracker
            </h1>
          </header>
          <SearchBar ipaddress="" />
          <div className="relative w-full">
            <Details ipaddress="" location="" timezone="" isp="" />
          </div>
        </section>
        <section className="bg-[F2EFE9] w-full h-full">
          <MapView />
        </section>
      </main>
    </>
  );
}
