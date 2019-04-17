import { initGoogleAnalytics, onRouteChangeGoogleAnalytics } from './google.analytics';
import { initAdobeAnalytics } from './adobe.analytics';
import { initFacebookAnalytics } from './facebook.analytics';
import { initTwitterAnalytics } from './twitter.analytics';
import { initLinkedinAnalytics } from './linkedin.analytics';

let isInitialized = false;
let isGoogleDefined = false;

export const initAnalytics = (options) => {
  const defaultOptions = {
    route: window.location.href,
    google: null,
    adobe: null,
    facebook: null,
    twitter: null,
    consentCookie: 'consent',
    language: 'en-us',
    title: document.title
  };

  const opts = {...defaultOptions, ...options};

  const {
    route,
    google,
    adobe,
    facebook,
    linkedin,
    twitter,
    consentCookie,
    language,
    title
  } = opts;

  if (isInitialized) {
    throw new Error('Trying to initialize Analytics more than one.')
  }

  isInitialized = true;

  if (google) {
    isGoogleDefined = true;
    initGoogleAnalytics(google);
  }

  if (adobe) {
    initAdobeAnalytics(adobe, consentCookie, language, title);
  }

  if (facebook) {
    initFacebookAnalytics(facebook);
  }

  if (linkedin) {
    initLinkedinAnalytics(linkedin);
  }

  if (twitter) {
    initTwitterAnalytics(twitter);
  }

  onRouteChangeAnalytics(route);
};

export const onRouteChangeAnalytics = (route) => {
  if (isGoogleDefined) {
    onRouteChangeGoogleAnalytics(route);
  }
};

export default {
  initAnalytics,
  onRouteChangeAnalytics
}
