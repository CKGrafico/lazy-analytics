export const initGoogleAnalytics = (id) => {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * (new Date() as any));
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  const { ga } = window as any;

  ga('create', id, 'auto');
  ga('set', 'anonymizeIp', true);
};

export const onRouteChangeGoogleAnalytics = (route) => {
  const { ga } = window as any;

  ga('set', 'page', route);
  ga('send', 'pageview');
};
