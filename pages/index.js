import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instageram 2.0 by YouTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
}
