/* ============================================================
   app.js — মূল ইন্টারঅ্যাকশন ও রেন্ডারিং
   প্রিলোডার, স্টিকি নেভ, স্ক্রলস্পাই, মোবাইল মেনু, থিম টগল,
   সেকশন রেন্ডার (প্রতিষ্ঠান/নোটিশ/ডেডলাইন/রিসোর্স/রিভিউ/FAQ),
   কাউন্টডাউন, কাউন্টার, মার্কি, রিভিল অ্যানিমেশন, স্ক্রল-টু-টপ।
   ============================================================ */

(function () {
  "use strict";

  var heroEl = document.querySelector(".hero");
  var NAV = document.getElementById("navbar");
  var NAV_MENU = document.getElementById("navMenu");
  var HAMBURGER = document.getElementById("hamburger");

  /* ---------- টুলস ---------- */
  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  function pick(obj) {
    return I18N.getLang() === "en" ? obj.en : obj.bn;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var ICONS = {
    calendar: '<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M8 2v4m8-4v4M3 10h18"/>',
    bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    board: '<rect x="3" y="3" width="18" height="14" rx="2"/><path d="M12 17v4m-4 0h8M7 8h6M7 11h9"/>',
    result: '<path d="M20 6 9 17l-5-5"/>',
    video: '<rect x="2" y="5" width="14" height="14" rx="3"/><path d="m16 10 6-3v10l-6-3v-4z"/>',
    chart: '<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-6"/>',
    gov: '<path d="M3 21h18M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6M9 11h.01M15 11h.01M12 11h.01"/>',
    pin: '<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    estd: '<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 2"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    external: '<path d="M7 17 17 7M9 7h8v8"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    mapPin: '<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>'
  };

  function svg(name, size, sw) {
    return '<svg viewBox="0 0 24 24" width="' + (size || 20) + '" height="' + (size || 20) + '" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------- প্রিলোডার ---------- */
  function initPreloader() {
    var pre = document.getElementById("preloader");
    if (!pre) return;
    var done = false;
    function hide() {
      if (done) return;
      done = true;
      pre.classList.add("hide");
      setTimeout(function () { pre.remove(); }, 700);
    }
    window.addEventListener("load", function () { setTimeout(hide, 500); });
    setTimeout(hide, 2600); /* ফলব্যাক */
  }

  /* ---------- স্টিকি নেভ + স্ক্রল স্টেট ---------- */
  function initNav() {
    /* লোডের সময় নেভবার উপর থেকে নেমে আসে; শেষ হলে ক্লাস সরিয়ে transform পরিষ্কার */
    NAV.classList.add("nav-enter");
    NAV.addEventListener("animationend", function () {
      NAV.classList.remove("nav-enter");
    }, { once: true });
    function onScroll() {
      if (window.scrollY > 24) NAV.classList.add("scrolled");
      else NAV.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- মোবাইল মেনু ---------- */
  function initMobileMenu() {
    if (!HAMBURGER) return;
    var overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);

    function close() {
      NAV_MENU.classList.remove("open");
      HAMBURGER.classList.remove("open");
      overlay.classList.remove("show");
      HAMBURGER.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function open() {
      NAV_MENU.classList.add("open");
      HAMBURGER.classList.add("open");
      overlay.classList.add("show");
      HAMBURGER.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    HAMBURGER.addEventListener("click", function () {
      if (NAV_MENU.classList.contains("open")) close(); else open();
    });
    overlay.addEventListener("click", close);
    NAV_MENU.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1024) close();
    });
  }

  /* ---------- স্ক্রলস্পাই ---------- */
  function initScrollSpy() {
    var links = document.querySelectorAll(".nav-link");
    var map = {};
    links.forEach(function (l) {
      var id = l.getAttribute("href");
      if (id && id.charAt(0) === "#") map[id.slice(1)] = l;
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (l) { l.classList.remove("active"); });
          map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var sec = document.getElementById(id);
      if (sec) io.observe(sec);
    });
  }

  /* ---------- থিম টগল ---------- */
  function initTheme() {
    var btn = document.getElementById("themeToggle");
    var saved = null;
    try { saved = localStorage.getItem("ss_theme"); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    if (btn) {
      btn.addEventListener("click", function () {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        try { localStorage.setItem("ss_theme", theme); } catch (e) {}
      });
    }
  }

  /* ---------- রিভিল অ্যানিমেশন (অলটারনেটিং ডান→বাম, শুধু স্ক্রিনে এলে) ----------
     • স্ক্রল করার সময় প্রথম এলিমেন্ট ডান দিক থেকে ঢোকে, পরেরটা বাম দিক থেকে —
       এভাবে পুরো পেজ জুড়ে ক্রম চলতে থাকে।
     • এনিমেশন কেবল তখনই কাজ করে যখন সেকশন/কার্ড স্ক্রিনে আসে —
       স্ক্রিন থেকে সম্পূর্ণ বেরিয়ে গেলে রিসেট হয়, আবার এলে আবার অ্যানিমেট হয়।
     • ডাইনামিক গ্রিডের (stagger) কার্ডও ভেতরে ভেতরে ডান/বাম অলটারনেট করে। */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    var counter = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) en.target.classList.add("visible");
        else en.target.classList.remove("visible"); /* স্ক্রিনের বাইরে গেলে রিসেট */
      });
    }, { threshold: 0 });

    items.forEach(function (item) {
      if (!item.closest(".hero")) {
        /* হিরোর বাইরের এলিমেন্ট — অলটারনেটিং দিক + ভিউপোর্ট-ওয়াচ */
        item.classList.add(counter % 2 === 0 ? "from-right" : "from-left");
        counter++;
        io.observe(item);
      } else {
        /* হিরো সেকশনের নিজস্ব লোড-অ্যানিমেশন আছে — শুধু দৃশ্যমান রাখা হয় */
        item.classList.add("visible");
      }
    });
  }

  /* ডাইনামিক গ্রিড (stagger) কন্টেইনারগুলো রেন্ডার হওয়ার পরে ওয়াচ শুরু হয় —
     এক ফ্রেম অপেক্ষা করা হয় যাতে কার্ডগুলোর লুকানো অবস্থা আঁকা হয়ে যায়,
     তারপর ভিউপোর্টে এলে অ্যানিমেশন নিশ্চিতভাবে চলে (শুধু তখনই)। */
  var staggerIO = null;
  function watchStaggers() {
    var grids = document.querySelectorAll(".stagger:not([data-watch])");
    if (!grids.length) return;
    grids.forEach(function (g) { g.setAttribute("data-watch", "1"); });
    if (!staggerIO) {
      staggerIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) en.target.classList.add("visible");
          else en.target.classList.remove("visible"); /* স্ক্রিনের বাইরে গেলে রিসেট */
        });
      }, { threshold: 0 });
    }
    requestAnimationFrame(function () {
      grids.forEach(function (g) { staggerIO.observe(g); });
    });
  }

  /* গ্রিডের ভেতরের প্রতিটি কার্ডে ডান/বাম দিক ক্লাস বসায় (রি-রেন্ডারেও চলে) */
  function applyStaggerDirs() {
    document.querySelectorAll(".stagger").forEach(function (grid) {
      for (var k = 0; k < grid.children.length; k++) {
        var c = grid.children[k];
        c.classList.toggle("from-right", k % 2 === 0);
        c.classList.toggle("from-left", k % 2 === 1);
      }
    });
  }

  /* ---------- মার্কি ---------- */
  function renderMarquee() {
    var wrap = document.getElementById("marquee");
    if (!wrap) return;
    var data = (window.DATA_LOADER && window.DATA_LOADER.get()) || {};
    var list = (data.institutions || []).map(function (i) { return pick(i.name); });
    if (!list.length) return;
    var half = list.map(function (n) { return "<span>" + esc(n) + "</span>"; }).join("");
    wrap.innerHTML = half + half; /* সিমলেস লুপের জন্য দুইবার */
  }

  /* ---------- সমস্যা ও সমাধান ---------- */
  function renderProblems() {
    var grid = document.getElementById("problemGrid");
    if (!grid) return;
    grid.innerHTML = (window.SITE_DATA.problems || []).map(function (p, i) {
      return (
        '<article class="problem-card">' +
        '<span class="pc-num" aria-hidden="true">' + I18N.fmtNum(i + 1) + "</span>" +
        '<span class="pc-icon">' + svg(p.icon, 24) + "</span>" +
        "<h3>" + esc(pick(p.t)) + "</h3>" +
        "<p>" + esc(pick(p.d)) + "</p>" +
        '<div class="pc-solution">' + svg("check", 16) + "<span>" + esc(pick(p.s)) + "</span></div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- প্রতিষ্ঠান ---------- */
  function renderInstitutionsReal() {
    var grid = document.getElementById("instGrid");
    if (!grid) return;
    var data = (window.DATA_LOADER && window.DATA_LOADER.get()) || {};
    grid.innerHTML = (data.institutions || []).map(function (inst) {
      var webBtn = inst.website
        ? '<a class="btn-web" href="' + esc(inst.website) + '" target="_blank" rel="noopener noreferrer">' + svg("globe", 15) + esc(I18N.t("card.website")) + "</a>"
        : "";
      var estdLabel = I18N.getLang() === "en" ? "ESTD" : "প্রতিষ্ঠা";
      var eiinLabel = "EIIN";
      return (
        '<article class="inst-card">' +
        '<div class="inst-media">' +
        '<img src="' + esc(inst.img) + '" alt="' + esc(pick(inst.name)) + '" loading="lazy" />' +
        '<span class="inst-type">' + esc(pick(inst.type)) + "</span>" +
        "</div>" +
        '<div class="inst-body">' +
        "<h3>" + esc(pick(inst.name)) + "</h3>" +
        '<ul class="inst-meta">' +
        "<li>" + svg("estd", 14) + '<span class="estd">' + esc(estdLabel) + ": " + I18N.fmtNum(inst.estd) + (inst.eiin ? " &middot; " + eiinLabel + ": " + I18N.fmtNum(inst.eiin) : "") + "</span></li>" +
        "<li>" + svg("mapPin", 14) + "<span>" + esc(pick(inst.address)) + "</span></li>" +
        "</ul>" +
        '<div class="inst-actions">' +
        '<a class="btn-map" href="' + esc(inst.maps) + '" target="_blank" rel="noopener noreferrer">' + svg("pin", 15) + esc(I18N.t("card.map")) + "</a>" +
        webBtn +
        "</div></div></article>"
      );
    }).join("");
  }

  /* ---------- নোটিশ ---------- */
  var noticeCat = "all";

  function renderNotices() {
    var list = document.getElementById("noticeList");
    if (!list) return;
    var data = (window.DATA_LOADER && window.DATA_LOADER.get()) || {};
    var months = I18N.getMonths();
    var rows = (data.notices || []).filter(function (n) {
      return noticeCat === "all" || n.cat === noticeCat;
    });

    if (!rows.length) {
      list.innerHTML = '<p class="notice-empty">' + esc(I18N.t("notice.empty")) + "</p>";
      return;
    }

    list.innerHTML = rows.map(function (n) {
      var d = new Date(n.date + "T00:00:00");
      var day = I18N.fmtNum(d.getDate());
      var month = months[d.getMonth()];
      var isNew = (Date.now() - d.getTime()) < 1000 * 60 * 60 * 24 * 45;
      return (
        '<div class="notice-item">' +
        '<div class="n-date"><strong>' + day + "</strong><span>" + esc(month) + "</span></div>" +
        '<div class="n-body">' +
        '<div class="n-head">' +
        '<span class="n-tag ' + esc(n.cat) + '">' + esc(I18N.t("tab." + n.cat)) + "</span>" +
        '<span class="n-src">' + esc(pick(n.src)) + "</span>" +
        (isNew ? '<span class="n-new">' + esc(I18N.t("notice.new")) + "</span>" : "") +
        "</div>" +
        '<p class="n-title">' + esc(pick(n.title)) + "</p>" +
        "</div>" +
        '<span class="n-arrow">' + svg("arrow", 18) + "</span>" +
        "</div>"
      );
    }).join("");
  }

  function initNoticeTabs() {
    var tabs = document.querySelectorAll("#noticeTabs .tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (tb) { tb.classList.remove("active"); });
        tab.classList.add("active");
        noticeCat = tab.getAttribute("data-cat");
        renderNotices();
        applyStaggerDirs(); /* নতুন নোটিশগুলো ডান/বাম দিক পায় — কন্টেইনার visible থাকায় staggered এন্ট্রি অ্যানিমেশন নিজে থেকেই চলে */
      });
    });
  }

  function updateSourceLabel() {
    var src = document.getElementById("dataSource");
    if (!src) return;
    var data = (window.DATA_LOADER && window.DATA_LOADER.get()) || {};
    var live = data.noticesLive || data.institutionsLive;
    src.textContent = I18N.t(live ? "sec.notices.source.live" : "sec.notices.source");
  }

  /* ---------- ডেডলাইন কাউন্টডাউন ---------- */
  var countdownTimer = null;

  function renderDeadlines() {
    var grid = document.getElementById("deadlineGrid");
    if (!grid) return;
    grid.innerHTML = (window.SITE_DATA.deadlines || []).map(function (dl) {
      return (
        '<article class="dl-card" data-date="' + esc(dl.date) + '">' +
        '<span class="dl-tag">' + esc(pick(dl.tag)) + "</span>" +
        "<h3>" + esc(pick(dl.title)) + "</h3>" +
        '<p class="dl-inst">' + esc(pick(dl.inst)) + "</p>" +
        '<div class="count-row">' +
        '<div class="count-cell"><strong data-u="d">--</strong><span>' + esc(I18N.t("dl.days")) + "</span></div>" +
        '<div class="count-cell"><strong data-u="h">--</strong><span>' + esc(I18N.t("dl.hours")) + "</span></div>" +
        '<div class="count-cell"><strong data-u="m">--</strong><span>' + esc(I18N.t("dl.mins")) + "</span></div>" +
        '<div class="count-cell"><strong data-u="s">--</strong><span>' + esc(I18N.t("dl.secs")) + "</span></div>" +
        "</div>" +
        '<div style="margin-top:16px"><a class="btn btn-ghost" href="#contact" style="padding:9px 18px;font-size:0.88rem">' + esc(I18N.t("dl.cta")) + "</a></div>" +
        "</article>"
      );
    }).join("");
    tickCountdown();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(tickCountdown, 1000);
  }

  function tickCountdown() {
    document.querySelectorAll(".dl-card[data-date]").forEach(function (card) {
      var target = new Date(card.getAttribute("data-date") + "T23:59:59");
      var diff = target.getTime() - Date.now();
      var cells = {
        d: card.querySelector('[data-u="d"]'),
        h: card.querySelector('[data-u="h"]'),
        m: card.querySelector('[data-u="m"]'),
        s: card.querySelector('[data-u="s"]')
      };
      if (diff <= 0) {
        Object.keys(cells).forEach(function (k) { cells[k].textContent = "0"; });
        return;
      }
      var s = Math.floor(diff / 1000);
      var d = Math.floor(s / 86400);
      var h = Math.floor((s % 86400) / 3600);
      var m = Math.floor((s % 3600) / 60);
      var sec = s % 60;
      cells.d.textContent = I18N.fmtNum(d);
      cells.h.textContent = I18N.fmtNum(h);
      cells.m.textContent = I18N.fmtNum(m);
      cells.s.textContent = I18N.fmtNum(sec);
    });
  }

  /* ---------- রিসোর্স ---------- */
  function renderResources() {
    var grid = document.getElementById("resourceGrid");
    if (!grid) return;
    grid.innerHTML = (window.SITE_DATA.resources || []).map(function (r) {
      return (
        '<article class="resource-card">' +
        '<span class="rc-icon">' + svg(r.icon, 24) + "</span>" +
        "<h3>" + esc(pick(r.t)) + "</h3>" +
        "<p>" + esc(pick(r.d)) + "</p>" +
        '<a class="rc-link" href="' + esc(r.url) + '" target="_blank" rel="noopener noreferrer">' + esc(I18N.t("res.link")) + svg("external", 15) + "</a>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- টেস্টিমোনিয়াল ---------- */
  function renderTestimonials() {
    var grid = document.getElementById("testimonialGrid");
    if (!grid) return;
    grid.innerHTML = (window.SITE_DATA.testimonials || []).map(function (tm) {
      var initial = (I18N.getLang() === "en" ? tm.name.en : tm.name.bn).trim().charAt(0);
      return (
        '<article class="tst-card">' +
        '<span class="tst-quote-icon"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M10 8H6a4 4 0 0 0-4 4v6h6v-6H5.5A2.5 2.5 0 0 1 8 9.5V8h2zm10 0h-4a4 4 0 0 0-4 4v6h6v-6h-2.5a2.5 2.5 0 0 1 2.5-2.5V8h2z"/></svg></span>' +
        "<blockquote>" + esc(pick(tm.quote)) + "</blockquote>" +
        '<div class="tst-person">' +
        '<span class="avatar" aria-hidden="true">' + esc(initial) + "</span>" +
        "<div><strong>" + esc(pick(tm.name)) + "</strong><small>" + esc(pick(tm.role)) + "</small></div>" +
        "</div></article>"
      );
    }).join("");
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    var list = document.getElementById("faqList");
    if (!list) return;
    list.innerHTML = (window.SITE_DATA.faqs || []).map(function (f, i) {
      return (
        '<div class="faq-item">' +
        '<button type="button" class="faq-q" aria-expanded="false" data-faq="' + i + '">' +
        "<span>" + esc(pick(f.q)) + "</span>" +
        '<span class="chev"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>' +
        "</button>" +
        '<div class="faq-a"><p>' + esc(pick(f.a)) + "</p></div>" +
        "</div>"
      );
    }).join("");

    list.querySelectorAll(".faq-q").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".faq-item");
        var answer = item.querySelector(".faq-a");
        var isOpen = item.classList.contains("open");

        list.querySelectorAll(".faq-item.open").forEach(function (o) {
          o.classList.remove("open");
          o.querySelector(".faq-a").style.maxHeight = null;
          o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        });
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  /* ---------- সংখ্যা কাউন্টার ---------- */
  function initCounters() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var node = en.target;
        io.unobserve(node);
        var target = parseInt(node.getAttribute("data-count"), 10) || 0;
        var suffix = node.getAttribute("data-suffix") || "";
        var t0 = null;
        var DUR = 1600;
        function step(ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / DUR, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          node.textContent = I18N.fmtNum(Math.round(target * eased)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- ফ্লোটিং স্ক্রল-টু-টপ ---------- */
  function initScrollTop() {
    var btn = document.getElementById("scrollTop");
    var bar = btn.querySelector(".st-ring-bar");
    var threshold = function () {
      return heroEl ? heroEl.offsetHeight * 0.7 : 600;
    };
    var CIRC = 132;
    function onScroll() {
      var show = window.scrollY > threshold();
      btn.classList.toggle("show", show);
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      bar.style.strokeDashoffset = String(CIRC * (1 - p));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- টোস্ট ---------- */
  var toastTimer = null;
  function toast(msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  /* ---------- রেন্ডার-অল + ভাষা পরিবর্তনে রি-রেন্ডার ---------- */
  function renderAll() {
    renderMarquee();
    renderProblems();
    renderInstitutionsReal();
    renderNotices();
    renderDeadlines();
    renderResources();
    renderTestimonials();
    renderFaq();
    updateSourceLabel();
    applyStaggerDirs();
    watchStaggers();
  }

  function initRender() {
    var p = window.DATA_LOADER ? window.DATA_LOADER.load() : Promise.resolve();
    p.then(function () {
      renderAll();
      document.addEventListener("ss:langchange", renderAll);
    });
  }

  /* ---------- ফুটার বছর ---------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = I18N.fmtNum(new Date().getFullYear());
  }

  /* ---------- বুট ---------- */
  function boot() {
    window.SSApp = { toast: toast };

    I18N.init();
    initPreloader();
    initNav();
    initMobileMenu();
    initScrollSpy();
    initTheme();
    initNoticeTabs();
    initScrollTop();
    initCounters();
    initYear();
    initRender();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
