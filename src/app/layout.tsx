"use client";
import "./globals.css";
import Providers from "./provider";
import { store } from "../app/store";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>e-commerce</title>
        <meta name="description" content="fully function e-commerce website" />
      </Head>
      <html lang="en">
        <body className="font-mono overflow-hidden" id="body">
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
