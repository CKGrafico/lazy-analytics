import { initAnalytics, onRouteChangeAnalytics } from '../../src/index';
import adblockDetect from 'adblock-detect';

const $log = document.querySelector('.js-log');
const log = (text) => {
  $log.innerText = text;
};

adblockDetect(adblockDetected => {
  if (!adblockDetected) {
    return;
  }

  throw new Error('Disable Ad block to have analytics working.')
});

// Start analytics when you're ready
// In a real case, this will happen after app configuration
const time = 2000;
log(`Initializing analytics in ${time / 1000} seconds.`);
setTimeout(() => {
  log(`Analytics initialized.`);
  const options = {
    route: null,
    google: 'UA-XXXXX-Y',
    facebook: 'facebook pixel code',
    linkedin: 'linkedin pixel code',
    twitter: 'twitter pixel code',
    adobe: 'ADOBE'
  };

  initAnalytics(options);
}, 2000);

// Trigger different analytics events when you want
// Usually is when the route changes
// In this example I'm mocking a "router" event onChangeRoute
let lastRoute = window.location.href;
const onChangeRoute = () => {
  const route = window.location.href;
  if (lastRoute !== route) {
    lastRoute = route;
    log(`The route changed to ${route}`);

    onRouteChangeAnalytics(route);
  }

  requestAnimationFrame(onChangeRoute);
};
requestAnimationFrame(onChangeRoute);
