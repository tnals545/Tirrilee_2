import Head from "next/head";

interface Title {
  title: string;
}

// page title setting
export default function Title({ title }: Title) {
  return (
    <>
      <Head>
        <title>Tirrilee | {title}</title>
      </Head>
    </>
  );
}
