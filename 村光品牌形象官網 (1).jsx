import { motion } from 'framer-motion';

export default function SatoHikariWebsite() {
  const IconArrow = () => <span className="text-base">→</span>;
  const IconSparkles = () => <span className="text-lg">✦</span>;
  const IconGlobe = () => <span className="text-lg">◌</span>;
  const IconMapPin = () => <span className="text-lg">⌂</span>;
  const IconUsers = () => <span className="text-lg">◯</span>;
  const IconMail = () => <span className="text-lg">✉</span>;
  const IconBook = () => <span className="text-lg">▣</span>;
  const IconCalendar = () => <span className="text-lg">◫</span>;
  const IconLandmark = () => <span className="text-lg">▤</span>;
  const IconInstagram = () => <span className="text-lg">◎</span>;

  const services = [
    {
      title: '村光旅行',
      subtitle: '文化行旅 × 風土體驗',
      icon: IconMapPin,
      desc: '以虎尾糖業文化、昭和市街、眷村記憶與地方日常為軸線，設計具故事感的導覽與深度旅程，讓旅人真正走進地方。',
      points: ['中日語導覽接待', '主題遊程企劃', '地方文化轉譯'],
    },
    {
      title: '聚光市集',
      subtitle: '場景經營 × 品牌共構',
      icon: IconCalendar,
      desc: '結合農產、甜點、青年品牌與地方故事，透過主題市集、展演與策展活動，打造能被感受、分享與記住的地方場景。',
      points: ['主題市集策劃', '品牌攤商整合', '活動現場執行'],
    },
    {
      title: '青村培育所',
      subtitle: '青年共作 × 農村設計',
      icon: IconUsers,
      desc: '串連青年、學生與地方夥伴，透過田野調查、設計實作、導覽策劃與內容製作，培養在地行動與共創能力。',
      points: ['地方田野踏查', '設計共創培力', '內容與提案陪伴'],
    },
  ];

  const routes = [
    {
      no: '01',
      title: '糖廠風土路徑',
      text: '從糖業歷史、五分車、製糖地景與糖都記憶出發，帶旅人重新理解虎尾作為糖都的文化脈絡。',
    },
    {
      no: '02',
      title: '昭和市街散策',
      text: '走進中山路與行政區，從街屋、老建築與生活紋理中，閱讀虎尾曾經的黃金年代。',
    },
    {
      no: '03',
      title: '建國眷村體驗',
      text: '串連戰後歷史、眷食記憶與文化場景，讓地方體驗不只停留在觀看，而是真正走進故事。',
    },
  ];

  const achievements = [
    '完成多場日本旅客與在台日本人導覽接待，建立中日語文化導覽實績',
    '辦理地瓜甜野祭等主題活動，串連農產、市集、糖業文化與展覽內容',
    '完成品牌 CIS、名片、社群經營與日文遊程導覽手冊等識別建置',
    '攜手虎珍堂與虎尾糖廠發展糖都故事盒與三溫糖系列商品提案',
  ];

  const highlightStats = [
    { label: '品牌主軸', value: '3 大面向' },
    { label: '文化路徑', value: '3 式體驗' },
    { label: '跨文化交流', value: '日台串連' },
    { label: '內容整合', value: '導覽＋策展＋設計' },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#4a4a4a]">
      <header className="sticky top-0 z-50 border-b border-[#eadfcd] bg-[#f7f4ef]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-5 w-5 rounded-[6px] bg-[#ff5700]" />
              <div className="h-5 w-5 rounded-[6px] bg-[#e5d5be]" />
              <div className="h-5 w-5 rounded-[6px] bg-[#357a75]" />
              <div className="h-5 w-5 rounded-[6px] bg-[#fcc05e]" />
            </div>
            <div>
              <div className="text-xl font-black tracking-[0.18em]">村光</div>
              <div className="text-[11px] tracking-[0.35em] text-[#357a75]">SATO HIKARI</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a href="#about" className="transition hover:text-[#ff5700]">關於村光</a>
            <a href="#services" className="transition hover:text-[#ff5700]">品牌服務</a>
            <a href="#routes" className="transition hover:text-[#ff5700]">體驗路徑</a>
            <a href="#works" className="transition hover:text-[#ff5700]">實績亮點</a>
            <a href="mailto:cht.adstudio@gmail.com" className="transition hover:text-[#ff5700]">合作洽詢</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(252,192,94,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(53,122,117,0.16),transparent_32%)]" />
        <div className="absolute -left-16 top-24 h-72 w-72 rounded-full bg-[#fcc05e]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#357a75]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-28">
          <motion.div {...fadeUp} className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eadfcd] bg-white/80 px-4 py-2 text-sm text-[#357a75] shadow-sm">
              <IconSparkles />
              從虎尾出發，照亮農村的光
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.15] text-[#4a4a4a] md:text-6xl">
              讓地方被看見，
              <span className="text-[#ff5700]">讓故事成為旅程</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666]">
              村光 Sato Hikari 是一個以農村文化、地方生活與創生精神為核心的品牌。
              我們透過導覽、策展、市集、設計與跨文化交流，讓虎尾與雲林的地方風景，從土地現場走向更多人的心裡。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#ff5700] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#ff5700]/20 transition hover:-translate-y-0.5"
              >
                看村光在做什麼
                <IconArrow />
              </a>
              <a
                href="mailto:cht.adstudio@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#357a75] bg-white px-6 py-4 text-sm font-bold text-[#357a75] transition hover:bg-[#357a75] hover:text-white"
              >
                預約合作與洽詢
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:max-w-3xl">
              {highlightStats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#eadfcd] bg-white/85 p-5 shadow-sm">
                  <div className="text-sm font-bold text-[#357a75]">{item.label}</div>
                  <div className="mt-2 text-2xl font-black text-[#4a4a4a]">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="relative z-10">
            <div className="relative overflow-hidden rounded-[34px] border border-[#eadfcd] bg-white p-6 shadow-[0_24px_90px_rgba(0,0,0,0.08)]">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-[#ff5700]">品牌核心</div>
                  <div className="mt-1 text-2xl font-black">溫柔、明亮、穩定的線條感</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 w-8 rounded-xl bg-[#ff5700]" />
                  <div className="h-8 w-8 rounded-xl bg-[#e5d5be]" />
                  <div className="h-8 w-8 rounded-xl bg-[#357a75]" />
                  <div className="h-8 w-8 rounded-xl bg-[#fcc05e]" />
                </div>
              </div>

              <div className="rounded-[28px] bg-[#fcc05e] p-8 text-white">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <div className="text-sm tracking-[0.35em]">SATO HIKARI</div>
                    <div className="mt-3 text-4xl font-black tracking-[0.15em]">村光</div>
                    <div className="mt-3 text-sm leading-7 text-white/90">
                      村、稻米、人、光明
                      <br />
                      溫柔地描繪地方的輪廓
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-10 w-10 rounded-xl bg-white/20" />
                    <div className="h-10 w-10 rounded-xl bg-white/20" />
                    <div className="h-10 w-10 rounded-xl bg-white/20" />
                    <div className="h-10 w-10 rounded-xl bg-white/20" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-[#f7f4ef] p-5">
                  <div className="text-sm font-bold text-[#357a75]">品牌一句話</div>
                  <p className="mt-2 text-lg font-medium leading-8 text-[#4a4a4a]">
                    以文化為光，照見土地的故事；以設計為橋，連結地方與世界。
                  </p>
                </div>
                <div className="rounded-[24px] bg-[#f7f4ef] p-5">
                  <div className="text-sm font-bold text-[#357a75]">品牌印象</div>
                  <p className="mt-2 text-lg font-medium leading-8 text-[#4a4a4a]">
                    溫暖、真誠、明亮，帶有田野感與當代設計感的地方品牌。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ff5700]">ABOUT</div>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">從糖業文化記憶出發，重現地方繁榮光景</h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#555]">
            <p>
              村光誕生於虎尾，從糖廠、老街、眷村與地方日常出發，重新整理虎尾的歷史紋理與文化魅力，讓原本散落在地方中的故事，被重新串連成為可以理解、可以參與，也可以被帶走的體驗。
            </p>
            <p>
              品牌名稱 Sato Hikari 代表「照亮農村的光」，也是對鄉村、砂糖與生活風景的想像。我們希望把雲林鄉村的溫度、土地的真誠，以及地方行動的能量，轉化成更有辨識度的品牌與內容。
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eadfcd]">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff5700]/10 text-[#ff5700]">
                  <IconSparkles />
                </div>
                <div className="text-sm font-bold text-[#357a75]">品牌願景</div>
                <div className="mt-2 text-xl font-black">讓村落的光，溫暖世界</div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eadfcd]">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#357a75]/10 text-[#357a75]">
                  <IconGlobe />
                </div>
                <div className="text-sm font-bold text-[#357a75]">品牌精神</div>
                <div className="mt-2 text-xl font-black">在地文化 × 當代創新 × 國際連結</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ff5700]">SERVICES</div>
              <h2 className="text-3xl font-black md:text-5xl">村光所做的事</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#666]">
              從導覽到策展、從市集到青年培育，村光不是單一活動品牌，而是一個持續與地方一起前進的行動平台。
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              const cardBg = index === 0 ? 'bg-[#fff7f2]' : index === 1 ? 'bg-[#f4faf9]' : 'bg-[#fffaf0]';
              const iconBg = index === 0 ? 'bg-[#ff5700]' : index === 1 ? 'bg-[#357a75]' : 'bg-[#fcc05e]';
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                  className={`group rounded-[32px] border border-[#eadfcd] ${cardBg} p-8 transition hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white ${iconBg}`}>
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <div className="mt-2 text-sm font-bold tracking-[0.16em] text-[#357a75]">{item.subtitle}</div>
                  <p className="mt-5 leading-8 text-[#555]">{item.desc}</p>
                  <div className="mt-6 space-y-2 text-sm font-medium text-[#4a4a4a]">
                    {item.points.map((point) => (
                      <div key={point} className="rounded-2xl bg-white px-4 py-3 ring-1 ring-[#eadfcd]">
                        ◆ {point}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="routes" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div {...fadeUp} className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ff5700]">ROUTES</div>
            <h2 className="text-3xl font-black md:text-5xl">尋迴虎尾郡，走進文化體驗路徑</h2>
          </div>
          <p className="text-lg leading-8 text-[#666]">
            村光將虎尾糖廠、市街建築、眷村記憶與風土體驗整合為主題路徑，讓地方文化不只是被介紹，而是被一步一步感受。
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {routes.map((route, index) => (
            <motion.div
              key={route.title}
              {...fadeUp}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
              className="overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-[#eadfcd]"
            >
              <div className="bg-[#f7f4ef] px-8 py-7">
                <div className="text-sm font-bold tracking-[0.25em] text-[#ff5700]">ROUTE {route.no}</div>
                <h3 className="mt-3 text-2xl font-black">{route.title}</h3>
              </div>
              <div className="p-8">
                <p className="leading-8 text-[#555]">{route.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="works" className="bg-[#357a75] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#fcc05e]">WORKS</div>
              <h2 className="text-3xl font-black md:text-5xl">村光的實績亮點</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/80">
              我們持續把地方文化轉化成真實發生的活動、商品、內容與交流，讓品牌不只停留在理念，而是落在可被看見的成果上。
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.06 }}
                className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-3 text-sm font-bold text-[#fcc05e]">0{index + 1}</div>
                <p className="text-lg leading-8">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.div {...fadeUp} className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-[#eadfcd]">
            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ff5700]">COLLABORATION</div>
            <h3 className="text-3xl font-black">適合合作的對象</h3>
            <div className="mt-6 grid gap-4">
              {[
                { label: '學校與教育單位', icon: IconBook },
                { label: '地方創生與文化團隊', icon: IconLandmark },
                { label: '旅行社與國際交流單位', icon: IconGlobe },
                { label: '品牌合作與商品開發夥伴', icon: IconSparkles },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl bg-[#f7f4ef] px-5 py-4 text-lg font-medium text-[#4a4a4a]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#357a75] ring-1 ring-[#eadfcd]">
                    <Icon />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }} className="rounded-[32px] bg-[#fcc05e] p-8 text-white shadow-sm">
            <div className="mb-4 text-sm font-bold tracking-[0.25em]">VALUE</div>
            <h3 className="text-3xl font-black">村光能帶來什麼</h3>
            <div className="mt-6 space-y-4 text-lg leading-8 text-white/95">
              <p>◆ 地方導覽資源整合與文化內容轉譯</p>
              <p>◆ 日台交流經驗與中日語溝通能力</p>
              <p>◆ 市集、活動、記者會與品牌視覺整合執行</p>
              <p>◆ 內容企劃、社群推廣、伴手禮與路徑商品化</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#eadfcd] bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <motion.div {...fadeUp}>
            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ff5700]">CONTACT</div>
            <h2 className="text-3xl font-black md:text-5xl">一起讓地方發光</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#666]">
              無論你想合作導覽體驗、地方策展、市集活動、文化內容設計，或是希望為品牌打造更具故事感的地方連結，都歡迎與村光聊聊。
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }} className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[28px] bg-[#f7f4ef] p-6 ring-1 ring-[#eadfcd]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#357a75] ring-1 ring-[#eadfcd]">
                <IconSparkles />
              </div>
              <div className="text-sm font-bold text-[#357a75]">品牌名稱</div>
              <div className="mt-2 text-2xl font-black">村光 Sato Hikari</div>
            </div>

            <div className="rounded-[28px] bg-[#f7f4ef] p-6 ring-1 ring-[#eadfcd]">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#357a75] ring-1 ring-[#eadfcd]">
                <IconInstagram />
              </div>
              <div className="text-sm font-bold text-[#357a75]">Instagram</div>
              <div className="mt-2 text-2xl font-black">@satohikari.tw</div>
            </div>

            <div className="rounded-[28px] bg-[#f7f4ef] p-6 ring-1 ring-[#eadfcd] sm:col-span-2">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#357a75] ring-1 ring-[#eadfcd]">
                <IconMail />
              </div>
              <div className="text-sm font-bold text-[#357a75]">合作內容</div>
              <div className="mt-2 text-lg leading-8 text-[#555]">
                文化導覽｜品牌策展｜主題市集｜地方交流｜內容設計｜遊程企劃
              </div>
              <a
                href="mailto:cht.adstudio@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-[#357a75] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                cht.adstudio@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
