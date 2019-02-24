import { initAnalytics, onRouteChangeAnalytics } from '../../src/index';

const $log = document.querySelector('.js-log');
const log = (text) => {
  $log.innerText = text;
};

// Start analytics when you're ready
// In a real case, this will happen after app configuration
const time = 2000;
log(`Initializing analytics in ${time / 1000} seconds.`);
setTimeout(() => {
  log(`Analytics initialized.`);
  const options = {
    route: null,
    google: 'UA-XXXXX-Y'
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

    const options = {
      route,
      google: 'UA-XXXXX-Y'
    };
    onRouteChangeAnalytics(options);
  }

  requestAnimationFrame(onChangeRoute);
};
requestAnimationFrame(onChangeRoute);
