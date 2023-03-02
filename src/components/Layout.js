import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Agustín Franco Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-7xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
