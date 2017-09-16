import Head from 'next/head'

export default ({ title, children }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://unpkg.com/tachyons" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
      <style>
        {`
          body {
            font-family: roboto;
          }
        `}
      </style>
    </Head>
    {children}
  </div>
)
