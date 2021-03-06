import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal1 from "../components/Modal1";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instageram 2.0 by YouTube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

      <Header />

      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal1 />
    </div>
  );
}
