import React from 'react';
import Head from 'next/head';
import { Faq } from 'react/components/faq';
import { AuthActions } from 'redux/actions';

class FAQs extends React.PureComponent {
  /* static async getInitialProps({ store, isServer, query }) {
		if (isServer) {
			store.dispatch(
					AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
			);
		}
	} */

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil - FAQs</title>
          <meta name="viewport" content="width=640, user-scalable=0" />
          <meta
            name="description"
            content="Premium Quality Hemp Extract Products, Organic and Natural"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/simpleMobileMenu.css"
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
        </Head>
        <Faq />
      </React.Fragment>
    );
  }
}

export default FAQs;
