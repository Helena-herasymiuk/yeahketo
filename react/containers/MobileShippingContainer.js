import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {
  stateslist,
  shippingFormValidator,
  normalizePhone,
  normalizePostalCode,
} from 'helpers';
import {
  Footer,
  TextField,
  SelectField,
  AddressField,
  Spinner,
  SuccessModal,
  ImageModal,
} from 'react/components/common';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'next/router';
import { OrderActions } from 'redux/actions';
import { getQueryString, packages } from 'helpers';

/**
 * @class MobileShippingContainerComponent
 * @extends {React.PureComponent}
 * @description Container Component for Shipping Form on Mobile
 */
class MobileShippingContainerComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showCheckingModal: false,
    };
  }

  componentDidMount() {
    // this.postCampaignActivatedEvent();
    // this.postVisitEvent();
  }

  postCampaignActivatedEvent = () => {
    const { localStorage } = window;
    localStorage.setItem(
      'abtastyParams',
      JSON.stringify(this.props.abtastyParams),
    );
    const body = {
      campaign_id: '312844',
      variation_id: this.props.abtastyParams.variationId,
      tracking_data: {
        device_type: 'MOBILE_PHONE',
        ip: this.props.abtastyParams.ip,
        origin: 'Promo Shipping Mobile',
        timestamp: moment().format(),
        visitor_id: this.props.abtastyParams.visitorId,
      },
    };
    axios.post('/abtasty', {
      ...body,
      action: 'campaign_activated_event',
    });
  };

  postVisitEvent = () => {
    const { localStorage } = window;
    const abtastyParams = this.props.abtastyParams;
    const body = {
      tracking_data: {
        visitor_id: abtastyParams.visitorId,
        device_type: 'MOBILE_PHONE',
        origin: window.location.href,
        timestamp: moment().format(),
        ip: abtastyParams.ip,
      },
    };
    axios.post('/abtasty', { ...body, action: 'visit_event' });
  };

  onSubmit = e => {
    this.setState({ showCheckingModal: true });
    this.props.handleSubmit(values => {
      this.props.submitLeadsForm({
        values,
        router: this.props.router,
        nextUrl: '/promo/mobile/select-package',
      });
    })(e);
  };

  componentDidUpdate(prevProps) {
    const { abtastyParams } = this.props;
    const queryString = getQueryString();
    let nextUrl = '';
    let pack = {};
    // if (!abtastyParams.variationId || abtastyParams.variationId === '412122') {
    //   nextUrl = `/promo/mobile/select-package?${queryString}`;
    // } else if (abtastyParams.variationId === '412123') {
    //   pack = packages[0];
    //   nextUrl = `/promo/mobile/confirm?${queryString}&productId=${pack.id}`;
    // } else if (abtastyParams.variationId === '412124') {
    //   pack = packages[1];
    //   nextUrl = `/promo/mobile/confirm?${queryString}&productId=${pack.id}`;
    // }
    pack = packages[0];
    nextUrl = `/promo/mobile/confirm?${queryString}&productId=${pack.id}`;
    if (
      prevProps.submitStatus !== 'success' &&
      this.props.submitStatus === 'success'
    ) {
      this.setState({ showCheckingModal: false });
      setTimeout(() => {
        const { localStorage } = window;
        localStorage.setItem('pack', JSON.stringify(pack));
        window.location.assign(nextUrl);
      }, 1000);
    }
  }

  hideErrorModal = () => this.setState({ showErrorModal: false });

  render() {
    const { adv_sub, offerId, transaction_id } = this.props.query;
    return (
      <div className="mobile-body">
        <iframe
          src={`https://kowboykit.com/api/event/purchase/?clickid=${adv_sub}&apikey=cad0f78407d7d852008a98df1b266293&programid=125&tid=${transaction_id}&oid=${offerId}`}
          frameBorder="0"
          width="1"
          height="1"
          style={{ position: 'absolute' }}
        />
        <div id="container">
          <div className="getheight">
            <div className="spng-hd">
              <div className="spng-hd2">
                <img
                  src="/static/promo/mobile/images/ck-top.jpg"
                  alt="American Science CBD"
                  className="sping-logo"
                />
                <p className="clearall" />
                <p className="trial-toptxt1">VERIFY YOUR SHIPPING INFO</p>
              </div>
            </div>
            <div id="trialsec2">
              <div className="clearfix" />
              <div className="trialform">
                <form
                  id="form-contact"
                  className="pure-form pure-form-aligned fv-form fv-form-pure"
                >
                  <div className="trialfrmmid">
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="FirstName"
                      label="First Name*"
                      placeholder="First Name"
                      autoCorrect="off"
                      autoComplete="given-name"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="LastName"
                      label="Last Name*"
                      placeholder="Last Name*"
                      autoCorrect="off"
                      autoComplete="family-name"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={AddressField}
                      name="Address1"
                      label="Address Line 1*"
                      placeholder="Street and number, P.O. box, c/o."
                      changeField={this.props.change}
                      autoCorrect="off"
                      autoComplete="address-line1"
                    />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="Address2"
                      label="Address Line 2"
                      placeholder="Apartment, suite, unit, building, floor, etc."
                      autoCorrect="off"
                      autoComplete="address-line2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts2"
                      component={TextField}
                      name="City"
                      label="City*"
                      placeholder="Your City"
                      autoCorrect="off"
                      autoComplete="address-level2"
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="ZipCode"
                      label="Zip Code*"
                      placeholder="Zip Code"
                      normalize={normalizePostalCode}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoCorrect="off"
                      autoComplete="postal-code"
                    />
                    <Field
                      inputStyle={{ width: '99%' }}
                      containerClass="frmelmnts3"
                      component={SelectField}
                      name="State"
                      label="State*"
                      placeholder="Select State"
                      options={stateslist}
                    />
                    <div className="clearfix" />
                    <Field
                      containerClass="frmelmnts1"
                      component={TextField}
                      name="Phone"
                      label="Phone Number*"
                      placeholder="Example: (123) 555-6789"
                      normalize={normalizePhone}
                      type="tel"
                      autoCorrect="off"
                      autoComplete="tel"
                    />
                    <Field
                      containerClass="frmelmnts3"
                      component={TextField}
                      name="Email"
                      label="Email*"
                      placeholder="Example: email@somewhere.com"
                      type="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      autoComplete="email"
                    />
                  </div>
                  <div className="clearfix" />
                  <div className="shpbtm">
                    <a
                      id="promo-shipping-form-submit-mobile"
                      href="javascript:void(0)"
                      className="button"
                      onClick={this.onSubmit}
                    >
                      <img
                        src="/static/promo/mobile/images/ship-btn.png"
                        alt="American Science CBD"
                        className="ship-btn pulse"
                      />
                    </a>
                    <img
                      src="/static/promo/mobile/images/loogs.png"
                      alt="American Science CBD"
                      className="loogs"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="legal">
            <div className="ftr-txt">
              <Footer promo />
            </div>
          </div>
        </div>
        {this.state.showCheckingModal && (
          <ImageModal>
            <img
              alt=""
              src="/static/assets/images/shipping-page-submitting.png"
              style={{ width: '100%', height: '100%' }}
            />
          </ImageModal>
        )}
        {this.props.submitStatus === 'success' && (
          <ImageModal>
            <img
              alt=""
              src="/static/assets/images/lead_form_success_popup.png"
              style={{ width: '100%', height: '100%' }}
            />
          </ImageModal>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    submitStatus: state.order.submitLeadsFormStatus,
    abtastyParams: state.auth.abtastyParams,
  };
}

const MobileShippingContainer = connect(mapStateToProps, { ...OrderActions })(
  reduxForm({
    form: 'MobileShippingForm',
    validate: shippingFormValidator,
  })(withRouter(MobileShippingContainerComponent)),
);

export default MobileShippingContainer;
