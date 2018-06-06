import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import { PromoCheckoutContainer } from 'react/containers';
import { AuthActions, OrderActions } from 'redux/actions';
import { PromoSession } from 'react/components/common';
import idx from 'idx';

class Promo extends React.PureComponent {
  static async getInitialProps(props) {
    const {
      store, isServer, query, req,
    } = props.ctx;
    if (isServer) {
      store.dispatch(
        AuthActions.setUniqueSessionId({ sessionId: query.sessionId }),
      );
    }
  }

  componentDidMount() {
    // const { query } = this.props;
    // if (query.orderId) {
    this.props.getOrderDetails({
      // orderId: query.orderId,
      headers: {
        'x-ascbd-req-origin': window.location.hostname,
      },
    });
    // }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>American Science CBD Hemp Oil</title>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-hind.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/formvalidation/formValidation.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo/desktop/checkout.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/promo-style.css"
          />
        </Head>
        <PromoSession pageType="checkoutPage" />
        <PromoCheckoutContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = reduxState => ({
  order: idx(reduxState, _ => _.order.order),
});

export default connect(mapStateToProps, { ...OrderActions })(Promo);
