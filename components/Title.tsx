import Head from "next/head";

interface Title {
  title: string;
}

// page title setting
const Title = ({ title }: Title) => {
  const pageTitle = `Tirrilee | ${title}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </>
  );
};

export default Title;
