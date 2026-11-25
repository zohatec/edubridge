/* ============================================================
   language.js — দ্বিভাষিক ইঞ্জিন (বাংলা / English)
   data-i18n, data-i18n-ph (placeholder), data-i18n-alt,
   data-i18n-aria অ্যাট্রিবিউট ব্যবহার করে পুরো সাইট ভাষা বদলায়।
   ============================================================ */

(function () {
  "use strict";

  var TRANSLATIONS = {

    /* ================= বাংলা (ডিফল্ট) ================= */
    bn: {
      "meta.title": "শিক্ষা সেতু | রাজশাহীর ডিজিটাল শিক্ষা প্ল্যাটফর্ম",
      "brand.name": "শিক্ষা সেতু",
      "brand.tag": "রাজশাহী, বাংলাদেশ",

      "nav.home": "হোম",
      "nav.problems": "সমস্যা ও সমাধান",
      "nav.institutions": "প্রতিষ্ঠান",
      "nav.notices": "নোটিশ বোর্ড",
      "nav.resources": "ফ্রি রিসোর্স",
      "nav.faq": "প্রশ্নোত্তর",
      "nav.contact": "যোগাযোগ",

      "btn.theme.aria": "ডার্ক / লাইট মোড বদলান",
      "btn.lang.aria": "ভাষা বদলান",
      "btn.top.aria": "উপরে যান",

      "hero.badge": "রাজশাহী, বাংলাদেশ",
      "hero.title.1": "শিক্ষার প্রতিটি জটিলতার সমাধান —",
      "hero.title.2": "এখন এক প্ল্যাটফর্মে",
      "hero.subtitle": "ভর্তি থেকে ফলাফল, নোটিশ থেকে বৃত্তি — রাজশাহীর স্কুল ও কলেজের সব তথ্য ও সেবা এখন আপনার হাতের মুঠোয়। সম্পূর্ণ ফ্রি, সবসময়।",
      "hero.cta.primary": "প্রতিষ্ঠান দেখুন",
      "hero.cta.secondary": "লাইভ নোটিশ বোর্ড",
      "hero.stat1": "অংশীদার প্রতিষ্ঠান",
      "hero.stat2": "ফ্রি সেবা",
      "hero.stat3": "তথ্য অ্যাক্সেস",
      "hero.card1.t": "ভর্তি বিজ্ঞপ্তি প্রকাশ",
      "hero.card1.s": "রাজশাহী কলেজ • ডিসেম্বর ২০২৬",
      "hero.card2.t": "নতুন নোটিশ এসেছে",
      "hero.card2.s": "বোর্ড • ফরম পূরণ চলছে",
      "hero.img.alt": "একসাথে পড়াশোনা করছে রাজশাহীর শিক্ষার্থীরা",

      "sec.problems.eyebrow": "সমস্যা বিশ্লেষণ",
      "sec.problems.title": "যে ৬টি সমস্যা আমরা প্রতিদিন সমাধান করি",
      "sec.problems.sub": "রাজশাহীর স্কুল-কলেজ পরিবারের বাস্তব সমস্যাগুলো ম্যাপ করেছি, তারপর একে একে প্রযুক্তি দিয়ে সমাধান তৈরি করেছি।",

      "sec.institutions.eyebrow": "রাজশাহীর শিক্ষা ঐতিহ্য",
      "sec.institutions.title": "অংশীদার স্কুল ও কলেজসমূহ",
      "sec.institutions.sub": "প্রতিটি কার্ডে যাচাইকৃত ঠিকানা, প্রতিষ্ঠাকাল ও সরাসরি Google Maps লিংক — নির্ভুল তথ্যের নিশ্চয়তা।",
      "card.map": "ম্যাপে দেখুন",
      "card.website": "ওয়েবসাইট",

      "sec.notices.eyebrow": "লাইভ ডাটা ফেচিং",
      "sec.notices.title": "ডিজিটাল নোটিশ বোর্ড",
      "sec.notices.sub": "সব প্রতিষ্ঠানের আপডেট এক জায়গায়। ডাটা JSON ফাইল থেকে ফেচ করা হয় — Firebase যুক্ত করলে রিয়েল-টাইমে আপডেট হবে।",
      "sec.notices.source": "ডাটা সোর্স: লোকাল JSON (অফলাইন ফলব্যাক)",
      "sec.notices.source.live": "ডাটা সোর্স: data/*.json — fetch API দিয়ে লাইভ ফেচ হচ্ছে",
      "notice.new": "নতুন",
      "notice.empty": "এই ক্যাটাগরিতে এখনো কোনো নোটিশ নেই।",

      "tab.all": "সব",
      "tab.admission": "ভর্তি",
      "tab.result": "ফলাফল",
      "tab.scholarship": "বৃত্তি",
      "tab.event": "ইভেন্ট",

      "sec.deadlines.eyebrow": "সময় গণনা",
      "sec.deadlines.title": "আসন্ন ভর্তি ও ডেডলাইন",
      "sec.deadlines.sub": "লাইভ কাউন্টডাউন টাইমার — কোনো সুযোগ আর হাতছানি হয়ে যাবে না।",
      "sec.deadlines.demo": "নোট: ডেডলাইনগুলো ডেমো ডাটা — নিয়মিত আপডেট করা যায় JSON ফাইল সম্পাদনা করে।",
      "dl.days": "দিন",
      "dl.hours": "ঘণ্টা",
      "dl.mins": "মিনিট",
      "dl.secs": "সেকেন্ড",
      "dl.cta": "ফর্মে সহায়তা নিন",
      "dl.ended": "সময় শেষ",

      "sec.resources.eyebrow": "ফ্রি স্টাডি হাব",
      "sec.resources.title": "অতিরিক্ত খরচ ছাড়াই পড়াশোনার সব উপকরণ",
      "sec.resources.sub": "বাছাই করা সরকারি ও নির্ভরযোগ্য থার্ড-পার্টি ওয়েবসাইটের সরাসরি লিংক — কোচিং খরচ ছাড়াই নিজেকে গড়ে তুলুন।",
      "res.link": "সাইটটি দেখুন",

      "sec.pricing.eyebrow": "সেবা মূল্য",
      "sec.pricing.title": "সব প্ল্যান, এক মূল্য — সম্পূর্ণ ফ্রি",
      "sec.pricing.sub": "শিক্ষা সেতু একটি অলাভজনক উদ্যোগ। শিক্ষার্থী, অভিভাবক বা প্রতিষ্ঠান — কেউই এক টাকাও দেবেন না।",
      "price.forever": "সবসময় ফ্রি",
      "price.ribbon": "সম্পূর্ণ ফ্রি",
      "plan.cta": "এখনই শুরু করুন",
      "pricing.note": "শিক্ষার কোনো সেবা কখনো বিক্রি হয় না — এটাই শিক্ষা সেতুর প্রতিশ্রুতি।",
      "plan.stud.t": "শিক্ষার্থী",
      "plan.stud.f1": "ভর্তি ক্যালেন্ডার ও কাউন্টডাউন",
      "plan.stud.f2": "ফ্রি পাঠ্যবই ও রিসোর্স লিংক",
      "plan.stud.f3": "নোটিশ বোর্ড অ্যাক্সেস",
      "plan.stud.f4": "ফর্ম পূরণে ধাপে ধাপে সহায়তা",
      "plan.parent.t": "অভিভাবক",
      "plan.parent.f1": "প্রতিষ্ঠানের যাচাইকৃত ঠিকানা ও ম্যাপ",
      "plan.parent.f2": "সরাসরি যোগাযোগ ফর্ম",
      "plan.parent.f3": "বৃত্তি ও ফি সংক্রান্ত গাইড",
      "plan.parent.f4": "ফলাফল ও ফরম রিমাইন্ডার",
      "plan.inst.t": "প্রতিষ্ঠান",
      "plan.inst.f1": "নোটিশ ও ভর্তি বিজ্ঞপ্তি প্রকাশ",
      "plan.inst.f2": "প্রোফাইল ও Google Maps লোকেশন",
      "plan.inst.f3": "অভিভাবকদের কাছে সরাসরি পৌঁছান",
      "plan.inst.f4": "ডাটা আপডেটে সহায়তা",

      "stat.1": "অংশীদার প্রতিষ্ঠান",
      "stat.2": "ফ্রি রিসোর্স লিংক",
      "stat.3": "ফ্রি সেবা",
      "stat.4": "তথ্য অ্যাক্সেস",

      "sec.testimonials.eyebrow": "ব্যবহারকারীর কথা",
      "sec.testimonials.title": "শিক্ষার্থী, অভিভাবক ও শিক্ষকদের অভিজ্ঞতা",
      "sec.testimonials.sub": "প্ল্যাটফর্মটি কেমন বদল আনছে — শুনুন রাজশাহীর মানুষের মুখেই।",

      "sec.faq.eyebrow": "সাধারণ প্রশ্ন",
      "sec.faq.title": "যা সবাই জানতে চায়",
      "sec.faq.sub": "আপনার প্রশ্নের উত্তর এখানে না পেলে নিচের ফর্মে লিখুন — আমরা উত্তর দেব।",

      "sec.contact.eyebrow": "যোগাযোগ ও সহায়তা",
      "sec.contact.title": "আপনার সমস্যা জানান — সমাধান পান",
      "sec.contact.sub": "ফর্মটি পূরণ করুন; তথ্য ফ্রি ক্লাউড স্টোরেজে (Firebase Realtime Database) সেভ হবে এবং আমাদের টিম যোগাযোগ করবে।",
      "c.addr.t": "অফিস ঠিকানা",
      "c.addr.v": "শিক্ষা সেতু, সাহেব বাজার জিরো পয়েন্ট, বোয়ালিয়া, রাজশাহী ৬১০০, বাংলাদেশ",
      "c.phone.t": "হটলাইন",
      "c.mail.t": "ইমেইল",
      "c.hours.t": "সেবা সময়",
      "c.hours.v": "রবি – বৃহস্পতি, সকাল ৯টি – বিকাল ৫টি",

      "db.check": "স্টোরেজ সংযোগ পরীক্ষা চলছে…",
      "db.local": "স্টোরেজ: লোকাল (localStorage) — ফ্রি ও নিরাপদ; Firebase যুক্ত করলে ক্লাউডে যাবে",
      "db.firebase": "স্টোরেজ: Firebase Realtime Database সংযুক্ত — ক্লাউডে সেভ হচ্ছে",

      "form.name.l": "পূর্ণ নাম *",
      "form.name.ph": "আপনার নাম লিখুন",
      "form.phone.l": "মোবাইল নম্বর *",
      "form.phone.ph": "01XXXXXXXXX",
      "form.email.l": "ইমেইল (ঐচ্ছিক)",
      "form.email.ph": "you@example.com",
      "form.inst.l": "প্রতিষ্ঠান *",
      "form.cls.l": "শ্রেণি / স্তর *",
      "form.topic.l": "সমস্যা / বিষয় *",
      "form.msg.l": "বার্তা",
      "form.msg.ph": "আপনার সমস্যা বিস্তারিত লিখুন…",
      "form.select.ph": "— নির্বাচন করুন —",
      "form.submit": "তথ্য জমা দিন",
      "form.sending": "জমা হচ্ছে…",

      "cls.6": "ষষ্ঠ শ্রেণি", "cls.7": "সপ্তম শ্রেণি", "cls.8": "অষ্টম শ্রেণি",
      "cls.9": "নবম শ্রেণি", "cls.10": "দশম শ্রেণি", "cls.11": "একাদশ শ্রেণি",
      "cls.12": "দ্বাদশ শ্রেণি", "cls.ug": "ডিগ্রি / সম্মান", "cls.guardian": "অভিভাবক",

      "topic.1": "ভর্তি সহায়তা", "topic.2": "বৃত্তি তথ্য", "topic.3": "টিউটর / স্টাডি গ্রুপ",
      "topic.4": "ফলাফল সহায়তা", "topic.5": "প্রতিষ্ঠান তথ্য যোগ", "topic.6": "অন্যান্য",
      "opt.other": "অন্যান্য",

      "err.name": "কমপক্ষে ৩ অক্ষরের নাম লিখুন",
      "err.phone": "সঠিক মোবাইল নম্বর দিন (01XXXXXXXXX)",
      "err.email": "ইমেইল ঠিকানাটি সঠিক নয়",
      "err.required": "এই ঘরটি পূরণ করুন",

      "ok.title": "আবেদন সফলভাবে জমা হয়েছে!",
      "ok.body": "আপনার ট্র্যাকিং আইডি সংরক্ষণ করুন — আমাদের টিম ২৪-৪৮ ঘণ্টার মধ্যে যোগাযোগ করবে।",
      "ok.track": "ট্র্যাকিং আইডি",
      "ok.again": "আরেকটি আবেদন করুন",
      "count.label": "এখন পর্যন্ত জমা মোট: {n} টি আবেদন",

      "sec.map.eyebrow": "লোকেশন",
      "sec.map.title": "Google Maps-এ রাজশাহীর শিক্ষা মানচিত্র",
      "sec.map.sub": "প্রতিটি প্রতিষ্ঠানের সঠিক অবস্থান ম্যাপেই দেখুন — রাজশাহী কলেজ এলাকার ইন্টারঅ্যাকটিভ ম্যাপ নিচে।",
      "map.side.t": "কেন রাজশাহী শিক্ষার রাজধানী?",
      "map.f1.v": "১৮২৮", "map.f1.l": "দেশের প্রাচীনতম বিদ্যালয়ের প্রতিষ্ঠাকাল",
      "map.f2.v": "১৮৭৩", "map.f2.l": "রাজশাহী কলেজ — দেশের তৃতীয় প্রাচীনতম কলেজ",
      "map.f3.v": "৪+", "map.f3.l": "থানা এলাকায় ছড়িয়ে থাকা অংশীদার প্রতিষ্ঠান",
      "map.btn": "Google Maps-এ খুলুন",

      "f.about": "রাজশাহীর স্কুল ও কলেজের শিক্ষার্থী, অভিভাবক ও শিক্ষকদের জন্য তৈরি একটি অলাভজনক ডিজিটাল প্ল্যাটফর্ম — সমস্যা বিশ্লেষণ করে সমাধান দেওয়াই আমাদের লক্ষ্য।",
      "f.s1": "ফেসবুক", "f.s2": "ইউটিউব", "f.s3": "ইমেইল",
      "f.quick.t": "দ্রুত লিংক",
      "f.links.t": "গুরুত্বপূর্ণ অফিসিয়াল লিংক",
      "f.contact.t": "যোগাযোগ",
      "f.addr.short": "সাহেব বাজার জিরো পয়েন্ট, বোয়ালিয়া, রাজশাহী ৬১০০",
      "f.rights": "সর্বস্বত্ব সংরক্ষিত",
      "f.demo": "ডেমো প্রজেক্ট — নোটিশ ও ডেডলাইন নমুনা ডাটা; ঠিকানা ও প্রতিষ্ঠানের তথ্য পাবলিক সোর্স থেকে যাচাইকৃত।"
    },

    /* ================= English ================= */
    en: {
      "meta.title": "EduBridge Rajshahi | Digital Education Platform for Schools & Colleges",
      "brand.name": "EduBridge",
      "brand.tag": "Rajshahi, Bangladesh",

      "nav.home": "Home",
      "nav.problems": "Problems & Solutions",
      "nav.institutions": "Institutions",
      "nav.notices": "Notice Board",
      "nav.resources": "Free Resources",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",

      "btn.theme.aria": "Toggle dark / light mode",
      "btn.lang.aria": "Switch language",
      "btn.top.aria": "Scroll to top",

      "hero.badge": "Rajshahi, Bangladesh",
      "hero.title.1": "Every education problem, solved —",
      "hero.title.2": "on one smart platform",
      "hero.subtitle": "From admission to results, notices to scholarships — every School & College service of Rajshahi, now in your pocket. Completely free, always.",
      "hero.cta.primary": "Explore Institutions",
      "hero.cta.secondary": "Live Notice Board",
      "hero.stat1": "Partner institutions",
      "hero.stat2": "Free services",
      "hero.stat3": "Information access",
      "hero.card1.t": "Admission circular published",
      "hero.card1.s": "Rajshahi College • December 2026",
      "hero.card2.t": "New notice received",
      "hero.card2.s": "Board • Form fill-up ongoing",
      "hero.img.alt": "Students of Rajshahi studying together",

      "sec.problems.eyebrow": "Problem Analysis",
      "sec.problems.title": "Six problems we solve every single day",
      "sec.problems.sub": "We mapped the real problems of the Rajshahi school-college family, then built a technological solution for each one.",

      "sec.institutions.eyebrow": "Educational Heritage of Rajshahi",
      "sec.institutions.title": "Partner Schools & Colleges",
      "sec.institutions.sub": "Every card carries a verified address, founding year and a direct Google Maps link — accuracy guaranteed.",
      "card.map": "View on Map",
      "card.website": "Website",

      "sec.notices.eyebrow": "Live Data Fetching",
      "sec.notices.title": "Digital Notice Board",
      "sec.notices.sub": "Updates from all institutions in one place. Data is fetched from a JSON file — connect Firebase for real-time updates.",
      "sec.notices.source": "Data source: local JSON (offline fallback)",
      "sec.notices.source.live": "Data source: data/*.json — fetched live via the fetch API",
      "notice.new": "New",
      "notice.empty": "No notices in this category yet.",

      "tab.all": "All",
      "tab.admission": "Admission",
      "tab.result": "Results",
      "tab.scholarship": "Scholarship",
      "tab.event": "Events",

      "sec.deadlines.eyebrow": "Time Tracking",
      "sec.deadlines.title": "Upcoming Admissions & Deadlines",
      "sec.deadlines.sub": "Live countdown timers — no opportunity will slip away again.",
      "sec.deadlines.demo": "Note: deadlines are demo data — update them anytime by editing the JSON file.",
      "dl.days": "Days",
      "dl.hours": "Hours",
      "dl.mins": "Mins",
      "dl.secs": "Secs",
      "dl.cta": "Get form support",
      "dl.ended": "Time over",

      "sec.resources.eyebrow": "Free Study Hub",
      "sec.resources.title": "Every study material, without extra cost",
      "sec.resources.sub": "Hand-picked links to official and reliable third-party websites — grow yourself without coaching expenses.",
      "res.link": "Visit the site",

      "sec.pricing.eyebrow": "Service Pricing",
      "sec.pricing.title": "All plans, one price — completely free",
      "sec.pricing.sub": "EduBridge is a non-profit initiative. Students, guardians or institutions — nobody pays a single taka.",
      "price.forever": "Free forever",
      "price.ribbon": "100% Free",
      "plan.cta": "Get started now",
      "pricing.note": "No educational service is ever sold — that is the EduBridge promise.",
      "plan.stud.t": "Students",
      "plan.stud.f1": "Admission calendar & countdowns",
      "plan.stud.f2": "Free textbooks & resource links",
      "plan.stud.f3": "Notice board access",
      "plan.stud.f4": "Step-by-step form support",
      "plan.parent.t": "Guardians",
      "plan.parent.f1": "Verified addresses & maps",
      "plan.parent.f2": "Direct contact form",
      "plan.parent.f3": "Scholarship & fee guides",
      "plan.parent.f4": "Result & form reminders",
      "plan.inst.t": "Institutions",
      "plan.inst.f1": "Publish notices & admission circulars",
      "plan.inst.f2": "Profile with Google Maps location",
      "plan.inst.f3": "Reach guardians directly",
      "plan.inst.f4": "Help with data updates",

      "stat.1": "Partner institutions",
      "stat.2": "Free resource links",
      "stat.3": "Free services",
      "stat.4": "Information access",

      "sec.testimonials.eyebrow": "User Voices",
      "sec.testimonials.title": "Experiences of students, guardians & teachers",
      "sec.testimonials.sub": "Hear from the people of Rajshahi themselves about the change this platform brings.",

      "sec.faq.eyebrow": "Common Questions",
      "sec.faq.title": "What everyone asks",
      "sec.faq.sub": "If your question is not answered here, write to us using the form below — we will reply.",

      "sec.contact.eyebrow": "Contact & Support",
      "sec.contact.title": "Tell us your problem — get the solution",
      "sec.contact.sub": "Fill in the form; your data will be saved to free cloud storage (Firebase Realtime Database) and our team will contact you.",
      "c.addr.t": "Office Address",
      "c.addr.v": "EduBridge, Shaheb Bazar Zero Point, Boalia, Rajshahi 6100, Bangladesh",
      "c.phone.t": "Hotline",
      "c.mail.t": "Email",
      "c.hours.t": "Service Hours",
      "c.hours.v": "Sunday – Thursday, 9 AM – 5 PM",

      "db.check": "Checking storage connection…",
      "db.local": "Storage: local (localStorage) — free & safe; add Firebase for cloud sync",
      "db.firebase": "Storage: Firebase Realtime Database connected — saving to cloud",

      "form.name.l": "Full name *",
      "form.name.ph": "Enter your name",
      "form.phone.l": "Mobile number *",
      "form.phone.ph": "01XXXXXXXXX",
      "form.email.l": "Email (optional)",
      "form.email.ph": "you@example.com",
      "form.inst.l": "Institution *",
      "form.cls.l": "Class / Level *",
      "form.topic.l": "Problem / Topic *",
      "form.msg.l": "Message",
      "form.msg.ph": "Describe your problem in detail…",
      "form.select.ph": "— Select —",
      "form.submit": "Submit information",
      "form.sending": "Submitting…",

      "cls.6": "Class 6", "cls.7": "Class 7", "cls.8": "Class 8",
      "cls.9": "Class 9", "cls.10": "Class 10", "cls.11": "Class 11",
      "cls.12": "Class 12", "cls.ug": "Undergraduate (Honours)", "cls.guardian": "Guardian",

      "topic.1": "Admission support", "topic.2": "Scholarship info", "topic.3": "Tutor / Study group",
      "topic.4": "Result support", "topic.5": "Add institution info", "topic.6": "Other",
      "opt.other": "Other",

      "err.name": "Please enter a name with at least 3 characters",
      "err.phone": "Enter a valid mobile number (01XXXXXXXXX)",
      "err.email": "The email address is not valid",
      "err.required": "This field is required",

      "ok.title": "Application submitted successfully!",
      "ok.body": "Save your tracking ID — our team will contact you within 24-48 hours.",
      "ok.track": "Tracking ID",
      "ok.again": "Submit another application",
      "count.label": "Total submissions so far: {n}",

      "sec.map.eyebrow": "Location",
      "sec.map.title": "Rajshahi's education map on Google Maps",
      "sec.map.sub": "See the exact location of every institution on the map — an interactive map of the Rajshahi College area below.",
      "map.side.t": "Why is Rajshahi the capital of education?",
      "map.f1.v": "1828", "map.f1.l": "Founding year of the country's oldest school",
      "map.f2.v": "1873", "map.f2.l": "Rajshahi College — the third oldest college in the country",
      "map.f3.v": "4+", "map.f3.l": "Partner institutions spread across thana areas",
      "map.btn": "Open in Google Maps",

      "f.about": "A non-profit digital platform built for the students, guardians and teachers of Rajshahi's schools and colleges — our mission is to analyse problems and deliver solutions.",
      "f.s1": "Facebook", "f.s2": "YouTube", "f.s3": "Email",
      "f.quick.t": "Quick Links",
      "f.links.t": "Important Official Links",
      "f.contact.t": "Contact",
      "f.addr.short": "Shaheb Bazar Zero Point, Boalia, Rajshahi 6100",
      "f.rights": "All rights reserved",
      "f.demo": "Demo project — notices & deadlines are sample data; addresses and institution info verified from public sources."
    }
  };

  var current = "bn";
  var BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  var MONTHS = {
    bn: ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };

  function t(key) {
    var dict = TRANSLATIONS[current] || {};
    return dict[key] || (TRANSLATIONS.bn[key] || key);
  }

  function fmtNum(value) {
    var s = String(value);
    if (current !== "bn") return s;
    return s.replace(/\d/g, function (d) { return BN_DIGITS[Number(d)]; });
  }

  function applyStatic() {
    document.documentElement.lang = current;
    document.documentElement.dir = "ltr";
    document.title = t("meta.title");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var txt = t(key);
      if (txt) nodes[i].textContent = txt;
    }
    var phs = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < phs.length; j++) {
      phs[j].setAttribute("placeholder", t(phs[j].getAttribute("data-i18n-ph")));
    }
    var alts = document.querySelectorAll("[data-i18n-alt]");
    for (var k = 0; k < alts.length; k++) {
      alts[k].setAttribute("alt", t(alts[k].getAttribute("data-i18n-alt")));
    }
    var arias = document.querySelectorAll("[data-i18n-aria]");
    for (var m = 0; m < arias.length; m++) {
      arias[m].setAttribute("aria-label", t(arias[m].getAttribute("data-i18n-aria")));
    }

    var label = document.getElementById("langLabel");
    if (label) label.textContent = current === "bn" ? "EN" : "BN";
  }

  function setLang(lang) {
    current = (lang === "en") ? "en" : "bn";
    try { localStorage.setItem("ss_lang", current); } catch (e) { /* private mode */ }
    applyStatic();
    document.dispatchEvent(new CustomEvent("ss:langchange", { detail: { lang: current } }));
  }

  function toggleLang() {
    setLang(current === "bn" ? "en" : "bn");
  }

  function getLang() { return current; }
  function getMonths() { return MONTHS[current]; }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem("ss_lang"); } catch (e) {}
    current = (saved === "en") ? "en" : "bn";
    applyStatic();
    var btn = document.getElementById("langToggle");
    if (btn) btn.addEventListener("click", toggleLang);
  }

  window.I18N = {
    t: t,
    fmtNum: fmtNum,
    setLang: setLang,
    getLang: getLang,
    getMonths: getMonths,
    toggleLang: toggleLang,
    init: init
  };
})();
