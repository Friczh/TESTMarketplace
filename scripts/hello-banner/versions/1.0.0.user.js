// ==BWScript==
// @name            Hello Banner
// @match           *://example.com/*
// @run-at          document-idle
// @grant           bw.dom
// @inject          isolated
// @source          github:Friczh/BrowserWorker-TestMarketplace/scripts/hello-banner/versions/1.0.0.user.js
// ==/BWScript==

(() => {
  const el = document.createElement('div');
  el.textContent = 'Hello from the BrowserWorker test marketplace (v1.0.0)';
  el.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:2147483647;padding:6px;background:#8E1B1B;color:#fff;font:14px sans-serif;text-align:center';
  document.body.appendChild(el);
})();
