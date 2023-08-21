import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Weser Ems Eisenbahngesellschaft" />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;