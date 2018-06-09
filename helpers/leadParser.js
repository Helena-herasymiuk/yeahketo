const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const parseLeadPostData = (values) => {
  const AffiliateID = getParameterByName('sourceValue1');
  const SubAffiliateID = getParameterByName('sourceValue2');
  const TransactionID = getParameterByName('sourceValue3');
  const source = getParameterByName('sourceValue4');
  const OfferID = getParameterByName('sourceValue5');
  const utm_source = getParameterByName('utm_source');
  const utm_medium = getParameterByName('utm_medium');
  const utm_campaign = getParameterByName('utm_campaign');
  const utm_term = getParameterByName('utm_term');
  const utm_content = getParameterByName('utm_content');
  
  const tracking_vars = Object.assign({},
    AffiliateID ? { AffiliateID } : null,
    SubAffiliateID ? { SubAffiliateID } : null,
    TransactionID ? { TransactionID } : null,
    OfferID ? { OfferID } : null,
    utm_source ? { utm_source } : null,
    utm_medium ? { utm_medium } : null,
    utm_campaign ? { utm_campaign } : null,
    utm_term ? { utm_term } : null,
    utm_content ? { utm_content } : null
  );

  const postData = {
    "Email": values.Email,
    "Phone": values.Phone,
    "ShippingAddress": {
      "FirstName": values.FirstName,
      "LastName": values.LastName,
      "Address1": values.Address1,
      "Address2": values.Address2,
      "City": values.City,
      "State": values.State,
      "ZipCode": values.ZipCode
    }
  }
  return postData;
};

const parseOrderPostData = (values, pack) => {
  const AffiliateID = getParameterByName('sourceValue1');
  const SubAffiliateID = getParameterByName('sourceValue2');
  const TransactionID = getParameterByName('sourceValue3');
  const source = getParameterByName('sourceValue4');
  const OfferID = getParameterByName('sourceValue5');
  const utm_source = getParameterByName('utm_source');
  const utm_medium = getParameterByName('utm_medium');
  const utm_campaign = getParameterByName('utm_campaign');
  const utm_term = getParameterByName('utm_term');
  const utm_content = getParameterByName('utm_content');
  
  const tracking_vars = Object.assign({},
    AffiliateID ? { AffiliateID } : null,
    SubAffiliateID ? { SubAffiliateID } : null,
    TransactionID ? { TransactionID } : null,
    OfferID ? { OfferID } : null,
    utm_source ? { utm_source } : null,
    utm_medium ? { utm_medium } : null,
    utm_campaign ? { utm_campaign } : null,
    utm_term ? { utm_term } : null,
    utm_content ? { utm_content } : null
  );

  const shippingLocalStorageData = JSON.parse(localStorage.getItem('parsedShipping'));
  const postData = {
    "BillingAddress": {
      "FirstName": shippingLocalStorageData.ShippingAddress.FirstName,
      "LastName": shippingLocalStorageData.ShippingAddress.LastName,
      "Address1": shippingLocalStorageData.ShippingAddress.Address1,
      "Address2": shippingLocalStorageData.ShippingAddress.Address2,
      "City": shippingLocalStorageData.ShippingAddress.City,
      "State": shippingLocalStorageData.ShippingAddress.State,
      "ZipCode": shippingLocalStorageData.ShippingAddress.ZipCode
    },
    "PaymentInformation": {
      "ExpMonth": values.cardExpiry.cardMonth,
      "ExpYear": values.cardExpiry.cardYear,
      "CCNumber": values.cardNumber,
      "NameOnCard": `${shippingLocalStorageData.ShippingAddress.FirstName}${shippingLocalStorageData.ShippingAddress.LastName}`,
      "CVV": values.cardSecurityCode,
      "ProductGroups": [{
        ProductGroupKey: pack.id
      }]
    }
  }
  return postData;
};

export { parseLeadPostData, parseOrderPostData };
