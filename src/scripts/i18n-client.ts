import { strings, pricing, type Lang } from "../i18n/strings";

const STORAGE_KEY = "folioWebLang";

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  return (navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}

let lang: Lang = detectLang();
let annual = true;

function applyLang() {
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n as keyof (typeof strings)["es"];
    const value = strings[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((el) => {
    const isActive = el.dataset.langOption === lang;
    el.classList.toggle("bg-ink", isActive);
    el.classList.toggle("text-card", isActive);
    el.classList.toggle("text-ink", !isActive);
  });

  applyPricing();
}

function applyPricing() {
  const p = pricing[lang];
  const plan = annual ? p.annual : p.monthly;

  const priceEl = document.querySelector<HTMLElement>("[data-pro-price]");
  const perEl = document.querySelector<HTMLElement>("[data-pro-per]");
  const subEl = document.querySelector<HTMLElement>("[data-pro-sub]");
  const ctaEl = document.querySelector<HTMLElement>("[data-pro-cta]");
  if (priceEl) priceEl.textContent = plan.price;
  if (perEl) perEl.textContent = plan.per;
  if (subEl) subEl.textContent = plan.sub;
  if (ctaEl) ctaEl.textContent = plan.cta;

  document.querySelectorAll<HTMLElement>("[data-billing-option]").forEach((el) => {
    const isAnnual = el.dataset.billingOption === "annual";
    const isActive = isAnnual === annual;
    el.textContent = isAnnual ? p.annualLabel : p.monthlyLabel;
    el.classList.toggle("bg-ink", isActive);
    el.classList.toggle("text-card", isActive);
    el.classList.toggle("text-ink", !isActive);
  });
}

function init() {
  document.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((el) => {
    el.addEventListener("click", () => {
      const next = el.dataset.langOption as Lang;
      if (next !== lang) {
        lang = next;
        try {
          localStorage.setItem(STORAGE_KEY, lang);
        } catch {}
        applyLang();
      }
    });
  });

  document.querySelectorAll<HTMLElement>("[data-billing-option]").forEach((el) => {
    el.addEventListener("click", () => {
      const next = el.dataset.billingOption === "annual";
      if (next !== annual) {
        annual = next;
        applyPricing();
      }
    });
  });

  applyLang();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
