/* ============================================================
   data-loader.js — ডাটা ফেচিং
   data/notices.json ও data/institutions.json ফাইল fetch() API
   দিয়ে লোড করে; সার্ভার না থাকলে (file:// বা অফলাইন)
   js/data.js এর ফলব্যাক ডাটা ব্যবহার হয় — সাইট তখনও চলে।
   ============================================================ */

(function () {
  "use strict";

  function fetchJSON(url) {
    return fetch(url, { cache: "no-store" }).then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    });
  }

  window.DATA_LOADER = (function () {
    var state = {
      notices: (window.SITE_DATA && window.SITE_DATA.notices) || [],
      institutions: (window.SITE_DATA && window.SITE_DATA.institutions) || [],
      noticesLive: false,
      institutionsLive: false
    };

    function load() {
      if (!window.fetch) {
        return Promise.resolve(state);
      }
      var noticesP = fetchJSON("data/notices.json")
        .then(function (json) {
          if (json && Array.isArray(json.notices) && json.notices.length) {
            state.notices = json.notices;
            state.noticesLive = true;
          }
        })
        .catch(function () { /* ফলব্যাক ডাটা থাকছে */ });

      var instP = fetchJSON("data/institutions.json")
        .then(function (json) {
          if (json && Array.isArray(json.institutions) && json.institutions.length) {
            state.institutions = json.institutions;
            state.institutionsLive = true;
          }
        })
        .catch(function () { /* ফলব্যাক ডাটা থাকছে */ });

      return Promise.all([noticesP, instP]).then(function () { return state; });
    }

    return {
      load: load,
      get: function () { return state; }
    };
  })();
})();
