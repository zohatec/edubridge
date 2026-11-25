/* ============================================================
   form-handler.js — যোগাযোগ/সহায়তা ফর্ম
   ভ্যালিডেশন (নাম, বাংলাদেশি মোবাইল নম্বর, ইমেইল) →
   DB.save() (Firebase অথবা localStorage) → ট্র্যাকিং আইডি।
   ============================================================ */

(function () {
  "use strict";

  var form, successBox, trackIdEl, submitBtn, countLine, dbBadge, dbBadgeText;
  var currentTrack = null;

  function field(name) {
    return form.querySelector('[name="' + name + '"]');
  }

  function errBox(name) {
    return form.querySelector('[data-err="' + name + '"]');
  }

  function setErr(name, msgKey) {
    var box = errBox(name);
    var f = field(name);
    if (box) box.textContent = msgKey ? I18N.t(msgKey) : "";
    if (f) {
      var wrap = f.closest(".field");
      if (wrap) wrap.classList.toggle("invalid", !!msgKey);
    }
  }

  function clearErrors() {
    ["name", "phone", "email", "institution", "klass", "topic"].forEach(function (n) {
      setErr(n, null);
    });
  }

  function validate() {
    var ok = true;
    clearErrors();

    var name = field("name").value.trim();
    if (name.length < 3) { setErr("name", "err.name"); ok = false; }

    var phone = field("phone").value.replace(/[\s\-]/g, "").replace(/^\+?88/, "");
    if (!/^01[3-9]\d{8}$/.test(phone)) { setErr("phone", "err.phone"); ok = false; }

    var email = field("email").value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setErr("email", "err.email"); ok = false; }

    ["institution", "klass", "topic"].forEach(function (n) {
      if (!field(n).value) { setErr(n, "err.required"); ok = false; }
    });

    return ok;
  }

  function makeTrackId() {
    var stamp = Date.now().toString(36).toUpperCase();
    var rand = Math.floor(Math.random() * 1296).toString(36).toUpperCase();
    return "SS-" + stamp.slice(-6) + "-" + ("00" + rand).slice(-3);
  }

  function updateCount() {
    DB.count().then(function (n) {
      if (!countLine) return;
      countLine.textContent = I18N.t("count.label").replace("{n}", I18N.fmtNum(n));
    });
  }

  function updateDbBadge() {
    if (!dbBadge || !dbBadgeText) return;
    var m = DB.getMode();
    dbBadgeText.textContent = I18N.t(m === "firebase" ? "db.firebase" : "db.local");
    dbBadge.classList.toggle("firebase", m === "firebase");
  }

  function fillInstitutionSelect() {
    var sel = field("institution");
    if (!sel) return;
    var data = (window.DATA_LOADER && window.DATA_LOADER.get()) || {};
    var list = data.institutions || [];
    /* প্রথম option (— নির্বাচন করুন —) রেখে বাকিগুলো রিসেট */
    var first = sel.querySelector("option");
    sel.innerHTML = "";
    if (first) sel.appendChild(first);
    list.forEach(function (inst) {
      var o = document.createElement("option");
      o.value = inst.id;
      o.textContent = (I18N.getLang() === "en" ? inst.name.en : inst.name.bn);
      sel.appendChild(o);
    });
    var other = document.createElement("option");
    other.value = "other";
    other.textContent = I18N.t("opt.other");
    sel.appendChild(other);
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    submitBtn.classList.add("loading");
    submitBtn.querySelector(".btn-label").textContent = I18N.t("form.sending");

    var phone = field("phone").value.replace(/[\s\-]/g, "").replace(/^\+?88/, "");
    var track = makeTrackId();
    var submission = {
      id: track,
      name: field("name").value.trim(),
      phone: phone,
      email: field("email").value.trim() || "",
      institution: field("institution").value,
      klass: field("klass").value,
      topic: field("topic").value,
      message: field("message").value.trim() || "",
      lang: I18N.getLang(),
      ts: new Date().toISOString()
    };

    DB.save(submission)
      .then(function () {
        currentTrack = track;
        trackIdEl.textContent = I18N.getLang() === "bn" ? I18N.fmtNum(track) : track;
        form.hidden = true;
        successBox.hidden = false;
        updateCount();
      })
      .catch(function () {
        window.SSApp && window.SSApp.toast(I18N.t("db.local"));
      })
      .finally(function () {
        submitBtn.classList.remove("loading");
        submitBtn.querySelector(".btn-label").textContent = I18N.t("form.submit");
      });
  }

  function resetForm() {
    form.reset();
    clearErrors();
    successBox.hidden = true;
    form.hidden = false;
  }

  function init() {
    form = document.getElementById("supportForm");
    if (!form) return;
    successBox = document.getElementById("formSuccess");
    trackIdEl = document.getElementById("trackId");
    submitBtn = document.getElementById("submitBtn");
    countLine = document.getElementById("countLine");
    dbBadge = document.getElementById("dbBadge");
    dbBadgeText = document.getElementById("dbBadgeText");

    DB.init();
    updateDbBadge();
    fillInstitutionSelect();
    updateCount();

    form.addEventListener("submit", onSubmit);

    var again = document.getElementById("againBtn");
    if (again) again.addEventListener("click", resetForm);

    /* ভাষা বদলালে: ইনস্টিটিউট লিস্ট, ডিবি ব্যাজ, কাউন্ট লাইন আপডেট */
    document.addEventListener("ss:langchange", function () {
      fillInstitutionSelect();
      updateDbBadge();
      updateCount();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
