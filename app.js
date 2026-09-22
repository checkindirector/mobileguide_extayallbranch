"use strict";
(() => {
  const list = document.getElementById("branch-list");
  const collectionList = document.getElementById("collection-list");
  const branches = (window.EXTAY_BRANCHES || []).filter(branch => branch.visible !== false);
  const make = (tag, className, text) => { const e = document.createElement(tag); if (className) e.className = className; if (text) e.textContent = text; return e; };
  function validUrl(value) { try { const u = new URL(value); return u.protocol === "https:" ? u.href : null; } catch { return null; } }
  function link(label, value, className) {
    const url = validUrl(value); if (!url) return null;
    const a = make("a", className, label); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", `${label} (새 창)`); return a;
  }
  for (const b of branches) {
    if (b.status === "coming-soon") {
      const card = make("article", "branch branch-upcoming"); card.id = `stay-${b.id}`;
      const cover = make("div", "upcoming-cover");
      cover.append(make("span", "upcoming-eyebrow", "EXTAY"), make("span", "upcoming-label", "COMING SOON"));
      const caption = make("div", "branch-caption");
      caption.append(make("span", "branch-region", b.region), make("h3", "", b.name));
      const date = make("p", "opening-date");
      const month = make("time", "", b.openingLabel); month.dateTime = b.openingMonth;
      date.append(month, make("span", "opening-note", "오픈 예정"));
      card.append(cover, caption, date); list.append(card); continue;
    }
    const card = make("article", "branch"); card.id = `stay-${b.id}`;
    const main = link(b.name, validUrl(b.guideUrl) || validUrl(b.bookingUrl) || validUrl(b.projectUrl), "branch-main") || make("div", "branch-main"); main.textContent = "";
    let image;
    if (b.image) { image = make("img", "branch-image"); image.src = b.image; image.alt = b.imageAlt || b.name; image.width = 400; image.height = 400; image.loading = b.group !== "collection" && list.children.length < 2 ? "eager" : "lazy"; image.decoding = "async"; }
    else { image = make("span", "branch-image monogram", b.monogram || "EXTAY"); image.setAttribute("aria-hidden", "true"); }
    const caption = make("div", "branch-caption"); caption.append(make("span", "branch-region", b.region), make("h3", "", b.name), make("span", "branch-english", (b.englishName || "").replace(/^EXTAY\s+(MANSION\s+)?/, ""))); if (!b.englishName) caption.querySelector(".branch-english").remove(); main.append(image, caption);
    const actions = make("div", "branch-actions");
    for (const [label, value, primary] of [["이용 안내",b.guideUrl,true],[b.bookingLabel || "예약하기",b.bookingUrl,!validUrl(b.guideUrl)],["지도",b.mapUrl,false],["공간 보기",b.projectUrl,true]]) {
      const a = link(label, value, `action ${primary ? "primary" : "secondary"}`); if (!a) continue;
      a.setAttribute("aria-label", `${b.name} ${label} (새 창)`); const arrow = make("span", "action-arrow", "↗"); arrow.setAttribute("aria-hidden", "true"); a.append(arrow); actions.append(a);
    }
    card.append(main); if (b.description) card.append(make("p", "branch-description", b.description)); card.append(actions); if (!actions.children.length) actions.append(make("span", "empty-message", "안내 준비 중")); (b.group === "collection" ? collectionList : list).append(card);
  }
  if (!list.children.length) list.append(make("p", "empty-message", "지점 안내를 준비하고 있습니다."));

})();
