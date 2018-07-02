import Document, { Head, Main, NextScript } from 'next/document';


export default class DocumentWrapper extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <title>NextJS | Serverless | Express</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="icon" type="image/png" href="/static/images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
