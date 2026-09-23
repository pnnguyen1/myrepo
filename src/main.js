import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="site-header">
    <div class="mark">Prime <span>Cost</span></div>
    <div class="meta">Briefing · Sep 2026</div>
  </header>

  <section class="hero" aria-label="Lead">
    <div class="hero-plane" aria-hidden="true"></div>
    <div class="hero-copy">
      <p class="brand">Prime Cost</p>
      <h1 class="headline">High F&amp;B costs pushed a Wendy’s giant into Chapter 11.</h1>
      <p class="lede">
        Meritage Hospitality Group — 314 Wendy’s restaurants — filed for bankruptcy after
        food, paper, and labor hit a record 66.1% of sales.
      </p>
      <div class="cta-row">
        <a class="cta" href="#cost-spike">See the cost anatomy</a>
        <a class="cta-ghost" href="#timeline">Follow the filing</a>
      </div>
    </div>
    <div class="hero-stat" aria-label="Record prime cost">
      <span class="num" data-count="66.1" data-suffix="%">0%</span>
      <span class="label">Prime cost · 2025 peak</span>
    </div>
  </section>

  <main>
    <section class="section" id="cost-spike">
      <p class="section-kicker">01 · The F&amp;B squeeze</p>
      <h2>Beef went parabolic. Margins did not.</h2>
      <p>
        Meritage’s prime costs — food, paper, and labor — climbed to an all-time high of
        66.1% in 2025. Restaurant-level margins hit a 30-year low and EBITDA turned
        negative for the first time in two decades.
      </p>
      <dl class="cost-stack">
        <div class="cost-row">
          <dt>Beef cost (Q2)</dt>
          <div class="bar"><i style="--w: 95%"></i></div>
          <dd>+18.9%</dd>
        </div>
        <div class="cost-row">
          <dt>Prime costs</dt>
          <div class="bar"><i style="--w: 100%"></i></div>
          <dd>66.1%</dd>
        </div>
        <div class="cost-row">
          <dt>Store EBITDA</dt>
          <div class="bar"><i style="--w: 48%"></i></div>
          <dd>−48%</dd>
        </div>
      </dl>
    </section>

    <section class="section" id="collapse">
      <p class="section-kicker">02 · The collapse</p>
      <h2>Sales fell. Losses stacked.</h2>
      <p>
        Soft traffic, deep discounting, and weather shocks in the South compounded the
        cost spike. Wendy’s itself is not bankrupt — its largest operators are absorbing
        the system’s margin pain.
      </p>
      <div class="figure-grid">
        <div class="figure">
          <span class="value down" data-count="-7.6" data-suffix="%">0%</span>
          <span class="caption">Revenue change in 2025 → $618M</span>
        </div>
        <div class="figure">
          <span class="value down" data-count="32" data-prefix="−$" data-suffix="M">−$0M</span>
          <span class="caption">Net loss in 2025 (vs +$8M income in 2024)</span>
        </div>
        <div class="figure">
          <span class="value down" data-count="-14" data-suffix="%">0%</span>
          <span class="caption">H1 2026 revenue vs year-ago</span>
        </div>
        <div class="figure">
          <span class="value" data-count="314" data-suffix="">0</span>
          <span class="caption">Wendy’s restaurants still operating under Meritage</span>
        </div>
      </div>
    </section>

    <section class="section" id="exposure">
      <p class="section-kicker">03 · Why Wendy’s felt it harder</p>
      <h2>An 80% beef menu meets record cattle prices.</h2>
      <p>
        Low U.S. herds, a disease-driven cutoff of Mexican beef imports, and tariffs on
        South American beef drove costs up. Wendy’s protein mix left little room to pivot.
      </p>
      <div class="compare">
        <article>
          <h3>Wendy’s / Meritage</h3>
          <div class="mix" aria-hidden="true">
            <span class="beef" style="width: 80%"></span>
            <span class="chicken" style="width: 20%"></span>
          </div>
          <div class="mix-legend"><span>80% beef</span><span>20% chicken</span></div>
          <p>Fresh-beef identity concentrated cost risk when cattle prices spiked.</p>
        </article>
        <article>
          <h3>McDonald’s (contrast)</h3>
          <div class="mix" aria-hidden="true">
            <span class="beef" style="width: 50%"></span>
            <span class="chicken" style="width: 50%"></span>
          </div>
          <div class="mix-legend"><span>50% beef</span><span>50% chicken</span></div>
          <p>Balanced protein mix lets promotions shift toward chicken when beef runs hot.</p>
        </article>
      </div>
    </section>

    <section class="section" id="timeline">
      <p class="section-kicker">04 · Path to Chapter 11</p>
      <h2>Cost cuts were not enough.</h2>
      <p>
        Meritage closed ~60 underperforming stores, pulled back breakfast, cut G&amp;A,
        and ran sale-leasebacks — then forbearance expired and franchise termination
        notices arrived.
      </p>
      <ol class="timeline">
        <li>
          <time>2025</time>
          <p>Prime costs peak at 66.1%; same-store sales fall 7.2%; net loss ~$32M.</p>
        </li>
        <li>
          <time>H1 2026</time>
          <p>Revenue down 14%; another ~$23M net loss; more sale-leasebacks for liquidity.</p>
        </li>
        <li>
          <time>Aug 18</time>
          <p>Forbearance with lenders and franchisor expires.</p>
        </li>
        <li>
          <time>Sep 16</time>
          <p>Quality Is Our Recipe sends franchise and lease termination notices (disputed).</p>
        </li>
        <li>
          <time>Sep 17</time>
          <p>Voluntary Chapter 11 filed in W.D. Michigan. Stores stay open; ~9,000 team members paid.</p>
        </li>
      </ol>
      <div class="sources">
        <strong>Sources</strong>
        <ul>
          <li><a href="https://www.restaurantdive.com/news/nside-meritage-hospitality-group-wendys-bankruptcy-causes/830916/" rel="noopener" target="_blank">Restaurant Dive — Meritage bankruptcy causes</a></li>
          <li><a href="https://www.usatoday.com/story/money/food/2026/09/21/wendys-franchisee-bankruptcy/91873245007/" rel="noopener" target="_blank">USA Today — franchisee cites record beef prices</a></li>
          <li><a href="https://meritagehospitality.com/documents/68/2026_Shareholder_Letter.pdf" rel="noopener" target="_blank">Meritage 2026 shareholder letter (prime cost 66.1%)</a></li>
        </ul>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    Editorial briefing · not affiliated with Wendy’s or Meritage
  </footer>
`;

function animateCount(el) {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix ?? "";
  const prefix = el.dataset.prefix ?? "";
  const decimals = String(el.dataset.count).includes(".") ? 1 : 0;
  const duration = 1100;
  const start = performance.now();
  const from = 0;

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = from + (target - from) * eased;
    const formatted =
      decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    el.textContent = `${prefix}${formatted}${suffix}`;
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  const heroNum = document.querySelector(".hero-stat .num");
  if (heroNum) animateCount(heroNum);
} else {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const suffix = el.dataset.suffix ?? "";
    const prefix = el.dataset.prefix ?? "";
    el.textContent = `${prefix}${el.dataset.count}${suffix}`;
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      if (!reduceMotion) {
        entry.target.querySelectorAll("[data-count]").forEach((el) => {
          if (el.dataset.animated) return;
          el.dataset.animated = "1";
          animateCount(el);
        });
      }
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.22 }
);

document.querySelectorAll(".section").forEach((section) => observer.observe(section));
