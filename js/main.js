(() => {
  const translations = {
    de: {
      "nav.about": "Über uns",
      "nav.dogs": "Happy & Hope",
      "nav.breeding": "Aufzucht",
      "nav.gallery": "Galerie",
      "nav.contact": "Kontakt",
      "hero.tagline": "Kleine Pfoten, großes Glück",
      "hero.sub": "Havaneser Hobbyzucht · Heiligenhafen / Ostsee",
      "hero.cta": "Kontakt aufnehmen",
      "hero.cta2": "Unsere Welpen",
      "about.eyebrow": "Über uns",
      "about.title": "Mit Herz an der Ostsee",
      "about.p1":
        "Ich bin Melanie Busch – und hinter Kleine Küstenwunder steckt meine Leidenschaft für Havaneser. Gemeinsam mit Happy und Hope lebe ich in Heiligenhafen an der Ostsee.",
      "about.p2":
        "Unsere Welpen wachsen mitten in der Familie auf: mit Nähe, Geduld und viel Liebe – damit sie als selbstbewusste, menschenbezogene Begleiter in ihr neues Zuhause starten.",
      "about.point1": "Hobbyzucht mit persönlicher Betreuung",
      "about.point2": "Familiäre Aufzucht zu Hause",
      "about.point3": "Standort Heiligenhafen / Ostsee",
      "dogs.eyebrow": "Unsere Hunde",
      "dogs.title": "Happy & Hope",
      "dogs.lead":
        "Zwei Havaneser mit Charakter – verspielt, treu und das Herz unserer kleinen Zucht.",
      "dogs.happy":
        "Sonnig, neugierig und immer bereit für Abenteuer am Meer – Happy bringt Lebensfreude in jeden Tag.",
      "dogs.hope":
        "Sanft, aufmerksam und voller Charme – Hope ist der ruhige Anker und ein echter Seelentröster.",
      "breeding.eyebrow": "Unsere Philosophie",
      "breeding.title": "Liebevolle & familiäre Aufzucht",
      "breeding.p1":
        "Bei uns gibt es keine Zwingerhaltung. Welpen wachsen im Haushalt auf, lernen Alltaggeräusche, bekommen frühe Sozialisierung und viel Körperkontakt.",
      "breeding.p2":
        "Gesundheit, Charakter und ein behutsamer Start ins Leben stehen im Mittelpunkt – für Familien, die einen treuen Havaneser-Begleiter suchen.",
      "gallery.eyebrow": "Einblicke",
      "gallery.title": "Galerie",
      "gallery.lead": "Momente aus dem Alltag unserer Küstenwunder.",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Schreiben Sie uns",
      "contact.lead":
        "Interesse an einem Welpen oder Fragen zur Aufzucht? Melden Sie sich gerne – wir freuen uns auf Ihre Nachricht.",
      "contact.owner": "Züchterin",
      "contact.place": "Standort",
      "contact.whatsapp": "Nachricht per WhatsApp",
      "footer.follow": "Folgt uns",
      "form.name": "Name",
      "form.email": "E-Mail",
      "form.message": "Nachricht",
      "form.submit": "Nachricht senden",
      "form.note": "Öffnet Ihre E-Mail-App mit der Nachricht.",
      "form.success": "Vielen Dank – Ihre Nachricht ist bereit zum Senden.",
      "footer.tag": "Havaneser Hobbyzucht · Heiligenhafen",
    },
    en: {
      "nav.about": "About",
      "nav.dogs": "Happy & Hope",
      "nav.breeding": "Breeding",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "hero.tagline": "Small paws, big happiness",
      "hero.sub": "Havanese hobby breeding · Heiligenhafen / Baltic Sea",
      "hero.cta": "Get in touch",
      "hero.cta2": "Our puppies",
      "about.eyebrow": "About us",
      "about.title": "Raised with heart by the sea",
      "about.p1":
        "I'm Melanie Busch – and Kleine Küstenwunder is built on my love for Havanese dogs. Together with Happy and Hope, I live in Heiligenhafen on the Baltic Sea.",
      "about.p2":
        "Our puppies grow up in the heart of the family: with closeness, patience and plenty of love – so they start life in their new home as confident, people-oriented companions.",
      "about.point1": "Hobby breeding with personal care",
      "about.point2": "Family-raised at home",
      "about.point3": "Based in Heiligenhafen / Baltic Sea",
      "dogs.eyebrow": "Our dogs",
      "dogs.title": "Happy & Hope",
      "dogs.lead":
        "Two Havanese with real character – playful, loyal, and the heart of our small breeding.",
      "dogs.happy":
        "Sunny, curious and always ready for adventures by the sea – Happy brings joy to every day.",
      "dogs.hope":
        "Gentle, attentive and full of charm – Hope is the calm anchor and a true comforter.",
      "breeding.eyebrow": "Our philosophy",
      "breeding.title": "Loving & family-oriented rearing",
      "breeding.p1":
        "We don't use kennels. Puppies grow up at home, learn everyday sounds, receive early socialization and lots of physical closeness.",
      "breeding.p2":
        "Health, character and a gentle start in life come first – for families looking for a devoted Havanese companion.",
      "gallery.eyebrow": "Moments",
      "gallery.title": "Gallery",
      "gallery.lead": "Everyday glimpses of our coastal wonders.",
      "contact.eyebrow": "Contact",
      "contact.title": "Write to us",
      "contact.lead":
        "Interested in a puppy or have questions about our breeding? Get in touch – we'd love to hear from you.",
      "contact.owner": "Breeder",
      "contact.place": "Location",
      "contact.whatsapp": "Message on WhatsApp",
      "footer.follow": "Follow us",
      "form.name": "Name",
      "form.email": "Email",
      "form.message": "Message",
      "form.submit": "Send message",
      "form.note": "Opens your email app with the message.",
      "form.success": "Thank you – your message is ready to send.",
      "footer.tag": "Havanese hobby breeding · Heiligenhafen",
    },
  };

  const CONTACT_EMAIL = "info@kleine-kuestenwunder.de";

  const preloader = document.getElementById("preloader");
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navPanel = document.getElementById("navPanel");
  const langButtons = document.querySelectorAll(".lang-btn");
  const yearEl = document.getElementById("year");
  const form = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  let currentLang = localStorage.getItem("kk-lang") || "de";

  function hidePreloader() {
    if (!preloader) return;
    preloader.classList.add("is-done");
    document.body.style.overflow = "";
  }

  function initPreloader() {
    document.body.style.overflow = "hidden";
    const minTime = 1600;
    const start = Date.now();

    const finish = () => {
      const wait = Math.max(0, minTime - (Date.now() - start));
      setTimeout(hidePreloader, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    // Safety fallback
    setTimeout(hidePreloader, 4500);
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("kk-lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const text = translations[lang]?.[key];
      if (text) el.textContent = text;
    });

    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  function initLanguage() {
    applyLanguage(currentLang);
    langButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.lang);
        closeNav();
      });
    });
  }

  function closeNav() {
    navToggle?.classList.remove("is-open");
    navPanel?.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
    if (preloader?.classList.contains("is-done") || !preloader) {
      document.body.style.overflow = "";
    }
  }

  function initNav() {
    navToggle?.addEventListener("click", () => {
      const open = navPanel.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    navPanel?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    const onScroll = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initForm() {
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) return;

      const subject =
        currentLang === "de"
          ? `Anfrage von ${name} – Kleine Küstenwunder`
          : `Inquiry from ${name} – Kleine Küstenwunder`;

      const body =
        currentLang === "de"
          ? `Name: ${name}\nE-Mail: ${email}\n\n${message}`
          : `Name: ${name}\nEmail: ${email}\n\n${message}`;

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      if (formSuccess) {
        formSuccess.hidden = false;
      }
    });
  }

  function initYear() {
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  initPreloader();
  initLanguage();
  initNav();
  initReveal();
  initForm();
  initYear();
})();
