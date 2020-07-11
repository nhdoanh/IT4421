import moment from "moment";
import {
  ACCESS_TOKEN,
  EMAIL,
  EXPIRE_TIME,
  LOGIN_RESULT,
  API_PERMISSION,
} from "./Constant";
import history from "./history";

const localStorage = require("localStorage");

const EMAIL_REGEX = "^([a-zA-Z0-9\\._])+@([a-zA-Z])+\\.([a-zA-Z]+)$";
const PHONE_REGEX = "^(\\+\\s*)?(\\(?\\s*\\d\\s*-?\\s*\\)?){6,15}$";

export function getAccessToken() {
  try {
    const currentTime = moment().valueOf();
    const expireTime = Number(localStorage.getItem(EXPIRE_TIME));
    if (expireTime <= currentTime) {
      localStorage.removeItem(LOGIN_RESULT);
      localStorage.removeItem(EMAIL);
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(EXPIRE_TIME);
      history.push("/login");
      return null;
    }
    return localStorage.getItem(ACCESS_TOKEN);
  } catch (err) {
    return null;
  }
}

export function getEmail() {
  try {
    return localStorage.getItem(EMAIL);
  } catch (err) {
    return null;
  }
}

export function getApiPermission() {
  try {
    return localStorage.getItem(API_PERMISSION);
  } catch (err) {
    return "";
  }
}

export function capitalize(str) {
  const result = [];
  const s = str.split(" ");
  for (let i = 0; i < s.length; i++) {
    result.push(s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase());
  }
  return result.join(" ");
}

export function convertMS(milliseconds) {
  let day;

  let hour;

  let minute;

  let seconds;

  let result = "";
  seconds = Math.floor(milliseconds / 1000);
  minute = Math.floor(seconds / 60);
  seconds %= 60;
  hour = Math.floor(minute / 60);
  minute %= 60;
  day = Math.floor(hour / 24);
  hour %= 24;
  if (day) {
    result += `${day}d`;
  }
  if (hour) {
    result += ` ${hour}h`;
  }
  if (minute) {
    result += ` ${minute}m`;
  }
  if (seconds) {
    result += ` ${seconds}s`;
  }
  if (result) return result;
  return 0;
}

export function validateInput(inputs, validationRules) {
  const result = {};
  if (inputs === null) {
    return result;
  }
  for (const key in inputs) {
    const value = inputs[key];
    const validation = validationRules[key];
    if (!validation) {
      continue;
    }
    const errors = [];
    if (validation["required"]) {
      if (value && value.length && value.length > 0) {
        // continue;
      } else if (isEmpty(value)) {
        errors.push("Enter valid value to {0}!");
      }
    }
    const minLength = validation["minLength"];
    if (minLength) {
      if (!validateMinLength(value, minLength)) {
        errors.push(`Enter at least ${minLength} characters to {0}!`);
      }
    }
    const emailValidation = validation["email"];
    if (emailValidation && !isEmpty(value)) {
      if (!validateEmail(value)) {
        errors.push("Enter valid email to {0}!");
      }
    }
    const phoneNumberValidation = validation["phoneNumber"];
    if (phoneNumberValidation && !isEmpty(value)) {
      if (!validatePhoneNumber(value)) {
        errors.push("Enter valid phone number to {0}!");
      }
    }
    result[key] = errors;
  }
  return result;
}

export function validateList(inputs, validationRules, delimiter) {
  const result = {};
  if (inputs === null) {
    return result;
  }
  for (const key in inputs) {
    const values = !isEmpty(inputs[key]) ? inputs[key].split(delimiter) : [];
    const validation = validationRules[key];
    if (!validation) {
      continue;
    }
    const errors = [];
    const emailValidation = validation["email"];
    if (emailValidation && values.length > 0) {
      let hasEmailError = false;
      values.forEach(value => {
        if (!isEmpty(value) && !validateEmail(value)) {
          errors.push(`${value} is not a valid email.`);
          hasEmailError = true;
        }
      });
      if (hasEmailError) {
        errors.push("Enter valid emails to {0}!");
      }
    }
    result[key] = errors;
  }
  return result;
}

function isEmpty(str) {
  if (!str) {
    return true;
  }
  str += "";
  if (str.trim() === "") {
    return true;
  }
  return false;
}

function validateMinLength(value, minLength) {
  return value.length >= parseInt(minLength);
}

function validateEmail(value) {
  const emailPattern = new RegExp(EMAIL_REGEX);
  return emailPattern.test(value);
}

function validatePhoneNumber(value) {
  const phonePattern = new RegExp(PHONE_REGEX);
  return phonePattern.test(value);
}

export function validateRequire(input) {
  if (input && input.length && input.length > 0) return true;
  return false;
}

export function getTime(milliseconds) {
  const date = new Date(milliseconds);
  const publish_hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const publish_minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const publish_time = `${publish_hour}:${publish_minute}`;
  return publish_time;
}

export function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export const getSubscriberEmail = (subscribers, subscriberId) => {
  const subscriber =
    subscribers && subscribers.find(item => item.id === subscriberId && subscriberId !== 0);
  const subscriberEmail = subscriber && subscriber.email;
  return subscriberEmail;
};

export const handleError = (dispatch, res) => {
  let response = "";
  if (res && res.message !== "" && res.message !== null) {
    response = res.message;
  }
  if (res && res.errors && res.errors.length > 0) {
    response = "Validation failed: ";
    response += res.errors.reduce(
      (message, error) => (message !== error.messageKey ? message + error.messageKey : message),
      "",
    );
  }
};

export const getProduct = (products, productId) => {
  const product = products && products.find(item => item.id === productId);
  return product;
};

export const convertToDate = date => {
  const result =
    typeof date === "string" || !date
      ? date
      : new Date(date + 86400000).toISOString().substr(0, 10);
  return result;
};


