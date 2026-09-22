"use strict";
(() => {
  const list = document.getElementById("branch-list");
  const branches = (window.EXTAY_BRANCHES || []).filter(branch => branch.visible !== false);
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  function link(label, value, primary) {
    if (!value) return null;
    let url;
    try { url = new URL(value); } catch { return null; }
    if (url.protocol !== "https:") return null;
    const anchor = make("a", `action ${primary ? "primary" : "secondary"}`, label);
    anchor.href = url.href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.setAttribute("aria-label", `${label} (새 창)`);
    const arrow = make("span", "", "↗");
    arrow.setAttribute("aria-hidden", "true");
    anchor.append(arrow);
    return anchor;
  }
  branches.forEach((branch, index) => {
    const comingSoon = branch.status === "coming-soon";
    const card = make("details", comingSoon ? "branch coming-soon" : "branch");
    card.id = `stay-${branch.id}`;
    card.open = index === 0;
    const summary = make("summary");
    let image;
    if (branch.image) {
      image = make("img", "branch-thumb");
      image.src = branch.image;
      image.alt = branch.imageAlt || branch.name;
      image.width = 84;
      image.height = 88;
      image.loading = "lazy";
    } else {
      image = make("span", "branch-thumb monogram", comingSoon ? "SOON" : branch.monogram);
      image.setAttribute("aria-hidden", "true");
    }
    const title = make("div", "branch-title");
    title.append(make("p", "branch-location", branch.region), make("h3", "", branch.name), make("span", "branch-english", branch.englishName));
    if (comingSoon) title.append(make("span", "status", "오픈 예정"));
    const expand = make("span", "expand", "+");
    expand.setAttribute("aria-hidden", "true");
    summary.append(image, title, expand);
    const body = make("div", "branch-body");
    body.append(make("p", "branch-description", branch.description));
    if (branch.address) body.append(make("p", "address", branch.address));
    const actions = make("div", "branch-actions");
    const guide = comingSoon ? null : link("이용 안내", branch.guideUrl, true);
    const booking = comingSoon ? null : link(branch.bookingLabel || "예약하기", branch.bookingUrl, !guide);
    const map = comingSoon ? null : link("네이버 지도", branch.mapUrl, false);
    if (guide) actions.append(guide);
    if (booking) actions.append(booking);
    if (map) actions.append(map);
    if (actions.children.length) body.append(actions);
    else if (!comingSoon) body.append(make("p", "address", "지점 안내를 준비하고 있습니다."));
    card.append(summary, body);
    list.append(card);
  });
  if (!branches.length) list.append(make("p", "section-description", "지점 안내를 준비하고 있습니다."));
})();
