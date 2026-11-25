/* ============================================================
   firebase-config.js — ফ্রি ক্লাউড ডাটা স্টোরেজ কনফিগারেশন
   ============================================================
   ফর্মের ডাটা ক্লাউডে সেভ ও ফেচ করতে Firebase (Google-এর ফ্রি
   Spark প্ল্যান) ব্যবহার করা হয়। সেটআপ (৫ ধাপ, README-তে বিস্তারিত):

   1) https://console.firebase.google.com এ ফ্রি অ্যাকাউন্ট খুলুন
   2) "Add project" দিয়ে প্রজেক্ট তৈরি করুন (যেমন: shikkha-setu)
   3) Build > Realtime Database > Create Database (Start in test mode)
   4) Build > Authentication লাগবে না; সরাসরি:
      Project settings > Your apps > Web (</> আইকন) > অ্যাপ তৈরি করুন
   5) নিচের firebaseConfig এর মানগুলো কপি করে বসান

   কনফিগার না করলেও সাইট ১০০% কাজ করবে — ডাটা localStorage এ জমা
   হবে (ব্রাউজার নিজেই একটি ফ্রি ডাটা স্টোরেজ)।
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "000000000000",
  appId: "PASTE_YOUR_APP_ID_HERE"
};

/* কনফিগ বসানো হয়েছে কি না — অটো ডিটেক্ট */
window.isFirebaseConfigured = function () {
  var c = window.FIREBASE_CONFIG || {};
  if (!c.apiKey || !c.databaseURL) return false;
  if (c.apiKey.indexOf("PASTE") !== -1) return false;
  if (c.databaseURL.indexOf("YOUR_PROJECT") !== -1) return false;
  return true;
};
