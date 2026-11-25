/* ============================================================
   data.js — সাইটের সব কনটেন্ট ডাটা (দ্বিভাষিক: বাংলা + English)
   প্রতিষ্ঠানের তথ্য পাবলিক সোর্স (Wikipedia / অফিসিয়াল ওয়েবসাইট)
   থেকে যাচাই করা। নোটিশ ও ডেডলাইন ডেমো ডাটা।
   ============================================================ */

window.SITE_DATA = {

  /* ---------- প্রতিষ্ঠান / Institutions (যাচাইকৃত তথ্য) ---------- */
  institutions: [
    {
      id: "rcs",
      name: { bn: "রাজশাহী কলেজিয়েট স্কুল", en: "Rajshahi Collegiate School" },
      type: { bn: "বালক উচ্চ বিদ্যালয়", en: "Boys' High School" },
      estd: "1828",
      eiin: "126456",
      address: { bn: "সাহেব বাজার, বোয়ালিয়া, রাজশাহী ৬১০০", en: "Shaheb Bazar, Boalia, Rajshahi 6100" },
      maps: "https://www.google.com/maps/search/?api=1&query=Rajshahi+Collegiate+School+Rajshahi",
      website: "",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "rc",
      name: { bn: "রাজশাহী কলেজ", en: "Rajshahi College" },
      type: { bn: "ডিগ্রি (সম্মান) কলেজ", en: "Degree (Honours) College" },
      estd: "1873",
      eiin: "",
      address: { bn: "সাহেব বাজার, বোয়ালিয়া, রাজশাহী ৬১০০", en: "Shaheb Bazar, Boalia, Rajshahi 6100" },
      maps: "https://www.google.com/maps/search/?api=1&query=Rajshahi+College+Rajshahi",
      website: "http://rc.gov.bd",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "pn",
      name: { bn: "সরকারি পি.এন. বালিকা উচ্চ বিদ্যালয়", en: "Govt. P.N. Girls' High School" },
      type: { bn: "বালিকা উচ্চ বিদ্যালয়", en: "Girls' High School" },
      estd: "1928",
      eiin: "126455",
      address: { bn: "সাহেব বাজার রোড, গোরামারা, বোয়ালিয়া, রাজশাহী ৬১০০", en: "Saheb Bazar Rd, Ghoramara, Boalia, Rajshahi 6100" },
      maps: "https://www.google.com/maps/search/?api=1&query=Govt+PN+Girls+High+School+Rajshahi",
      website: "https://pn.edu.bd",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "mgsc",
      name: { bn: "রাজশাহী সরকারি মডেল স্কুল অ্যান্ড কলেজ", en: "Rajshahi Govt. Model School & College" },
      type: { bn: "স্কুল অ্যান্ড কলেজ", en: "School & College" },
      estd: "2006",
      eiin: "127043",
      address: { bn: "কাজিহাটা, রাজশাহী ৬০০০", en: "Kazihata, Rajshahi 6000" },
      maps: "https://www.google.com/maps/search/?api=1&query=Rajshahi+Govt+Model+School+and+College+Kazihata",
      website: "https://www.rmscraj.edu.bd",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "mohsin",
      name: { bn: "হাজী মুহম্মদ মুহসীন সরকারি উচ্চ বিদ্যালয়", en: "Haji Muhammad Mohsin Govt. High School" },
      type: { bn: "উচ্চ বিদ্যালয়", en: "High School" },
      estd: "1874",
      eiin: "",
      address: { bn: "স্রীরামপুর, রাজশাহী ৬০০০", en: "Srirampur, Rajshahi 6000" },
      maps: "https://www.google.com/maps/search/?api=1&query=Haji+Muhammad+Mohsin+Government+High+School+Rajshahi",
      website: "https://rajmohsin.edu.bd",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "ngdc",
      name: { bn: "নিউ গভর্নমেন্ট ডিগ্রি কলেজ, রাজশাহী", en: "New Govt. Degree College, Rajshahi" },
      type: { bn: "ডিগ্রি কলেজ", en: "Degree College" },
      estd: "1966",
      eiin: "127038",
      address: { bn: "কাজিহাটা, রাজশাহী ৬০০০", en: "Kazihata, Rajshahi 6000" },
      maps: "https://www.google.com/maps/search/?api=1&query=New+Government+Degree+College+Rajshahi",
      website: "",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "rcc",
      name: { bn: "রাজশাহী ক্যাডেট কলেজ", en: "Rajshahi Cadet College" },
      type: { bn: "ক্যাডেট কলেজ", en: "Cadet College" },
      estd: "1966",
      eiin: "",
      address: { bn: "সরদাহ, চারঘাট, রাজশাহী ৬২৭১ (শহর থেকে ~২৫ কিমি)", en: "Sardah, Charghat, Rajshahi 6271 (~25 km from city)" },
      maps: "https://www.google.com/maps/search/?api=1&query=Rajshahi+Cadet+College+Sardah",
      website: "",
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=700&q=70"
    },
    {
      id: "rmc",
      name: { bn: "রাজশাহী মেডিকেল কলেজ", en: "Rajshahi Medical College" },
      type: { bn: "মেডিকেল কলেজ", en: "Medical College" },
      estd: "1958",
      eiin: "",
      address: { bn: "মেডিকেল কলেজ রোড, লক্ষ্মীপুর, রাজশাহী ৬০০০", en: "Medical College Road, Laxmipur, Rajshahi 6000" },
      maps: "https://www.google.com/maps/search/?api=1&query=Rajshahi+Medical+College+Laxmipur",
      website: "https://rmc.edu.bd",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=70"
    }
  ],

  /* ---------- সমস্যা ও সমাধান / Problems & Solutions ---------- */
  problems: [
    {
      icon: "calendar",
      t: { bn: "ভর্তি তথ্যের বিভ্রান্তি", en: "Admission Information Chaos" },
      d: { bn: "ভর্তির সঠিক তারিখ, ফি ও শর্ত কোথাও লেখা থাকে না এক জায়গায় — শুনে শুনে ভুল তথ্যে সুযোগ নষ্ট হয়।", en: "Correct admission dates, fees and requirements are scattered everywhere — wrong information from hearsay wastes opportunities." },
      s: { bn: "সমাধান: একীভূত ভর্তি ক্যালেন্ডার, লাইভ কাউন্টডাউন ও ধাপে ধাপে গাইড।", en: "Solution: Unified admission calendar, live countdown and step-by-step guides." }
    },
    {
      icon: "bell",
      t: { bn: "নোটিশ পৌঁছায় দেরিতে", en: "Notices Arrive Too Late" },
      d: { bn: "বোর্ড ঘুরে ঘুরে নোটিশ দেখার ঝামেলা — জরুরি বিজ্ঞপ্তি চোখ এড়িয়ে যায়, শেষ তারিখ পার হয়ে যায়।", en: "Visiting boards to check notices is a hassle — urgent circulars get missed and deadlines pass unnoticed." },
      s: { bn: "সমাধান: লাইভ ডিজিটাল নোটিশ বোর্ড — সব প্রতিষ্ঠানের আপডেট এক পাতায়, ক্যাটাগরি ফিল্টারসহ।", en: "Solution: Live digital notice board — every institution's updates on one page with category filters." }
    },
    {
      icon: "award",
      t: { bn: "বৃত্তির তথ্য ছড়ানো-ছিটানো", en: "Scattered Scholarship Info" },
      d: { bn: "কোন বৃত্তি কার জন্য, কীভাবে আবেদন করতে হয়, শেষ তারিখ কবে — অভিভাবকদের কাছে পরিষ্কার উত্তর থাকে না।", en: "Which scholarship is for whom, how to apply, when is the deadline — parents rarely get clear answers." },
      s: { bn: "সমাধান: বৃত্তি হাব — যোগ্যতা, আবেদন প্রক্রিয়া ও ডেডলাইন একসাথে, বাংলা-ইংরেজি দুই ভাষায়।", en: "Solution: Scholarship hub — eligibility, application process and deadlines together, in both Bangla & English." }
    },
    {
      icon: "book",
      t: { bn: "কোচিং-গাইডের বাড়তি খরচ", en: "Extra Cost of Coaching & Guides" },
      d: { bn: "পড়াশোনার উপকরণ কিনতে ও কোচিং করাতে প্রতি মাসে বড় অঙ্কের খরচ — সীমিত আয়ের পরিবার পিছিয়ে পড়ে।", en: "Big monthly spending on study materials and coaching holds back families with limited income." },
      s: { bn: "সমাধান: ফ্রি রিসোর্স হাব — NCTB পাঠ্যবই, ভিডিও ক্লাস ও ফলাফল পোর্টালের সরাসরি লিংক, সব ফ্রি।", en: "Solution: Free resource hub — direct links to NCTB textbooks, video classes and result portals, all free." }
    },
    {
      icon: "phone",
      t: { bn: "অভিভাবক–প্রতিষ্ঠান যোগাযোগ জটিল", en: "Difficult Parent-School Contact" },
      d: { bn: "প্রতিষ্ঠানের সঠিক ঠিকানা, ফোন নম্বর বা অবস্থান খুঁজে পাওয়া কঠিন — অভিভাবকদের অতিরিক্ত ভ্রমণ ও সময় নষ্ট।", en: "Finding an institution's exact address, phone or location is hard — parents waste trips and time." },
      s: { bn: "সমাধান: যাচাইকৃত ঠিকানা, প্রতিষ্ঠান প্রোফাইল, Google Maps লিংক ও সরাসরি যোগাযোগ ফর্ম।", en: "Solution: Verified addresses, institution profiles, Google Maps links and a direct contact form." }
    },
    {
      icon: "users",
      t: { bn: "টিউটর ও মেন্টর খুঁজে না পাওয়া", en: "Hard to Find Tutors & Mentors" },
      d: { bn: "দুর্বল বিষয়ে সাহায্য করার মতো যোগ্য টিউটর বা স্টাডি গ্রুপ খুঁজে পাওয়া যায় না নির্ভরযোগ্য সোর্সে।", en: "There is no reliable source to find qualified tutors or study groups for weak subjects." },
      s: { bn: "সমাধান: শিক্ষক ডিরেক্টরি ও স্টাডি গ্রুপ সংযোগ — ফর্মে অনুরোধ দিলেই ম্যাচিং সহায়তা।", en: "Solution: Teacher directory and study group connections — submit a request and get matching help." }
    }
  ],

  /* ---------- ডেডলাইন কাউন্টডাউন / Deadlines (ডেমো) ---------- */
  deadlines: [
    {
      id: "dl1",
      tag: { bn: "ভর্তি", en: "Admission" },
      title: { bn: "একাদশ শ্রেণিতে ভর্তি — আবেদনের শেষ তারিখ", en: "Class XI Admission — Application Deadline" },
      inst: { bn: "রাজশাহী কলেজ", en: "Rajshahi College" },
      date: "2027-01-10"
    },
    {
      id: "dl2",
      tag: { bn: "ভর্তি পরীক্ষা", en: "Admission Test" },
      title: { bn: "৯ম শ্রেণিতে ভর্তি পরীক্ষার নিবন্ধন শেষ", en: "Class IX Admission Test Registration Ends" },
      inst: { bn: "সরকারি পি.এন. বালিকা উচ্চ বিদ্যালয়", en: "Govt. P.N. Girls' High School" },
      date: "2026-12-20"
    },
    {
      id: "dl3",
      tag: { bn: "বৃত্তি", en: "Scholarship" },
      title: { bn: "মেধা বৃত্তি পরীক্ষার অনলাইন নিবন্ধন শেষ", en: "Merit Scholarship Exam Online Registration Ends" },
      inst: { bn: "শিক্ষা সেতু ডেস্ক", en: "EduBridge Desk" },
      date: "2027-01-25"
    }
  ],

  /* ---------- ফ্রি রিসোর্স / Free Resources (অফিসিয়াল থার্ড-পার্টি লিংক) ---------- */
  resources: [
    {
      icon: "book",
      t: { bn: "NCTB ই-পাঠ্যবই", en: "NCTB E-Textbooks" },
      d: { bn: "প্রথম থেকে দ্বাদশ শ্রেণির সব জাতীয় পাঠ্যবই ফ্রি ডাউনলোড — জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ডের অফিসিয়াল সাইট।", en: "Download every national textbook (Class 1-12) free — official site of the National Curriculum & Textbook Board." },
      url: "https://nctb.gov.bd"
    },
    {
      icon: "board",
      t: { bn: "রাজশাহী শিক্ষা বোর্ড", en: "BISE Rajshahi" },
      d: { bn: "মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড রাজশাহী — ফরম পূরণ, পরীক্ষা ফি, ছাড়পত্র ও অফিসিয়াল সার্কুলার।", en: "Board of Intermediate & Secondary Education, Rajshahi — forms, exam fees, testimonials and official circulars." },
      url: "https://rajshahiboard.gov.bd"
    },
    {
      icon: "result",
      t: { bn: "ফলাফল পোর্টাল", en: "Result Portal" },
      d: { bn: "এসএসসি, এইচএসসি ও সমমানের পরীক্ষার ফলাফল দেখুন অফিসিয়াল ই-বোর্ড রেজাল্ট পোর্টালে — কয়েক সেকেন্ডে।", en: "Check SSC, HSC and equivalent exam results on the official e-board result portal — within seconds." },
      url: "https://eboardresults.com"
    },
    {
      icon: "video",
      t: { bn: "১০ মিনিট স্কুল", en: "10 Minute School" },
      d: { bn: "ফ্রি ভিডিও ক্লাস, লাইভ ক্লাস, প্রশ্নব্যাংক ও কুইজ — বাংলাদেশের সবচেয়ে জনপ্রিয় অনলাইন শিক্ষা প্ল্যাটফর্ম।", en: "Free video classes, live classes, question banks and quizzes — Bangladesh's most popular online learning platform." },
      url: "https://10minuteschool.com"
    },
    {
      icon: "chart",
      t: { bn: "BANBEIS", en: "BANBEIS" },
      d: { bn: "বাংলাদেশ শিক্ষা তথ্য ও পরিসংখ্যান ব্যুরো — মাল্টিমিডিয়া ক্লাসরুম কনটেন্ট ও শিক্ষা বিষয়ক গবেষণা ডাটা।", en: "Bangladesh Bureau of Educational Information & Statistics — multimedia classroom content and education research data." },
      url: "https://banbeis.gov.bd"
    },
    {
      icon: "gov",
      t: { bn: "শিক্ষা মন্ত্রণালয়", en: "Ministry of Education" },
      d: { bn: "জাতীয় শিক্ষা নীতি, বৃত্তি ঘোষণা ও সরকারি সিদ্ধান্ত — মূল সোর্স থেকেই জানুন, গুজবে নয়।", en: "National education policy, scholarship announcements and government decisions — know it from the primary source." },
      url: "https://moedu.gov.bd"
    }
  ],

  /* ---------- নোটিশ ফলব্যাক / Notices (data/notices.json fetch ব্যর্থ হলে ব্যবহৃত হয়) ---------- */
  notices: [
    { id: "n1", date: "2026-12-01", cat: "admission", title: { bn: "একাদশ শ্রেণিতে ভর্তি কার্যক্রম ১ ডিসেম্বর থেকে শুরু", en: "Class XI admission process begins from 1 December" }, src: { bn: "রাজশাহী কলেজ", en: "Rajshahi College" } },
    { id: "n2", date: "2026-11-20", cat: "result", title: { bn: "এসএসসি ২০২৭-এর ফরম পূরণ শুরু — প্রতিষ্ঠানের মাধ্যমে অনলাইনে", en: "SSC 2027 form fill-up begins — online via institutions" }, src: { bn: "রাজশাহী শিক্ষা বোর্ড", en: "BISE Rajshahi" } },
    { id: "n3", date: "2026-11-25", cat: "scholarship", title: { bn: "প্রাথমিক স্তরের মেধা বৃত্তি পরীক্ষার নিবন্ধন চলছে", en: "Registration open for primary level merit scholarship exam" }, src: { bn: "শিক্ষা সেতু ডেস্ক", en: "EduBridge Desk" } },
    { id: "n4", date: "2026-12-10", cat: "event", title: { bn: "জেলা বিজ্ঞান অলিম্পিয়াড — রাজশাহী পর্বে নিবন্ধন শুরু", en: "District Science Olympiad — Rajshahi round registration open" }, src: { bn: "শিক্ষা সেতু ডেস্ক", en: "EduBridge Desk" } },
    { id: "n5", date: "2026-12-05", cat: "admission", title: { bn: "৯ম শ্রেণিতে ভর্তি পরীক্ষার বিস্তারিত বিজ্ঞপ্তি প্রকাশ", en: "Detailed circular published for Class IX admission test" }, src: { bn: "পি.এন. বালিকা উচ্চ বিদ্যালয়", en: "Govt. P.N. Girls' High School" } },
    { id: "n6", date: "2026-11-30", cat: "result", title: { bn: "এইচএসসি ২০২৬ বোর্ড চ্যালেঞ্জ আবেদনের শেষ সময় ঘনিয়ে আসছে", en: "Deadline approaching for HSC 2026 board challenge applications" }, src: { bn: "রাজশাহী শিক্ষা বোর্ড", en: "BISE Rajshahi" } },
    { id: "n7", date: "2026-12-18", cat: "event", title: { bn: "বার্ষিক ক্রীড়া ও সাংস্কৃতিক প্রতিযোগিতা — সবার অংশগ্রহণ আহ্বান", en: "Annual sports & cultural competition — all are invited" }, src: { bn: "হাজী মুহম্মদ মুহসীন সরকারি উচ্চ বিদ্যালয়", en: "Haji Muhammad Mohsin Govt. High School" } },
    { id: "n8", date: "2027-01-05", cat: "scholarship", title: { bn: "মেধাবী ও দরিদ্র শিক্ষার্থীদের জন্য বিশেষ বৃত্তি আবেদন শুরু", en: "Special scholarship application opens for talented poor students" }, src: { bn: "শিক্ষা সেতু ডেস্ক", en: "EduBridge Desk" } }
  ],

  /* ---------- টেস্টিমোনিয়াল (ডেমো চরিত্র) ---------- */
  testimonials: [
    {
      name: { bn: "তানভীর হাসান", en: "Tanvir Hasan" },
      role: { bn: "শিক্ষার্থী, রাজশাহী কলেজিয়েট স্কুল", en: "Student, Rajshahi Collegiate School" },
      quote: { bn: "ভর্তির তারিখ নিয়ে আগে কত হটবাথ হতো! এখন নোটিশ বোর্ডে সব দেখি — কাউন্টডাউন দেখে দেখে সময়মত ফরম পূরণ করেছি।", en: "Admission dates used to be so confusing! Now I check the notice board — the countdown helped me fill up forms right on time." }
    },
    {
      name: { bn: "ফারিয়া আক্তার", en: "Faria Akter" },
      role: { bn: "অভিভাবক, বোয়ালিয়া", en: "Guardian, Boalia" },
      quote: { bn: "মেয়ের স্কুলের ঠিকানা, ম্যাপ আর যোগাযোগ ফর্ম এক জায়গায়। অভিভাবক হিসেবে সময় আর অনিশ্চয়তা — দুটোই বেঁচে গেছে।", en: "My daughter's school address, map and contact form are all in one place. As a parent, it saved both time and uncertainty." }
    },
    {
      name: { bn: "মোঃ শফিকুল ইসলাম", en: "Md. Shafiqul Islam" },
      role: { bn: "সহকারী শিক্ষক, সরকারি মডেল স্কুল অ্যান্ড কলেজ", en: "Assistant Teacher, Govt. Model School & College" },
      quote: { bn: "আমাদের ভর্তি বিজ্ঞপ্তি এখন শিক্ষা সেতুতে দিলেই অভিভাবকরা পৌঁছে যান। বারবার ফোন কলের চাপ অনেক কমে গেছে।", en: "Publishing our admission circulars on EduBridge reaches parents directly. The flood of repeated phone calls has dropped a lot." }
    }
  ],

  /* ---------- FAQ ---------- */
  faqs: [
    {
      q: { bn: "শিক্ষা সেতুর সেবা কি সত্যিই সম্পূর্ণ ফ্রি?", en: "Are EduBridge services really free?" },
      a: { bn: "হ্যাঁ। শিক্ষার্থী, অভিভাবক বা প্রতিষ্ঠান — কারও জন্যই কোনো ফি নেই। নোটিশ, ভর্তি তথ্য, রিসোর্স লিংক ও যোগাযোগ ফর্ম সবই ফ্রি ব্যবহার করা যায়।", en: "Yes. Students, guardians and institutions — nobody pays any fee. Notices, admission info, resource links and the contact form are all free to use." }
    },
    {
      q: { bn: "ফর্ম পূরণ করলে আমার তথ্য কোথায় যায়?", en: "Where does my form data go?" },
      a: { bn: "আপনার তথ্য ফ্রি ক্লাউড স্টোরেজে (Google Firebase Realtime Database) সেভ হয় এবং একটি ট্র্যাকিং আইডি পান। Firebase কনফিগার না থাকলে ব্রাউজারের localStorage-এ নিরাপদে জমা থাকে। কনফিগারেশন গাইড README ফাইলে আছে।", en: "Your data is saved to free cloud storage (Google Firebase Realtime Database) and you receive a tracking ID. If Firebase is not configured yet, it is safely stored in your browser's localStorage. Setup guide is in the README file." }
    },
    {
      q: { bn: "নোটিশ বোর্ডের তথ্য কোথা থেকে আসে?", en: "Where do notice board updates come from?" },
      a: { bn: "প্রতিষ্ঠান ও বোর্ডের অফিসিয়াল সোর্স থেকে সংগ্রহ করে বাংলা-ইংরেজি দুই ভাষায় সাজিয়ে দেওয়া হয়। ডেটা JSON ফাইল থেকে ফেচ করা হয়; বর্তমানে সাইটে ডেমো ডাটা দেখানো হচ্ছে।", en: "Updates are collected from official sources of institutions and boards, organised in both Bangla and English. Data is fetched from a JSON file; the site currently shows demo data." }
    },
    {
      q: { bn: "ওয়েবসাইটটি কি মোবাইলে ভালো চলে?", en: "Does the website work well on mobile?" },
      a: { bn: "হ্যাঁ। ডেস্কটপ, ট্যাবলেট ও মোবাইল — তিন ডিভাইসেই পুরোপুরি রেসপন্সিভ, কোনো ক্ষেত্রেই horizontal scrollbar তৈরি হয় না।", en: "Yes. Desktop, tablet and mobile — fully responsive on all three, with no horizontal scrollbar in any case." }
    },
    {
      q: { bn: "আমার প্রতিষ্ঠানের তথ্য যোগ করতে চাই, কীভাবে?", en: "How can I add my institution's information?" },
      a: { bn: "যোগাযোগ ফর্মে 'প্রতিষ্ঠান তথ্য যোগ' বিষয়টি নির্বাচন করে ঠিকানা ও বিস্তারিত লিখুন — যাচাই শেষে ম্যাপসহ প্রোফাইল যুক্ত করা হবে, সম্পূর্ণ ফ্রি।", en: "Select 'Add institution info' as the topic in the contact form and write the address and details — after verification, a profile with map will be added, completely free." }
    },
    {
      q: { bn: "সাইটের ভাষা ইংরেজিতে বদলাবো কীভাবে?", en: "How do I switch the site language to English?" },
      a: { bn: "নেভিগেশন বারের ডান দিকে 'EN' বোতামে ক্লিক করুন — পুরো সাইট সাথে সাথে ইংরেজিতে বদলে যাবে। আপনার পছন্দ ব্রাউজারে মনে রাখা হবে।", en: "Click the 'EN' button on the right side of the navigation bar — the whole site switches to English instantly. Your preference is remembered in the browser." }
    }
  ],

  /* ---------- মার্কি রানিং টেক্সট ---------- */
  marqueeNote: { bn: "রাজশাহীর গর্ব", en: "Pride of Rajshahi" }
};
