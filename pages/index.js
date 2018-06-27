import React from 'react';
import Head from 'next/head';
import { HomeContainer } from 'react/containers';

class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
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
            href="/static/assets/css/style.css"
          />
          <script
            src="https://cdn.useproof.com/proof.js?acc=Der7ihJpySMVVqyPFbHeXzJjwYm2"
            async
          />
        </Head>
        <HomeContainer />
      </React.Fragment>
    );
  }
}

export default Index;
