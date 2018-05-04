import React from 'react';

class PromoSectionTwoMobile extends React.PureComponent {
  render() {
    return (
      <div id="section-two">
        <p className="s2-hd-txt">
          <span>AMERICAN SCIENCE HEMP OIL </span>
          <br />Enriched with Cannabidiol Extract (CBD)
        </p>

        {/*<i className="s2-img sprite1 sprite-s2-img" />*/}
        <img src="/static/promo/mobile/images/s2-img.jpg"
             className="s2-img" alt="" />

        <p className="s2-txt1">
          Cannabidiol is a non-psychoactive component of Hemp that has been
          clinically proven to offer a wide range of therapeutic health
          benefits. <strong>American Science Hemp Oil</strong> is formulated
          with hemp extract that is organically grown & harvested in the USA and
          is patented (under Patent #6,630,507) to support nutritional health of
          aging bodies.
          <br />
          <br />{' '}
          <b>
            When used as directed, American Science Hemp Oil supports mood
            patterns, improves sleep cycle, triggers a healthy inflammatory
            response, and boosts cognitive performance.
          </b>
        </p>
        <p className="s2-txt3">All Natural Organic Hemp Extract</p>
        <p className="s2-txt4">Quick Absorption & Fast Action Formula</p>
        <p className="clearall" />
        <ul className="s2-list">
          <li>
            <i className="s2-icons sprite3 sprite-s2limg1" /> <span>LEGAL</span>
            <br />IN ALL 50
            <br />US STATES
          </li>
          <li>
            <i className="s2-icons sprite3 sprite-s2limg2" /> <span>100%</span>
            <br />THC FREE
            <br />& NO HIGH
          </li>
          <li>
            <i className="s2-icons sprite3 sprite-s2limg3" />{' '}
            <span>DOESNT </span>
            <br />SHOW ON
            <br />DRUG TEST
          </li>
          <li>
            <i className="s2-icons sprite3 sprite-s2limg4" />{' '}
            <span>AVAILABLE </span>
            <br />WITHOUT PRESCRIPTION
          </li>
        </ul>
        <p className="clearall" />
        <div className="strip sprite3 sprite-strip-bg">
          <p className="strip-txt">
            <b>ORDER YOUR BOTTLE OF</b> <span>HEMP OIL</span> <b>TODAY!</b>
            <br />Limited Time Offer - Get Free Bottles
            <br />On Select Packages
          </p>
        </div>
      </div>
    );
  }
}

export { PromoSectionTwoMobile };
