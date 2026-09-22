"use strict";
(() => {
  const list = document.getElementById("branch-list");
  const collectionList = document.getElementById("collection-list");
  const branches = (window.EXTAY_BRANCHES || []).filter(branch => branch.visible !== false);
  const providers = {
    booking: {name: "부킹닷컴", english: "Booking.com", mark: "B.", domain: "booking.com"},
    agoda: {name: "아고다", english: "Agoda", mark: "a", domain: "agoda.com"},
    trip: {name: "트립닷컴", english: "Trip.com", mark: "T", domain: "trip.com"},
    airbnb: {name: "에어비앤비", english: "Airbnb", mark: "A", domain: "airbnb.co.kr"}
  };
  const dialog = document.getElementById("booking-dialog");
  const options = document.getElementById("booking-options");
  let lastTrigger;
  const make = (tag, className, text) => { const e = document.createElement(tag); if (className) e.className = className; if (text) e.textContent = text; return e; };
  function validUrl(value) { try { const u = new URL(value); return u.protocol === "https:" ? u.href : null; } catch { return null; } }
  function link(label, value, className) {
    const url = validUrl(value); if (!url) return null;
    const a = make("a", className, label); a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", `${label} (새 창)`); return a;
  }
  function bookingLinks(branch) {
    return (branch.bookingLinks || []).filter(item => {
      const provider = providers[item.provider];
      const value = validUrl(item.url);
      if (!provider || !value) return false;
      const host = new URL(value).hostname;
      const domains = item.provider === "airbnb" ? ["airbnb.co.kr", "airbnb.com"] : [provider.domain];
      return domains.some(domain => host === domain || host.endsWith(`.${domain}`));
    });
  }
  function openBooking(branch, links, trigger) {
    lastTrigger = trigger;
    document.getElementById("booking-title").textContent = branch.name;
    options.replaceChildren();
    for (const item of links) {
      const provider = providers[item.provider];
      const row = link("", item.url, "booking-option");
      row.setAttribute("aria-label", `${branch.name} ${provider.name} 예약하기 (새 창)`);
      const mark = make("span", `provider-mark provider-${item.provider}`, provider.mark);
      mark.setAttribute("aria-hidden", "true");
      const label = make("span", "provider-label");
      label.append(make("strong", "", provider.name), make("span", "", provider.english));
      const arrow = make("span", "provider-arrow", "↗"); arrow.setAttribute("aria-hidden", "true");
      row.append(mark, label, arrow); options.append(row);
    }
    dialog.showModal();
    document.body.classList.add("booking-open");
  }
  dialog.querySelector(".booking-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    document.body.classList.remove("booking-open");
    lastTrigger?.focus({preventScroll: true});
  });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
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
    const main = make("div", "branch-main");
    let image;
    if (b.image) { image = make("img", "branch-image"); image.src = b.image; image.alt = b.imageAlt || b.name; image.width = 400; image.height = 400; image.loading = b.group !== "collection" && list.children.length < 2 ? "eager" : "lazy"; image.decoding = "async"; }
    else { image = make("span", "branch-image monogram", b.monogram || "EXTAY"); image.setAttribute("aria-hidden", "true"); }
    const caption = make("div", "branch-caption");
    caption.append(make("span", "branch-region", b.region), make("h3", "", b.name));
    main.append(image, caption);
    const actions = make("div", "branch-actions");
    const links = bookingLinks(b);
    const button = make("button", "action primary", "예약하기"); button.type = "button";
    button.setAttribute("aria-label", `${b.name} 예약하기`);
    if (links.length) {
      button.setAttribute("aria-haspopup", "dialog"); button.setAttribute("aria-controls", "booking-dialog");
      const arrow = make("span", "action-arrow", "↗"); arrow.setAttribute("aria-hidden", "true"); button.append(arrow);
      button.addEventListener("click", () => openBooking(b, links, button));
    } else {
      button.disabled = true;
      const note = make("p", "booking-pending", "예약 링크 준비 중"); note.id = `pending-${b.id}`;
      button.setAttribute("aria-describedby", note.id); actions.append(note);
    }
    actions.append(button);
    card.append(main); if (b.description) card.append(make("p", "branch-description", b.description)); card.append(actions); (b.group === "collection" ? collectionList : list).append(card);
  }
  if (!list.children.length) list.append(make("p", "empty-message", "지점 안내를 준비하고 있습니다."));

})();
