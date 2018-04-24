import React from 'react';

class PromoStrip extends React.PureComponent {
  render() {
    const { props } = this;
    console.log({ props });
    return (
      <div className="strip dsplay sprite5 sprite-strip">
        <div className="container position">
          <p className="striptxt1">
            ORDER YOUR BOTTLE OF<span> HEMP OIL</span> TODAY!{' '}
          </p>
          <p className="striptxt2">
            Limited Time Offer - Get Free Bottles On Select Packages
          </p>
          <a href="javascript:bookmarkscroll.scrollTo('topfrm')">
            {' '}
            <i className="stripbtn pulse sprite5 sprite-submit" />
          </a>
        </div>
      </div>
    );
  }
}

export { PromoStrip };
