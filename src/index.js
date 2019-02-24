import { initGoogleAnalytics, onRouteChangeGoogleAnalytics } from './google.analytics';
// import { initAdobeAnalytics } from './adobe.analytics';
import { initFacebookAnalytics } from './facebook.analytics';
import { initTwitterAnalytics } from './twitter.analytics';
import { initLinkedinAnalytics } from './linkedin.analytics';

let isInitialized = false;
let isGoogleDefined = false;

export const initAnalytics = (options) => {
  const {
    route,
    google,
    facebook,
    linkedin,
    twitter
  } = options;

  if (isInitialized) {
    throw new Error('Trying to initialize Analytics more than one.')
  }

  isInitialized = true;

  if (google) {
    isGoogleDefined = true;
    initGoogleAnalytics(google);
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

  onRouteChangeAnalytics(options.route);
};

export const onRouteChangeAnalytics = (route) => {
  if (isGoogleDefined) {
    onRouteChangeGoogleAnalytics(route);
  }
};
