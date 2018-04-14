import '../components/Sidebar.scss';

import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

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

            <link rel="manifest" href="/static/manifest.webmanifest" />

            <meta name="theme-color" content="#ff6600" />
            <link rel="shortcut icon" href="/static/icon.png" />
            <link rel="apple-touch-icon" href="/static/icon.png" />
            <meta name="apple-mobile-web-app-title" content="Hacker News" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
