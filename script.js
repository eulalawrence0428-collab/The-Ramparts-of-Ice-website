const categoryMeta = {
  official: "公式情報",
  collab: "コラボ",
  product: "新商品",
};

const statusMeta = {
  ongoing: "開催中",
  upcoming: "開催前",
  ended: "記録",
};

const reservationMeta = {
  available: "予約可能",
  notNeeded: "予約不要",
  closed: "予約終了",
};

const items = [
  {
    id: "anime-season2-20261001",
    title: "第2期 2026年10月1日(木)からTBS系28局で放送開始",
    category: "official",
    subcategory: "放送",
    status: "upcoming",
    reservation: "notNeeded",
    area: "全国",
    venue: "TBS系28局",
    dateLabel: "2026.10.1",
    sourceLabel: "アニメ公式サイト",
    sourceUrl: "https://korinojoheki-pr.com/",
    imageUrl: "https://korinojoheki-pr.com/wp/wp-content/themes/35ef7200ecdb/static/assets/fv/visual03.webp",
    summary: "公式サイトで第2期が2026年10月1日から毎週木曜にTBS系28局で放送開始と案内されています。",
    tags: ["第2期", "TBS系28局", "放送"],
    visual: "event",
    priority: "high",
  },
  {
    id: "anime-streaming-season1",
    title: "第1期 各配信サイトで配信中",
    category: "official",
    subcategory: "配信",
    status: "ongoing",
    reservation: "notNeeded",
    area: "オンライン",
    venue: "Netflix / Prime Video / Disney+ / U-NEXTほか",
    dateLabel: "配信中",
    sourceLabel: "アニメ公式サイト",
    sourceUrl: "https://korinojoheki-pr.com/",
    imageUrl: "https://korinojoheki-pr.com/wp/wp-content/themes/35ef7200ecdb/static/ogp.jpg",
    summary: "第1期は見放題・レンタルの各配信サイトで配信中。配信日時は各サービス側での確認が必要です。",
    tags: ["第1期", "配信", "オンライン"],
    visual: "event",
    priority: "high",
  },
  {
    id: "line-stamp-theme-20260710",
    title: "LINEスタンプ・LINE着せかえが販売開始",
    category: "product",
    subcategory: "LINE",
    status: "ongoing",
    reservation: "notNeeded",
    area: "オンライン",
    venue: "LINE STORE / スタンプショップ",
    dateLabel: "2026.7.10",
    sourceLabel: "公式ニュース",
    sourceUrl: "https://korinojoheki-pr.com/news/20260710_285/",
    imageUrl: "https://korinojoheki-pr.com/wp/wp-content/themes/35ef7200ecdb/static/ogp.jpg",
    summary: "小雪、美姫、湊、陽太たちの表情を使った全40種類のLINEスタンプと、LINE着せかえが販売開始されています。",
    tags: ["LINEスタンプ", "LINE着せかえ", "オンライン"],
    visual: "goods",
    priority: "high",
  },
  {
    id: "system-service-prize-keychain-202605",
    title: "システムサービス マスコットキーチェーン 小雪",
    category: "product",
    subcategory: "クレーンゲーム",
    status: "ongoing",
    reservation: "notNeeded",
    area: "全国",
    venue: "アミューズメント施設 / オンラインクレーン",
    dateLabel: "2026年5月4週より順次",
    sourceLabel: "システムサービス導入店一覧",
    sourceUrl: "https://fans.co.jp/event/2605_kj_SS16952",
    imageUrl: "https://prcdn.freetls.fastly.net/release_image/46259/399/46259-399-cc4efb69f14698bdbd1caccef43ac24e-1784x1270.jpg?format=jpeg&auto=webp&fit=bounds&width=1200&height=630",
    summary: "小雪のマスコットキーチェーン全4種が、2026年5月4週よりアミューズメント施設で順次登場。導入店舗とオンラインクレーンのリンクが公式一覧で確認できます。",
    tags: ["プライズ", "クレーンゲーム", "導入店一覧", "小雪"],
    visual: "crane",
    priority: "high",
  },
  {
    id: "system-service-prize-rpg-202606",
    title: "システムサービス ぬいぐるみ RPG Ver.",
    category: "product",
    subcategory: "クレーンゲーム",
    status: "ongoing",
    reservation: "notNeeded",
    area: "全国",
    venue: "アミューズメント施設 / オンラインクレーン",
    dateLabel: "2026年6月3週より順次",
    sourceLabel: "システムサービス導入店一覧",
    sourceUrl: "https://fans.co.jp/event/2606_kj_SS16953",
    imageUrl: "https://prcdn.freetls.fastly.net/release_image/46259/399/46259-399-c45230b61151e07afb43cfd8914f34cf-2510x1781.jpg?format=jpeg&auto=webp&fit=bounds&width=1200&height=630",
    summary: "RPG衣装のぬいぐるみ全4種が、2026年6月3週よりゲームセンターなどで順次登場。店舗ごとの導入時期や在庫は変動するため公式導入店一覧で確認します。",
    tags: ["プライズ", "クレーンゲーム", "導入店一覧", "RPG Ver."],
    visual: "crane",
    priority: "high",
  },
  {
    id: "comics-all-14",
    title: "コミックス全14巻 好評発売・配信中",
    category: "product",
    subcategory: "コミックス",
    status: "ongoing",
    reservation: "notNeeded",
    area: "全国",
    venue: "書店 / 電子書店 / リマコミ+",
    dateLabel: "全14巻発売・配信中",
    sourceLabel: "アニメ公式サイト",
    sourceUrl: "https://korinojoheki-pr.com/",
    imageUrl: "https://korinojoheki-pr.com/wp/wp-content/themes/35ef7200ecdb/static/assets/comics/01.webp",
    summary: "公式サイトのコミックス欄で全14巻が好評発売・配信中と案内されています。原作の確認用リンクとして保存できます。",
    tags: ["コミックス", "全14巻", "書店"],
    visual: "goods",
    priority: "normal",
  },
  {
    id: "sync-vvit-goods-20260623",
    title: "シンクイノベーション新商品 9月下旬出荷予定",
    category: "product",
    subcategory: "通販",
    status: "upcoming",
    reservation: "closed",
    area: "オンライン",
    venue: "ビビット",
    dateLabel: "予約 6.23-7.14 / 出荷 9月下旬予定",
    sourceLabel: "シンクイノベーション公式発表",
    sourceUrl: "https://prtimes.jp/main/html/rd/p/000000649.000071079.html",
    imageUrl: "https://prcdn.freetls.fastly.net/release_image/71079/649/71079-649-5919f3acbeb2136c5d12f9cc51211cb0-3000x1375.jpg?format=jpeg&auto=webp&fit=bounds&width=1200&height=630",
    summary: "缶バッジ、前髪クリップ、ポーチなどのミニキャラデザイン商品。予約期間は終了済みで、出荷は2026年9月下旬予定です。",
    tags: ["ビビット", "ミニキャラ", "出荷前"],
    visual: "goods",
    priority: "high",
  },
  {
    id: "system-service-prize-amusement-202611",
    title: "システムサービス ぬいぐるみ 遊園地コーデVer.",
    category: "product",
    subcategory: "クレーンゲーム",
    status: "upcoming",
    reservation: "notNeeded",
    area: "全国",
    venue: "ゲームセンターなど",
    dateLabel: "2026年11月頃登場予定",
    sourceLabel: "システムサービス公式X",
    sourceUrl: "https://x.com/FANSCLUB_SS",
    summary: "システムサービス公式Xで、10話に登場した私服姿の約12cmぬいぐるみが2026年11月頃にゲームセンターなどへ登場予定と告知されています。導入店情報は続報待ちです。",
    tags: ["プライズ", "クレーンゲーム", "公式X", "発売前"],
    visual: "crane",
    priority: "high",
  },
  {
    id: "system-service-prize-uppy-202612",
    title: "システムサービス ぬいぐるみ ウッぴーVer.",
    category: "product",
    subcategory: "クレーンゲーム",
    status: "upcoming",
    reservation: "notNeeded",
    area: "全国",
    venue: "ゲームセンターなど",
    dateLabel: "2026年12月頃登場予定",
    sourceLabel: "システムサービス公式X",
    sourceUrl: "https://x.com/FANSCLUB_SS",
    summary: "システムサービス公式Xで、ウッぴーになりきったお座りポーズのぬいぐるみが2026年12月頃にゲームセンターなどへ登場予定と告知されています。詳細は続報待ちです。",
    tags: ["プライズ", "クレーンゲーム", "公式X", "発売前"],
    visual: "crane",
    priority: "high",
  },
  {
    id: "animate-icecream-fair-20260718",
    title: "アニメイト アイスクリームフェア",
    category: "product",
    subcategory: "アニメイト",
    status: "ended",
    reservation: "closed",
    area: "全国",
    venue: "アニメイト対象店舗 / アニメイト通販",
    dateLabel: "2026.7.18 - 2026.8.11",
    sourceLabel: "アニメイト公式",
    sourceUrl: "https://www.animate-onlineshop.jp/contents/fair_event/detail.php?id=115339",
    imageUrl: "https://tc-animate.techorus-cdn.com/resize_image/resize_image.php?image=4580843683579_1_1780977911.jpg",
    summary: "関連グッズ購入・予約内金など1,100円(税込)ごとにブロマイド全6種から1枚を配布。対象店舗と通販で実施されました。",
    tags: ["アニメイト", "特典", "ブロマイド"],
    visual: "animate",
    priority: "normal",
  },
  {
    id: "kujibikido-online-20260611",
    title: "くじ引き堂 オンラインくじ",
    category: "product",
    subcategory: "オンラインくじ",
    status: "ended",
    reservation: "closed",
    area: "オンライン",
    venue: "くじ引き堂",
    dateLabel: "2026.6.11 - 2026.7.2",
    sourceLabel: "くじ引き堂公式",
    sourceUrl: "https://kujibikido.com/lp/korinojoheki/",
    imageUrl: "https://kujibikido.com/lp/korinojoheki/img/og.png",
    summary: "パジャマパーティーをテーマにしたオンラインくじ。販売期間は2026年6月11日12:00から7月2日11:59まででした。",
    tags: ["オンラインくじ", "パジャマパーティー", "くじ引き堂"],
    visual: "goods",
    priority: "normal",
  },
  {
    id: "karatetsu-collab-20260604",
    title: "カラオケの鉄人コラボ",
    category: "collab",
    subcategory: "カラオケ",
    status: "ended",
    reservation: "closed",
    area: "東京",
    venue: "池袋東口店ほか対象9店舗",
    dateLabel: "2026.6.4 - 2026.7.19",
    sourceLabel: "カラオケの鉄人公式",
    sourceUrl: "https://www.karatetsu.com/animegame/korinojoheki.shtml",
    imageUrl: "https://www.karatetsu.com/animegame/img/korinojoheki/mainimage.jpg",
    summary: "コラボメニュー、オリジナルグッズ、池袋東口店のコンセプトルームを実施。グッズ通販受付も行われました。",
    tags: ["カラオケ", "コンセプトルーム", "対象9店舗"],
    visual: "karaoke",
    priority: "normal",
  },
  {
    id: "favoteria-collab-20260630",
    title: "FavoteriA Special Collaboration",
    category: "collab",
    subcategory: "カフェ",
    status: "ended",
    reservation: "closed",
    area: "東京/大阪",
    venue: "FavoteriA 池袋2号館 / なんばWEST",
    dateLabel: "2026.6.30 - 2026.7.12",
    sourceLabel: "FavoteriA公式",
    sourceUrl: "https://favoteria.com/menu/1102236",
    imageUrl: "https://cdn.goope.jp/201102/230509102452wxa9.png",
    summary: "池袋2号館となんばWESTで実施。先着予約入場日とフリー入場期間が案内されました。",
    tags: ["カフェ", "池袋", "なんば"],
    visual: "cafe",
    priority: "normal",
  },
  {
    id: "emot-stamprally-20260427",
    title: "小田急電鉄 EMotデジタルスタンプラリー",
    category: "collab",
    subcategory: "スタンプラリー",
    status: "ended",
    reservation: "closed",
    area: "神奈川",
    venue: "藤沢駅 / 片瀬江ノ島駅 / 鵠沼駅 / 江ノ島駅",
    dateLabel: "2026.4.27 - 2026.7.12",
    sourceLabel: "小田急電鉄公式発表",
    sourceUrl: "https://prtimes.jp/main/html/rd/p/000001403.000012974.html",
    imageUrl: "https://prcdn.freetls.fastly.net/release_image/12974/1403/12974-1403-d899397bf277ccbc07a1b4838e1b2290-1280x452.png?format=jpeg&auto=webp&fit=bounds&width=1200&height=630",
    summary: "デジタル江の島・鎌倉フリーパス付き企画。4カ所のパネルを巡り、達成者向け特典が用意されました。",
    tags: ["EMot", "小田急", "湘南"],
    visual: "event",
    priority: "normal",
  },
];

const els = {
  search: document.querySelector("#site-search"),
  category: document.querySelector("#category-filter"),
  status: document.querySelector("#status-filter"),
  subcategory: document.querySelector("#subcategory-filter"),
  area: document.querySelector("#area-filter"),
  reservation: document.querySelector("#reservation-filter"),
  refresh: document.querySelector("#refresh-button"),
  lastChecked: document.querySelector("#last-checked"),
  lists: {
    ongoing: document.querySelector("#ongoing-list"),
    upcoming: document.querySelector("#upcoming-list"),
    ended: document.querySelector("#ended-list"),
  },
};

let bookmarks = JSON.parse(localStorage.getItem("ice-wall-github-bookmarks") || "[]");
let notes = JSON.parse(localStorage.getItem("ice-wall-github-notes") || "{}");

function uniqueOptions(key) {
  return ["all", ...new Set(items.map((item) => item[key]))];
}

function fillSelect(select, options) {
  select.innerHTML = options
    .map((option) => `<option value="${option}">${option === "all" ? "すべて" : option}</option>`)
    .join("");
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function filteredItems() {
  const query = normalize(els.search.value.trim());
  return items
    .filter((item) => {
      const text = normalize([
        item.title,
        item.summary,
        item.subcategory,
        item.area,
        item.venue,
        item.sourceLabel,
        item.dateLabel,
        item.tags.join(" "),
      ].join(" "));

      return (
        (!query || text.includes(query)) &&
        (els.category.value === "all" || item.category === els.category.value) &&
        (els.status.value === "all" || item.status === els.status.value) &&
        (els.subcategory.value === "all" || item.subcategory === els.subcategory.value) &&
        (els.area.value === "all" || item.area === els.area.value) &&
        (els.reservation.value === "all" || item.reservation === els.reservation.value)
      );
    })
    .sort((a, b) => {
      if (a.priority !== b.priority) return a.priority === "high" ? -1 : 1;
      return a.title.localeCompare(b.title, "ja");
    });
}

function badge(text, className = "") {
  return `<span class="badge ${className}">${text}</span>`;
}

function visual(item) {
  const image = item.imageUrl ? `<img src="${item.imageUrl}" alt="" loading="lazy" />` : "";
  return `<div class="card-visual visual-${item.visual}">${image}<span class="visual-label">${item.subcategory}</span></div>`;
}

function card(item) {
  const isBookmarked = bookmarks.includes(item.id);
  return `
    <article class="info-card tone-${item.category}">
      <div class="card-topline">
        ${badge(categoryMeta[item.category], `badge-${item.category}`)}
        ${badge(statusMeta[item.status], `status-${item.status}`)}
        <span class="chip source-chip">${item.sourceLabel}</span>
      </div>
      ${visual(item)}
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="card-facts">
        <span>${item.subcategory}</span>
        <span>${item.area}</span>
        <span>${item.venue}</span>
        <span>${item.dateLabel}</span>
      </div>
      <div class="tag-row">
        ${badge(reservationMeta[item.reservation], `reserve-${item.reservation}`)}
        ${item.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </div>
      <div class="card-actions">
        <a href="${item.sourceUrl}" target="_blank" rel="noreferrer" class="button secondary">公式元</a>
        <button type="button" class="button secondary" data-bookmark="${item.id}">
          ${isBookmarked ? "保存済み" : "保存"}
        </button>
      </div>
      <label class="note-box">
        調査メモ
        <textarea data-note="${item.id}" placeholder="在庫、予約開始時刻、確認した店舗など" rows="2">${notes[item.id] || ""}</textarea>
      </label>
    </article>
  `;
}

function emptyState() {
  return `<div class="empty-state">条件に合う情報はまだありません。</div>`;
}

function renderPickup(filtered) {
  const item = filtered.find((candidate) => candidate.priority === "high") || filtered[0];
  if (!item) return;

  document.querySelector("#pickup-title").textContent = item.title;
  document.querySelector("#pickup-summary").textContent = item.summary;
  document.querySelector("#pickup-meta").innerHTML = [
    badge(statusMeta[item.status], `status-${item.status}`),
    badge(reservationMeta[item.reservation], `reserve-${item.reservation}`),
    `<span>${item.sourceLabel}</span>`,
    `<span>${item.area}</span>`,
    `<span>${item.dateLabel}</span>`,
  ].join("");
  document.querySelector("#pickup-visual").className = `pickup-visual visual-${item.visual}`;
  document.querySelector("#pickup-visual").innerHTML = `
    ${item.imageUrl ? `<img src="${item.imageUrl}" alt="" />` : ""}
    <span class="visual-label">${categoryMeta[item.category]}</span>
  `;
}

function renderMetrics(filtered) {
  const locations = filtered.filter((item) => item.area !== "オンライン");
  document.querySelector("#metric-ongoing").textContent = filtered.filter((item) => item.status === "ongoing").length;
  document.querySelector("#metric-upcoming").textContent = filtered.filter((item) => item.status === "upcoming").length;
  document.querySelector("#metric-reserve").textContent = filtered.filter((item) => item.reservation === "available").length;
  document.querySelector("#metric-place").textContent = new Set(locations.map((item) => item.venue)).size;
}

function renderLocations(filtered) {
  const locations = filtered.filter((item) => item.area !== "オンライン").slice(0, 5);
  document.querySelector("#location-list").innerHTML = locations.length
    ? locations.map((item) => `<div class="location-row"><strong>${item.area}</strong><span>${item.venue}</span></div>`).join("")
    : `<p class="quiet-text">条件に合う位置情報はありません。</p>`;
}

function renderBookmarks() {
  const saved = bookmarks.map((id) => items.find((item) => item.id === id)).filter(Boolean);
  document.querySelector("#bookmark-list").innerHTML = saved.length
    ? saved.map((item) => `<div class="research-row"><span>${categoryMeta[item.category]}</span><strong>${item.title}</strong></div>`).join("")
    : `<p class="quiet-text">保存した情報がここに残ります。</p>`;
}

function render() {
  const filtered = filteredItems();
  const grouped = {
    ongoing: filtered.filter((item) => item.status === "ongoing"),
    upcoming: filtered.filter((item) => item.status === "upcoming"),
    ended: filtered.filter((item) => item.status === "ended"),
  };

  for (const status of Object.keys(grouped)) {
    els.lists[status].innerHTML = grouped[status].length ? grouped[status].map(card).join("") : emptyState();
    document.querySelector(`#count-${status}`).textContent = `${grouped[status].length}件`;
  }

  renderPickup(filtered);
  renderMetrics(filtered);
  renderLocations(filtered);
  renderBookmarks();
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-bookmark]");
  if (!button) return;
  const id = button.dataset.bookmark;
  bookmarks = bookmarks.includes(id) ? bookmarks.filter((itemId) => itemId !== id) : [...bookmarks, id];
  localStorage.setItem("ice-wall-github-bookmarks", JSON.stringify(bookmarks));
  render();
});

document.addEventListener("input", (event) => {
  const field = event.target.closest("[data-note]");
  if (!field) return;
  notes[field.dataset.note] = field.value;
  localStorage.setItem("ice-wall-github-notes", JSON.stringify(notes));
});

for (const control of [els.search, els.category, els.status, els.subcategory, els.area, els.reservation]) {
  control.addEventListener("input", render);
}

els.refresh.addEventListener("click", () => {
  els.lastChecked.textContent = `最終確認 ${new Date().toLocaleTimeString("ja-JP", { timeStyle: "short" })}`;
});

fillSelect(els.subcategory, uniqueOptions("subcategory"));
fillSelect(els.area, uniqueOptions("area"));
els.lastChecked.textContent = `最終確認 ${new Date().toLocaleTimeString("ja-JP", { timeStyle: "short" })}`;
render();