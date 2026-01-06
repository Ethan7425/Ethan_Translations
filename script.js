(() => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Copy email button
  const btn = document.getElementById("btnCopyEmail");
  const status = document.getElementById("copyStatus");
  const email = "ethan.translation@gmail.com";

  if (btn) {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        if (status) status.textContent = "Copied!";
      } catch {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        if (status) status.textContent = "Copied!";
      }
      setTimeout(() => { if (status) status.textContent = ""; }, 1500);
    });
  }

  // Simple language switcher (en, ja, ko)
  const translations = {
    en: {
      "topbar-contact": "Contact",
      "hero-title": "Translation & Localization<br><span class=\"muted\">for restaurants and tourists</span>",
      "hero-lead": "Helping restaurants and tourist-facing businesses communicate clearly with international guests. Clean, natural translations — and practical help making them usable in real life.",
      "hero-email": "Email me",
      "hero-services": "See services",
      "nav-services": "Services",
      "nav-how": "How it works",
      "nav-contact": "Contact",
      "trust-fix-title": "What I fix",
      "trust-fix-text": "Incomplete English menus, confusing auto-translation, missing descriptions.",
      "trust-where-title": "Where",
      "trust-where-text": "Japan • Korea • Anywhere with international guests.",
      "trust-delivery-title": "Delivery",
      "trust-delivery-text": "File-only or “I help you publish it” depending on your system.",
      "what-title": "What I do",
      "what-body1": "I help restaurants improve their menus for foreign customers by providing clear, natural translations and practical support to make them usable in real situations.",
      "what-body2": "Many restaurants already offer an “English menu”, but it is often incomplete, confusing, or automatically translated. I help fix that.",
      "languages-title": "Languages",
      "languages-list": "English · Japanese · Korean · French",
      "languages-note": "(More can be added later if needed.)",
      "services-title": "Services",
      "service-menu-title": "Menu translation",
      "service-menu-text": "Full translation of dish names and descriptions (natural, customer-friendly).",
      "service-english-title": "English menu creation",
      "service-english-text": "For restaurants that currently have no English menu.",
      "service-improve-title": "Menu improvement",
      "service-improve-text": "Fixing unclear or broken English menus (especially auto-translation).",
      "service-digital-title": "Digital menu support",
      "service-digital-text": "Assistance with tablet, QR, or digital menu systems when possible.",
      "service-digital-note": "Depends on the platform and level of access.",
      "how-title": "How it works",
      "step1-title": "You send your menu",
      "step1-text": "PDF, photo, spreadsheet, or text — whatever you have.",
      "step2-title": "I translate & clean it up",
      "step2-text": "Natural wording, consistent names, clear descriptions.",
      "step3-title": "I deliver",
      "step3-text": "As a file you can upload — and if possible, I can help publish it in your menu system.",
      "contact-title": "Contact",
      "contact-email-label": "Email",
      "contact-button": "Open email",
      "footer-name": "Ethan — Translation & Localization",
      "footer-back": "Back to top"
    },
    ja: {
      "topbar-contact": "お問い合わせ",
      "hero-title": "翻訳・ローカライズ<br><span class=\"muted\">飲食店と旅行者のために</span>",
      "hero-lead": "飲食店や観光客向けビジネスが、海外のお客様に分かりやすく伝えられるようにサポートします。自然な翻訳と、現場で使いやすくするための実務サポートを提供します。",
      "hero-email": "メールする",
      "hero-services": "サービスを見る",
      "nav-services": "サービス",
      "nav-how": "進め方",
      "nav-contact": "お問い合わせ",
      "trust-fix-title": "対応する課題",
      "trust-fix-text": "英語メニューの抜け漏れ、分かりづらい自動翻訳、説明不足を解消します。",
      "trust-where-title": "対応エリア",
      "trust-where-text": "日本・韓国・国際的なお客様がいる地域ならどこでも。",
      "trust-delivery-title": "納品",
      "trust-delivery-text": "ファイル納品のみ、またはシステムに合わせて掲載までサポートします。",
      "what-title": "提供すること",
      "what-body1": "海外のお客様向けに分かりやすいメニューを作るため、自然な翻訳と、現場で使える形への落とし込みを行います。",
      "what-body2": "多くの店に「英語メニュー」はありますが、未完成だったり自動翻訳で分かりづらいことが多い。それを整えます。",
      "languages-title": "対応言語",
      "languages-list": "英語 · 日本語 · 韓国語 · フランス語",
      "languages-note": "(必要に応じて追加もできます)",
      "services-title": "サービス",
      "service-menu-title": "メニュー翻訳",
      "service-menu-text": "料理名と説明を丁寧に翻訳します（自然で読みやすく）。",
      "service-english-title": "英語メニュー作成",
      "service-english-text": "英語メニューがない店舗向けに、新しく作成します。",
      "service-improve-title": "英語メニュー改善",
      "service-improve-text": "分かりづらい英語メニュー（特に自動翻訳）を手直しします。",
      "service-digital-title": "デジタルメニュー対応",
      "service-digital-text": "タブレット、QR、デジタルメニューに可能な範囲で対応します。",
      "service-digital-note": "使用プラットフォームとアクセス権によります。",
      "how-title": "進め方",
      "step1-title": "メニューを送る",
      "step1-text": "PDF、写真、表、テキストなど現状のものを送ってください。",
      "step2-title": "翻訳して整える",
      "step2-text": "自然な表現、名前の統一、分かりやすい説明にします。",
      "step3-title": "納品する",
      "step3-text": "そのままアップできる形で納品。可能ならメニューシステムへの掲載も手伝います。",
      "contact-title": "お問い合わせ",
      "contact-email-label": "メール",
      "contact-button": "メールを開く",
      "footer-name": "Ethan — 翻訳・ローカライズ",
      "footer-back": "先頭へ戻る"
    },
    ko: {
      "topbar-contact": "문의하기",
      "hero-title": "번역 & 현지화<br><span class=\"muted\">음식점과 여행자를 위해</span>",
      "hero-lead": "레스토랑과 관광 업장이 해외 고객에게 명확히 안내할 수 있도록 돕습니다. 자연스러운 번역과 실제 현장에서 바로 쓸 수 있게 만드는 실무 지원을 제공합니다.",
      "hero-email": "이메일 보내기",
      "hero-services": "서비스 보기",
      "nav-services": "서비스",
      "nav-how": "진행 방식",
      "nav-contact": "문의",
      "trust-fix-title": "무엇을 해결하나요",
      "trust-fix-text": "누락된 영어 메뉴, 혼란스러운 자동번역, 부족한 설명을 바로잡습니다.",
      "trust-where-title": "지역",
      "trust-where-text": "일본, 한국, 그리고 해외 손님이 있는 모든 곳에서.",
      "trust-delivery-title": "전달",
      "trust-delivery-text": "파일만 전달하거나, 사용 중인 시스템에 맞춰 게시까지 도와드립니다.",
      "what-title": "제가 하는 일",
      "what-body1": "해외 고객이 메뉴를 쉽게 이해하도록 자연스러운 번역과 실무 적용을 지원합니다.",
      "what-body2": "많은 가게가 영어 메뉴를 갖고 있지만 미완성이나 자동번역으로 어색한 경우가 많습니다. 이를 바로잡습니다.",
      "languages-title": "지원 언어",
      "languages-list": "영어 · 일본어 · 한국어 · 프랑스어",
      "languages-note": "(필요하면 추가 가능합니다.)",
      "services-title": "서비스",
      "service-menu-title": "메뉴 번역",
      "service-menu-text": "요리 이름과 설명을 자연스럽고 읽기 쉽게 번역합니다.",
      "service-english-title": "영어 메뉴 제작",
      "service-english-text": "현재 영어 메뉴가 없는 매장을 위해 새로 만듭니다.",
      "service-improve-title": "영어 메뉴 개선",
      "service-improve-text": "어색한 영어 메뉴(특히 자동번역)를 다듬습니다.",
      "service-digital-title": "디지털 메뉴 지원",
      "service-digital-text": "태블릿, QR, 디지털 메뉴 시스템을 가능한 범위에서 지원합니다.",
      "service-digital-note": "사용 플랫폼과 접근 권한에 따라 달라집니다.",
      "how-title": "진행 방식",
      "step1-title": "메뉴를 보내주세요",
      "step1-text": "PDF, 사진, 스프레드시트, 텍스트 등 어떤 형태든 괜찮습니다.",
      "step2-title": "번역하고 정리합니다",
      "step2-text": "자연스러운 표현으로 다듬고, 이름을 통일하며, 설명을 명확히 합니다.",
      "step3-title": "전달 및 게시 지원",
      "step3-text": "바로 업로드할 수 있는 파일로 전달하고, 가능하면 메뉴 시스템 게시도 돕습니다.",
      "contact-title": "문의하기",
      "contact-email-label": "이메일",
      "contact-button": "이메일 열기",
      "footer-name": "Ethan — 번역 & 현지화",
      "footer-back": "맨 위로"
    }
  };

  const elements = document.querySelectorAll("[data-i18n], [data-i18n-html]");
  const langButtons = document.querySelectorAll(".lang-switch__btn");
  const fallbackLang = "en";

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations[fallbackLang];
    elements.forEach((el) => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      const value = dict[key] || translations[fallbackLang][key] || "";
      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });
    document.documentElement.lang = lang;
    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  };

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage(fallbackLang);
})();
