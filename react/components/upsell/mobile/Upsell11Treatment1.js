import React from 'react';
import Head from 'next/head';
import moment from 'moment';
import axios from 'axios';
import { PromoSession, Footer } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

/**
 * @class Upsell11Component
 * @extends {React.PureComponent}
 * @description Mobile Component rendered after Upsell1 page
 */
class Upsell11Treatment1Component extends React.PureComponent {
  componentDidMount() {
    this.postVisitEvent();
  }

  upgrade = button => {
    this.props.sendTransactionDetails(
      'order-confirmation-upsell-1-1',
      'Upsell11Treatment1',
    );
    this.postActionTracker('upsell-1-1-yes', `upsell-1-1-yes-${button}`);
    this.props.upgrade(212, '/promo/mobile/upsell-2?&prev=upsell11');
  };

  skipUpsell = button => {
    this.postActionTracker('upsell-1-1-no', `upsell-1-1-no-${button}`);
    window.location.assign(`/promo/mobile/upsell-2?${getQueryString()}`);
  };

  postActionTracker = (name, value_string) => {
    const { abtastyParams } = this.props;
    const body = {
      name,
      value_string,
      type: 'CLICK',
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'MOBILE_PHONE',
        origin: 'Upsell11Treatment1',
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'action_tracking_event' });
  };

  postVisitEvent = () => {
    const { abtastyParams } = this.props;
    const body = {
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'DESKTOP',
        origin: window.location.href,
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'visit_event' });
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <link
            href="/static/mobile/css/upsell-treatment1.css"
            rel="stylesheet"
          />
        </Head>
        <PromoSession pageType="upsellPage1" />
        <div className="up-strip">
          <h3>YOU QUALIFY FOR A LIMITED TIME DISCOUNT</h3>
          <p>
            Add 1 Bottle Of <br />
            <strong>Maximum Strength CBD Capsules</strong> To Your Order Today!
          </p>
        </div>
        <div className="upsell-box">
          <p className="up-txt1">Amplify Your Results</p>
          <p className="with-txt">with</p>
          <p className="up-txt2">Maximum Strength CBD Capsules</p>
          <img
            src="/static/assets/images/up-prod-2.jpg"
            className="up-prod"
            alt="upsell-prod-2"
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">Buy 1 Bottle Of CBD Capsules</p>
            <p className="price-box-txt2">Save 30% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/arrow-left-upsell.png"
                width="77"
                height="33"
                alt="arrow-left-upsell"
                className="arrow-left"
              />
              87.00{' '}
              <img
                src="/static/assets/images/arrow-right.png"
                width="77"
                height="33"
                alt="arrow-right"
                className="arrow-right"
              />
            </p>
          </div>

          <div className="bnt-sec">
            <p className="offer-valid">
              Offer Valid Till{' '}
              <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
            </p>
            <a
              id="cheaper-capsule-yes-top"
              href="javascript:void(0)"
              onClick={() => this.upgrade('top')}
            >
              <img
                src="/static/assets/images/ord-btn.png"
                alt="order-btn"
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <a
                id="cheaper-capsule-no-top"
                href="javascript:void(0)"
                onClick={() => this.skipUpsell('top')}
              >
                <img
                  src="/static/assets/images/cut-icon.png"
                  width="15"
                  height="15"
                  alt="cut-icon"
                  className="cut-icon"
                />
                {"No, I don't want better results."}
              </a>
            </p>
          </div>
        </div>
        <SatisfactionBox onSkip={this.skipUpsell} onUpgrade={this.upgrade} />
        <div className="bnt-sec">
          <p className="offer-valid">
            Offer Valid Till{' '}
            <span id="showdate"> {moment().format('Do MMMM YYYY')}</span>
          </p>
          <a
            id="cheaper-capsule-yes-bottom"
            href="javascript:void(0)"
            onClick={() => this.upgrade('bottom')}
          >
            <img
              src="/static/assets/images/ord-btn.png"
              alt="order-btn"
              width="370"
              height="71"
              className="ord-btn pulse"
            />
          </a>
          <p className="thanks-txt">
            <a
              id="cheaper-capsule-no-bottom"
              href="javascript:void(0)"
              onClick={() => this.skipUpsell('bottom')}
            >
              <img
                src="/static/assets/images/cut-icon.png"
                width="15"
                height="15"
                alt="cut-icon"
                className="cut-icon"
              />
              {"No, I don't want better results."}
            </a>
          </p>
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

const Upsell11Treatment1 = withRouter(Upsell11Treatment1Component);

export { Upsell11Treatment1 };