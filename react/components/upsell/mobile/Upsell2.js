import React from 'react';
import { PromoSession } from 'react/components/common';
import { getQueryString } from 'helpers';
import { Carousel } from './Carousel';
import { SatisfactionBox } from './SatisfactionBox';
import { Shortage } from '../Shortage';
import { UpsellFooter } from '../UpsellFooter';
import Link from 'next/link';

class Upsell2 extends React.PureComponent {
  upgrade = productId => {
    this.props.upgrade(productId, '/promo/mobile/thankyou');
  };
  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  render() {
    const { orderId } = this.props.url.query;
    return (
      <React.Fragment>
        <PromoSession pageType="upsellPage2" />
        <div className="up-strip">
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            87% Customers Added The<br />
            <strong>CBD Pain Relief Warming Balm</strong> To Their Order!
          </p>
        </div>

        <div className="upsell-box">
          <p className="up-txt1">GET INSTANT PAIN RELIEF</p>
          <p className="with-txt">with</p>
          <p className="up-txt2">CBD Warming Balm</p>
          <img
            src="/static/assets/images/upsell2-mobile/up-prod3.jpg"
            className="up-prod"
          />
          <div className="clearall" />
          <div className="price-box">
            <p className="price-box-txt1">
              Buy 2 Jars + <span>Get 1 Free</span>
            </p>
            <p className="price-box-txt2">Save 60% Today</p>
            <p className="price-box-txt3">
              <img
                src="/static/assets/images/upsell2-mobile/arrow-left.png"
                width="77"
                height="33"
                alt=""
                className="arrow-left"
              />
              <span className="old-price">
                <img src="/static/assets/images/upsell2-mobile/price-cut.png" />$130/<sup >
                  ea
                                                                                     </sup>
              </span>{' '}
              $87/<sup>ea</sup>{' '}
              <img
                src="/static/assets/images/upsell2-mobile/arrow-right.png"
                width="77"
                height="33"
                alt=""
                className="arrow-right"
              />
            </p>
          </div>

          <div className="bnt-sec">
            <a href="javascript:void(0)" onClick={this.upgrade}>
              <img
                src="/static/assets/images/ord-btn.png"
                alt=""
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <Link href={`/promo/mobile/upsell-2-1?${getQueryString()}`}>
                <a>
                  <img
                    src="/static/assets/images/cut-icon.png"
                    width="15"
                    height="15"
                    alt=""
                    className="cut-icon"
                  />{' '}
                  No, I don't want better results.
                </a>
              </Link>
            </p>
          </div>

          <div className="up-strip" style={{ 'margin-top': '50px' }}>
            <h4>BENEFITS OF CBD WARMING BALM INCLUDE ...</h4>
          </div>

          <div className="clearall" />

          <div className="up-bottom-box">
            <img src="/static/assets/images/upsell2-mobile/up1-img1.png" />
            <p className="box-txt1">FULL SPECTRUM FORMULA</p>
            <p className="box-txt2">
              CBD Warming Balm is INFUSED with highly a concentrated CBD which
              is known for its medicinal properties and yields a more effective
              solution than any balm in the world.
            </p>
          </div>

          <div className="up-bottom-box">
            <img src="/static/assets/images/upsell2-mobile/up2-img2.png" />
            <p className="box-txt1">OFFERS ANTIOXIDANT SUPPORT</p>
            <p className="box-txt2">
              CBD Warming Balm works at a cellular level to combat free radical
              damage, boost overall immunity, and provides healing as well as
              aromatherapy benefits.
            </p>
          </div>

          <div className="up-bottom-box">
            <img src="/static/assets/images/upsell2-mobile/up2-img3.png" />
            <p className="box-txt1">INSTANTLY RELIEVES CHRONIC PAIN</p>
            <p className="box-txt2">
              Melt away muscle fatigue, pain, swelling, and discomfort with
              American Science CBD WARMING BALM'S deep, penetrating warmth
              providing FAST relief that will amaze you.
            </p>
          </div>

          <div className="bnt-sec">
            <a href="javascript:void(0)" onClick={this.upgrade}>
              <img
                src="/static/assets/images/ord-btn.png"
                alt=""
                width="370"
                height="71"
                className="ord-btn pulse"
              />
            </a>
            <p className="thanks-txt">
              <Link href={`/promo/mobile/upsell-2-1?${getQueryString()}`}>
                <a>
                  <img
                    src="/static/assets/images/cut-icon.png"
                    width="15"
                    height="15"
                    alt=""
                    className="cut-icon"
                  />{' '}
                  No, I don't want better results.
                </a>
              </Link>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Upsell2 };
