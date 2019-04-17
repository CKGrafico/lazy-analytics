export const initAdobeAnalytics = (id, consentCookieName, market, pageName) => {
  const script = document.createElement('script');
  script.setAttribute('src', 'https://az725175.vo.msecnd.net/scripts/jsll-4.js');
  document.head.appendChild(script);

  setTimeout(() => {
    const { awa } = window;

    const config = {
      syncMuid: awa.utils.isValueAssigned(awa.cookie.getCookie(consentCookieName)),
      userConsentCookieName: consentCookieName,
      autoCapture: {
        lineage: true,
        scroll: true
      },
      coreData: {
        appId: id,
        env: 'prod',
        market,
        pageName,
        pageType: 'html'
      },
      useShortNameForContentBlob: true
    };

    awa.init(config);
  }, 1000);
};

