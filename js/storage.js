/* ============================================================
   storage.js — ইউনিফায়েড ফ্রি ডাটা স্টোরেজ লেয়ার
   Firebase Realtime Database কনফিগার থাকলে ক্লাউডে, নাহলে
   ব্রাউজারের localStorage এ সেভ ও ফেচ হয়। একই API দুই মোডেই।
   ============================================================ */

(function () {
  "use strict";

  var LS_KEY = "ss_submissions";
  var mode = "local"; // "local" | "firebase"
  var fbDb = null;

  function lsRead() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function lsWrite(arr) {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(arr));
      return true;
    } catch (e) {
      return false;
    }
  }

  var DB = {
    /* মোড নির্ধারণ + Firebase init */
    init: function () {
      if (window.isFirebaseConfigured && window.isFirebaseConfigured() &&
          typeof firebase !== "undefined" && firebase.database) {
        try {
          if (!firebase.apps.length) {
            firebase.initializeApp(window.FIREBASE_CONFIG);
          }
          fbDb = firebase.database();
          mode = "firebase";
        } catch (e) {
          mode = "local";
        }
      } else {
        mode = "local";
      }
      return mode;
    },

    getMode: function () { return mode; },

    /* নতুন আবেদন সেভ */
    save: function (submission) {
      if (mode === "firebase" && fbDb) {
        return fbDb.ref("submissions").push(submission).then(function () {
          return true;
        });
      }
      var arr = lsRead();
      arr.push(submission);
      return Promise.resolve(lsWrite(arr));
    },

    /* সর্বশেষ n টি আবেদন ফেচ */
    list: function (limit) {
      limit = limit || 100;
      if (mode === "firebase" && fbDb) {
        return fbDb.ref("submissions").limitToLast(limit).once("value")
          .then(function (snap) {
            var out = [];
            snap.forEach(function (child) {
              out.push(child.val());
            });
            return out;
          })
          .catch(function () { return lsRead().slice(-limit); });
      }
      return Promise.resolve(lsRead().slice(-limit));
    },

    /* মোট সংখ্যা */
    count: function () {
      if (mode === "firebase" && fbDb) {
        return fbDb.ref("submissions").once("value")
          .then(function (snap) { return snap.numChildren(); })
          .catch(function () { return lsRead().length; });
      }
      return Promise.resolve(lsRead().length);
    }
  };

  window.DB = DB;
})();
