(function () {
  'use strict';
  if (location.origin !== 'https://jackailab.github.io' || navigator.doNotTrack === '1') return;

  var referrer = '';
  try { referrer = document.referrer ? new URL(document.referrer).origin : ''; } catch (_) {}
  // No cookies, query strings, fragments, or persistent visitor identifiers.
  fetch('https://visitors.jackailab.com/collect', {
    method: 'POST',
    credentials: 'omit',
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    body: JSON.stringify({ path: location.pathname, referrer: referrer }),
    keepalive: true
  }).catch(function () { /* A logging outage must never interrupt the page. */ });
})();
