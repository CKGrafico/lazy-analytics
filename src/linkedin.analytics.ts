export const initLinkedinAnalytics = (id) => {
  (window)._linkedin_data_partner_id = id;

  (function () {
    let s = document.getElementsByTagName('script')[0];
    let b = document.createElement('script');
    b.type = 'text/javascript'; b.async = true;
    b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    s.parentNode.insertBefore(b, s);
  })();
};
