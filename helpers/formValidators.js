import validator from 'validator';
import moment from 'moment';
import creditCartType from 'credit-card-type';
import idx from 'idx';

const shippingFormValidator = values => {
  const errors = {};
  if (!values.firstName || !values.firstName.trim()) {
    errors.firstName = 'Please enter your first name.';
  }
  if (!values.lastName || !values.lastName.trim()) {
    errors.lastName = 'Please enter your last name.';
  }
  if (!values.address || !values.address.trim()) {
    errors.address = 'Please enter your address.';
  } else if (values.address && values.address.trim().length > 100) {
    errors.address = 'The address should be less than 100 characters long.';
  }
  if (!values.city || !values.city.trim()) {
    errors.city = 'Please enter your city.';
  } else if (values.city && values.city.trim().length > 50) {
    errors.city = 'The city should be less than 50 characters long.';
  }
  if (!values.state || !values.state.trim() || values.state === 'State') {
    errors.state = 'Please enter your state.';
  }
  if (!values.postalCode || !values.postalCode.trim()) {
    errors.postalCode = 'Please enter your zip code.';
  } else if (values.postalCode && values.postalCode.trim().length !== 5) {
    errors.postalCode = 'The zip code should be 5 characters long.';
  }
  if (!values.phoneNumber || !values.phoneNumber.trim()) {
    errors.phoneNumber = 'Please enter your phone number.';
  } else if (values.phoneNumber && values.phoneNumber.length !== 14) {
    errors.phoneNumber =
      'Please enter a valid 10-digit US phone number (must not include spaces or special characters).';
  }
  if (!values.email || !values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (values.email && !validator.isEmail(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
};

// this validator is used in promo pages
const billingFormValidator = values => {
  const errors = shippingFormValidator(values);
  if (!values.cardExpiry) {
    errors.cardExpiry = 'Please enter your card details.';
  } else if (
    !idx(values, _ => _.cardExpiry.cardMonth) ||
    !idx(values, _ => _.cardExpiry.cardMonth).trim()
  ) {
    errors.cardExpiry = 'Please enter Expiry month.';
  } else if (
    !idx(values, _ => _.cardExpiry.cardYear) ||
    !idx(values, _ => _.cardExpiry.cardYear).trim()
  ) {
    errors.cardExpiry = 'Please enter Expiry year.';
  } else {
    const { cardMonth, cardYear } = values.cardExpiry;
    const currentMonth = moment().month();
    const currentYear = moment().year();
    if (Number(cardMonth) < currentMonth && Number(cardYear) <= currentYear) {
      errors.cardExpiry = 'Card has expired.';
    }
  }
  if (!values.cardNumber) {
    errors.cardNumber = 'Please enter your Card Number.';
  } else if (values.cardNumber) {
    const value = values.cardNumber.replace(/\s/g, '');
    const cardTypes = creditCartType(value);
    let length = 16;
    if (cardTypes.length === 1) {
      [length] = cardTypes[0].lengths;
    }
    if (value.length !== length) {
      errors.cardNumber = `Card number should be ${length} digits.`;
    }
  }

  if (!values.cardSecurityCode || !values.cardSecurityCode.trim()) {
    errors.cardSecurityCode = 'Please enter your Security Code.';
  } else if (values.cardSecurityCode) {
    let length = 3;
    if (values.cardNumber) {
      const value = values.cardNumber.replace(/\s/g, '');
      const cardTypes = creditCartType(value);
      if (cardTypes.length === 1) {
        length = cardTypes[0].code.size;
      }
      if (values.cardSecurityCode.length !== length) {
        errors.cardSecurityCode = `Security code should be ${length} digits.`;
      }
    }
  }
  return errors;
};

// this validator is used inside cart page
// TODO: cardFormValidator and billingFormValidator should be refactored into one,
// in future if we have similar UX for both
const cardFormValidator = values => {
  const errors = {};
  if (!(values.cardMonth && (values.cardMonth || values.cardMonth.trim()))) {
    errors.cardMonth = 'Please enter Expiry month.';
  }
  if (!(values.cardYear && (values.cardYear || values.cardYear.trim()))) {
    errors.cardYear = 'Please enter Expiry Year.';
  }
  const { cardMonth, cardYear } = values;
  const currentMonth = moment().month();
  const currentYear = moment().year();
  if (Number(cardMonth) < currentMonth && Number(cardYear) <= currentYear) {
    errors.cardExpiry = 'Card has expired.';
    errors.cardMonth = 'Card has expired.';
    errors.cardYear = 'Card has expired.';
  }
  if (!values.cardNumber) {
    errors.cardNumber = 'Please enter your Card Number.';
  } else if (values.cardNumber) {
    const value = values.cardNumber.replace(/\s/g, '');
    const cardTypes = creditCartType(value);
    let length = 16;
    if (cardTypes.length === 1) {
      [length] = cardTypes[0].lengths;
    }
    if (value.length !== length) {
      errors.cardNumber = `Card number should be ${length} digits.`;
    }
  }

  if (!values.cardSecurityCode || !values.cardSecurityCode.trim()) {
    errors.cardSecurityCode = 'Please enter your Security Code.';
  } else if (values.cardSecurityCode) {
    let length = 3;
    if (values.cardNumber) {
      const value = values.cardNumber.replace(/\s/g, '');
      const cardTypes = creditCartType(value);
      if (cardTypes.length === 1) {
        length = cardTypes[0].code.size;
      }
      if (values.cardSecurityCode.length !== length) {
        errors.cardSecurityCode = `Security code should be ${length} digits.`;
      }
    }
  }
  return errors;
};

const shippingCartFormValidator = values => {
  let errors = shippingFormValidator(values);
  const orderValues = values.order || {};
  const shippingValues = values.shipping || {};
  const shippingErrors = shippingFormValidator(shippingValues);
  const cardErrors = cardFormValidator(orderValues);
  errors = { ...errors, shipping: { ...shippingErrors }, order: { ...cardErrors } };
  return errors;
};

const normalizePhone = value => {
  if (!value) {
    return value;
  }
  const onlyNums = value.replace(/[^\d]/g, '');
  if (onlyNums.length <= 3) {
    return `(${onlyNums}`;
  }
  if (onlyNums.length <= 6) {
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;
  }
  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`;
};

const normalizePostalCode = value => {
  if (isNaN(value)) {
    return value.substring(0, value.length - 1);
  }

  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');
  return onlyNums.slice(0, 5);
};

const normalizeCardNumber = value => {
  value = value.replace(/\s/g, '');
  if (isNaN(value)) {
    value = value.substring(0, value.length - 1);
  }
  const cardTypes = creditCartType(value);
  if (cardTypes.length === 1) {
    const [length] = cardTypes[0].lengths;
    let { gaps } = cardTypes[0];
    gaps = [0, ...gaps, length];
    let returnVal = [];
    for (let i = 0; i < gaps.length - 1; i += 1) {
      returnVal = [...returnVal, value.substring(gaps[i], gaps[i + 1])];
    }
    return returnVal.filter(v => !!v).join(' ');
  }
  return [
    value.substring(0, 4),
    value.substring(4, 8),
    value.substring(8, 12),
    value.substring(12, 16),
  ]
    .filter(v => !!v)
    .join(' ');
};

const normalizeSecurityCode = (value, previousValue, allValues) => {
  if (isNaN(value)) {
    value = value.substring(0, value.length - 1);
  }
  let length = 3;
  let { cardNumber } = allValues;
  if (cardNumber) {
    cardNumber = cardNumber.toString().replace(/\s/g, '');
    const cardTypes = creditCartType(cardNumber);
    if (cardTypes.length === 1) {
      length = cardTypes[0].code.size;
    }
  }
  return value.substring(0, length);
};

export {
  shippingFormValidator,
  billingFormValidator,
  shippingCartFormValidator,
  normalizePhone,
  normalizePostalCode,
  normalizeCardNumber,
  normalizeSecurityCode,
};
