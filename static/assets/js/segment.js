// eslint-disable-next-line
!(function() {
  const analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize) {
    if (analytics.invoked) {
      window.console && console.error && console.error('Segment snippet included twice.');
    } else {
      analytics.invoked = !0;
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on',
      ];
      analytics.factory = function (t) {
        return function () {
          const e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics;
        };
      };
      for (let t = 0; t < analytics.methods.length; t++) {
        const e = analytics.methods[t];
        analytics[e] = analytics.factory(e);
      }
      analytics.load = function (t, e) {
        const n = document.createElement('script');
        n.type = 'text/javascript';
        n.async = !0;
        n.src = `${
          document.location.protocol === 'https:' ? 'https://' : 'http://'
        }cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`;
        const o = document.getElementsByTagName('script')[0];
        o.parentNode.insertBefore(n, o);
        analytics._loadOptions = e;
      };
      analytics.SNIPPET_VERSION = '4.1.0';
      analytics.load('i8BjT9l4QtVBsPW1i714E9GFiYMfad5o');
      analytics.page();
    }
  }
})();
