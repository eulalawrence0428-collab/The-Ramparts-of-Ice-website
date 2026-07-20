/* =================================================================
   1. ナビゲーション: スクロールしたら背景を付ける
   ================================================================= */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
});

/* ハンバーガーメニュー(モバイル用の簡易トグル。必要に応じて拡張してください) */
const navBurger = document.getElementById('navBurger');
navBurger.addEventListener('click', () => {
  document.querySelector('.nav__links').classList.toggle('is-open');
});


/* =================================================================
   2. ヒーローの星を動的に生成する
   ================================================================= */
const heroStars = document.getElementById('heroStars');
const STAR_COUNT = 60; // 星の数。増減させると密度が変わります

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('span');
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animationDelay = `${Math.random() * 3}s`;
  star.style.opacity = Math.random() * 0.6 + 0.2;
  heroStars.appendChild(star);
}


/* =================================================================
   3. キャラクターカルーセル: ドラッグでスクロールできるようにする
   ================================================================= */
const carousel = document.getElementById('charCarousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => { isDown = false; });
carousel.addEventListener('mouseup', () => { isDown = false; });

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; // ドラッグ速度の倍率
  carousel.scrollLeft = scrollLeft - walk;
});


/* =================================================================
   4. スクロールで要素をふわっと表示する(IntersectionObserver)
   ================================================================= */
// reveal クラスを付けたい要素をまとめて指定
document.querySelectorAll(
  '.feature-star, .char-card, .news-card, .world__panel, .world__visual'
).forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // 一度表示したら監視をやめる
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


/* =================================================================
   5. 星座の線(SVG)をスクロールで描画するアニメーション
   ================================================================= */
const constellationSvg = document.getElementById('constellationSvg');

if (constellationSvg) {
  const lines = constellationSvg.querySelectorAll('line');

  lines.forEach((line) => {
    const length = line.getTotalLength ? line.getTotalLength() : 400;
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
    line.style.transition = 'stroke-dashoffset 1.4s ease';
  });

  const constellationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lines.forEach((line, i) => {
          setTimeout(() => {
            line.style.strokeDashoffset = 0;
          }, i * 300);
        });
        constellationObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  constellationObserver.observe(document.getElementById('constellation'));
}
