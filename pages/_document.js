import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

import Header from '../components/Header';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <div>
            <Header title="Tarjetas de credito"/>
            <div className="container">
              <Main />
            </div>
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
