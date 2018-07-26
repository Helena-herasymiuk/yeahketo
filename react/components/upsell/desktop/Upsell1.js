import React from 'react';
import { PromoSession } from 'react/components/common';
import { withRouter } from 'next/router';
import { getQueryString } from 'helpers';
import { SatisfactionBox } from './SatisfactionBox';

/**
 * @class Upsell1Component
 * @extends {React.PureComponent}
 * @description Desktop component rendered after checkout page <br />
 */
class Upsell1Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      shouldAddPixel: false,
      revenue: ''
    };
  }
 
  componentDidMount() {
    let upsell1 = JSON.parse(localStorage.getItem('upsell1'));
    upsell1 = upsell1[0];
 
    this.setState({
      shouldAddPixel: true
    },() => {
      this.setState({ revenue: upsell1.OrderInfo.TotalAmount})
    });
  }

  upgrade = () => {
    this.props.upgrade(213, '/promo/desktop/upsell-2');
  };

  skipUpsell = () => {
    window.location.assign(`/promo/desktop/upsell-1-1?${getQueryString()}`);
  };

  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.shouldAddPixel ?
          <React.Fragment>
            <script>{`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '321559294932280');
              fbq('track', 'Purchase', {currency: 'USD', value: ${this.state.revenue}});
              `}
            </script>

            <noscript>
              <iframe
                src={`https://thefiresoflife.com/pixel_page.html?id=321559294932280&amp;ev=Purchase&amp;cd[currency]=USD&amp;cd[value]=${this.state.revenue}`}
                width="1"
                height="1"
                alt=""
                style={{display: 'none'}}
              />
            </noscript>
          </React.Fragment> : null
        }

        <PromoSession pageType="upsellPage1" />
        <div className="upsell-strip">
          <h3>WAIT! YOUR ORDER IS NOT COMPLETE!</h3>
          <p>
            93% of Customers Added The{' '}
            <strong>Maximum Strength CBD Capsules</strong> To Their Order!{' '}
          </p>
        </div>
        <div className="up-mid-box-right">
          <img
            src="/static/assets/images/up1-bottle.png"
            alt="upsell-1-bottle"
            className="up-product"
          />
          <img
            alt="upsell-arrow-1"
            src="/static/assets/images/up-arw1.png"
            style={{ position: 'absolute', left: '260px', top: '400px' }}
          />
          <div className="up-rgt-content">
            <p className="up-txt1">Amplify Your Results</p>
            <p className="with-txt">with</p>
            <p className="up-txt2">Maximum Strength CBD Capsules</p>
            <div className="price-box">
              <p className="price-box-txt1">
                Buy 2 Bottles + <span>Get 1 Free</span>
              </p>
              <p className="price-box-txt2">Save 60% Today</p>
              <p className="price-box-txt3">
                <img
                  src="/static/assets/images/arrow-left-upsell.png"
                  alt="arrow-left-upsell"
                  className="arrow-left"
                  width="77"
                  height="33"
                />
                <span className="old-price">
                  <img
                    src="/static/assets/images/price-cut.png"
                    alt="price-cut"
                  />
                  120/
                  <sup>ea</sup>
                </span>{' '}
                77/<sup>ea</sup>{' '}
                <img
                  src="/static/assets/images/arrow-right.png"
                  alt="arrow-right"
                  className="arrow-right"
                  width="77"
                  height="33"
                />
              </p>
            </div>
            <div className="bnt-sec">
              <a
                id="order-pulse-upsell1-desktop"
                href="javascript:void(0)"
                onClick={this.upgrade}
              >
                <img
                  src="/static/assets/images/ord-btn.png"
                  alt="order-btn"
                  className="ord-btn pulse"
                  width="370"
                  height="71"
                />
              </a>
              <p className="thanks-txt">
                <a
                  id="skip-pulse-upsell1-desktop"
                  href="javascript:void(0)"
                  onClick={this.skipUpsell}
                >
                  <img
                    src="/static/assets/images/cut-icon.png"
                    alt="cut-icon"
                    className="cut-icon"
                    width="15"
                    height="15"
                  />{' '}
                  No, I don&apos;t want better results.
                </a>
              </p>
            </div>
          </div>
        </div>
        <SatisfactionBox onSkip={this.skipUpsell} onUpgrade={this.upgrade} />
      </React.Fragment>
    );
  }
}

const Upsell1 = withRouter(Upsell1Component);

export { Upsell1 };
