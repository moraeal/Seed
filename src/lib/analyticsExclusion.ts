const browserPreferenceKey = "seed-analytics-browser-v1";
const operationsTabKey = "seed-analytics-operations-tab-v1";
const automatedAgent = /SeedVoice-Operations|Googlebot|bingbot|Yeti\/|Daumoa|GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-User|PerplexityBot|HeadlessChrome|Chrome-Lighthouse|facebookexternalhit|Twitterbot|Slackbot-LinkExpanding/i;

let ownerOrLoading = true;
let operationsTab = false;
let memoryPreference: string | null = null;

function browserPreference() {
  try {
    return localStorage.getItem(browserPreferenceKey) ?? memoryPreference;
  } catch {
    return memoryPreference;
  }
}

export function browserExcludesAnalytics() {
  return browserPreference() === "exclude";
}

export function setBrowserExclusion(exclude: boolean) {
  memoryPreference = exclude ? "exclude" : "include";
  try {
    localStorage.setItem(browserPreferenceKey, memoryPreference);
    return true;
  } catch {
    return false;
  }
}

export function setAnalyticsIdentity(owner: boolean, loading: boolean) {
  ownerOrLoading = owner || loading;
  if (owner && browserPreference() === null) setBrowserExclusion(true);
}

// The private dashboard entry arms this tab before the first public article is opened.
export function startOperationsTab() {
  if (location.pathname.replace(/\/$/, "") !== "/insights" || location.hash !== "#operations-tab") return;
  operationsTab = true;
  try {
    sessionStorage.setItem(operationsTabKey, "1");
  } catch {
    // This document still excludes all client-side navigation.
  }
}

export function excludeAnalytics(path: string) {
  if (ownerOrLoading || operationsTab || browserExcludesAnalytics() || navigator.webdriver ||
      automatedAgent.test(navigator.userAgent) || /^\/(account|insights|writer)(\/|$)/.test(path)) return true;
  try {
    return sessionStorage.getItem(operationsTabKey) === "1";
  } catch {
    return false;
  }
}
