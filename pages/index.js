import React from 'react';
import Head from 'next/head';
import { Home } from 'react/components/home';
import { withReduxSaga } from 'redux/store';

class Index extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/fonts.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-open-sans.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-raleway.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/simpleMobileMenu.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/style.css"
          />
        </Head>
        <Home />
      </React.Fragment>
    );
  }
}

export default withReduxSaga(Index);
