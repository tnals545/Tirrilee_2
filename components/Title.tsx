import Head from "next/head";

interface Title {
  title: string;
}

// page title setting
const Title = ({ title }: Title) => {
  return (
    <>
      <Head>
        <title>Tirrilee | {title}</title>
      </Head>
    </>
  );
};

export default Title;
