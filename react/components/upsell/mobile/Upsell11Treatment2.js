import React from 'react';
import Head from 'next/head';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';

/**
 * @class Upsell11Treatment2Component
 * @extends {React.PureComponent}
 * @description Mobile Component rendered after Upsell1 page
 */
class Upsell11Treatment2Component extends React.PureComponent {
  upgrade = () => {
    this.props.upgrade(212, '/promo/mobile/upsell-2');
  };
  skipUpsell = () => {
    window.location.assign(`/promo/mobile/upsell-2?${getQueryString()}`);
  };
  render() {
    console.info('Rendering Upsell11 Treatment 2');
    return (
      <React.Fragment>
        <Head>
          <link
            href="/static/mobile/css/upsell-treatment2.css"
            rel="stylesheet"
          />
        </Head>
        <PromoSession pageType="upsellPage1" />
        <div className="upsell-top">
          <div className="contentWrap">
            <img
              alt="logo"
              src="/static/assets/images/logo.png"
              className="up-logo"
              width="180"
            />
            <img
              src="/static/assets/images/ups-step.png"
              alt=""
              className="up-step"
            />
          </div>
        </div>
        <div className="up-mid1">
          <div className="contentWrap">
            <p className="up-txt1">WAIT! Your Order Is Not Complete</p>
            <p className="up-txt2">
              Get better results by adding on the <strong>CBD Capsules</strong>{' '}
              to your order. Take advantage of our special offer-{' '}
              <strong>Buy 1 Bottle &amp; Get a 30% Discount</strong>
            </p>

            <div className="pop-coupon">
              <img
                alt="ups1"
                src="/static/assets/images/up1-single.png"
                style={{
                  position: 'absolute',
                  top: '60px',
                  left: '20px',
                  width: '220px',
                }}
              />
              <div className="up2-content">
                <img
                  alt=""
                  src="/static/assets/images/timer-icon.png"
                  className="up-timer"
                />
                <p className="prod-txt">
                  Buy 1 Bottle Of<br />
                  <span>CBD Capsules</span>
                </p>
                <p className="prod-txt">+</p>
                <p className="prod-txt">
                  Get A Discount<br />
                  <span>Save 30% Today</span>
                </p>
                <p className="price-txt">
                  Today Only<br />
                  <span>$129.95</span> $87.00/ea
                </p>
                <p className="shipping-txt">
                  Plus we'll pay for the added shipping cost
                </p>
              </div>
            </div>

            <p className="up-txt3">
              This amazing offer won't ever be made again, and as always, you're
              backed by a rock-solid, <span>100% money-back-guarantee</span>.
              Just click the coupon above or the <span>"Yes"</span> button below
              now to stock up while you can!
            </p>
            <input
              src="/static/assets/images/up2-btn.png"
              alt=""
              className="up-btn"
              type="image"
              onClick={this.upgrade}
            />
            <img
              src="/static/assets/images/secure256.png"
              alt=""
              className="up-secur"
            />
            <a
              href="javascript:void(0);"
              className="up-no-thanks"
              onClick={this.skipUpsell}
            >
              <img alt="no thanks" src="/static/assets/images/close-icon.png" />&nbsp;No,
              I don't want better results.
            </a>
            <img
              src="/static/assets/images/card-secure.png"
              alt=""
              className="card-secure"
            />
          </div>
        </div>
        <div id="footer">
          <div className="container">
            <div className="ftr-txt">
              <Footer noLogo>
                <span />
              </Footer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const Upsell11Treatment2 = withRouter(Upsell11Treatment2Component);

export { Upsell11Treatment2 };
